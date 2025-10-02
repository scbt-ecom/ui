import { localStorageActions } from '../localStorageActions'

export interface Variable<Key = string, Value = string> {
  _id: string
  key: Key
  value: Value
  createdAt: string
  updatedAt: string
  description: string
}

export type VariableEntry<Key = string, Value = string> = [Key, Value]

export interface IVariableContextHolder<Key, Value> {
  /**
   * список переменных, находящихся в имплементации
   */
  variables: Variable<Key, Value>[]
  /**
   * метод для добавления переменной
   * @param variable
   */
  append: (variable: Variable<Key, Value>) => void
  /**
   * метод для удаления переменной
   * @param key
   */
  remove: (key: Key) => void
  /**
   * метод для проверки наличия переменной по ключу
   * @param key
   */
  has: (key: Key) => boolean
  /**
   * метод для замены всех переменных
   * @param variables
   */
  replace: (variables: Variable<Key, Value>[]) => void
  /**
   * метод для очистки переменных
   */
  clear: () => void
  /**
   * метод для обновления переменной, по её идентификатору
   * @param id
   * @param variable
   */
  update: (id: string, variable: Variable<Key, Value>) => void
  /**
   * получение вхождений переменных по ключам
   * @param keys
   * @returns {VariableEntry<Key, Value>[]} entries `Array<[Key, Value]>`
   */
  entriesOf: (...keys: Key[]) => VariableEntry<Key, Value>[]
  /**
   * метод для подписки на изменения переменных
   * @param listener
   * @returns функция для отписки
   */
  observe: (listener: (variables: Variable<Key, Value>[]) => void) => () => void
  /**
   * получение переменной по ключу
   * @param key
   * @returns `Variable<Key, Value>` если переменная присутствует, `undefined` если переменной не существует
   */
  get: (key: Key) => Variable<Key, Value> | undefined
}

export interface VariableStore {
  setItem: <T>(key: string, value: T) => void
  getItem: <T>(key: string) => T | null
  clearItems: (...keys: string[]) => void
}

class InMemoryVariableStore implements VariableStore {
  private _store = new Map<string, unknown>()

  constructor() {}

  clearItems(...keys: string[]): void {
    for (const key of keys) {
      this._store.delete(key)
    }
  }

  getItem<T>(key: string): T | null {
    return (this._store.get(key) as T) ?? null
  }

  setItem<T>(key: string, value: T): void {
    this._store.set(key, value)
  }
}

/**
 * Класс для управления переменными.
 * Присутствует возможность использования в среде исполнения NodeJS, при этом будет использоваться in-memory хранилище переменных, что может потреблять дополнительную память приложения
 *
 * @example Базовое использование
 * ```ts
 * // используем статичный метод класса для получения инстанса
 * const holder = VariableContextHolder.getInstance('VARIABLE_STORE')
 *
 * // эмулируем создание переменной
 * const variable: Variable = {
 *   _id: Math.random().toString(36).substring(2),
 *   // ключ должен быть обёрнут в шаблон переменной
 *   // чтобы это сделать, используем статичный метод
 *   key: VariableContextHolder.wrap('variable_key'),
 *   value: 'variable_value',
 *   createdAt: new Date().toISOString(),
 *   updatedAt: new Date().toISOString(),
 *   description: ''
 * }
 *
 * holder.append(variable)
 *
 * holder.variables.forEach((v) => {
 *   // рендерим переменные как в соответствии с требованиями
 * })
 * ```
 *
 * @example Использование с react
 * ```tsx
 * const Component = () => {
 *   // создадим ref с экземпляром класса (это нужно чтобы не изменять ссылку при ре-рендере)
 *   const holder = useRef(VariableContextHolder.getInstance('VARIABLE_STORE'))
 *   // подключаем и подписываемся на мутацию переменных
 *   const variables = useSyncExternalStore(holder.current.observe, () => holder.current.variables)
 *
 *   return (
 *     <div>
 *       {variables.map((variable) => (
 *         // рендерим переменные как в соответствии с требованиями
 *       ))}
 *     </div>
 *   )
 * }
 * ```
 *
 * @example Синхронизация с сервером
 * ```ts
 * const holder = VariableContextHolder.getInstance('VARIABLE_STORE')
 *
 * // загружаем переменные с сервера
 * fetch('https://backend.url/variables')
 *   .then((response) => response.json())
 *   .then((data) => holder.replace(data))
 * ```
 *
 * @example Обход строки для замены переменных на их значения
 * ```ts
 * const holder = VariableContextHolder.getInstance('VARIABLE_STORE')
 *
 * const transformVariable = (value: string): string => {
 *   let str = value
 *   // находим все переменные в строке
 *   let matches = VariableContextHolder.match(str)
 *   // получаем вхождения по найденным переменным
 *   let variables = holder.entriesOf(...(matches ?? []))
 *
 *   // выполняем замену переменных до тех пор, пока в строке содержатся переменные
 *   while (!TypeGuards.isArrayEmpty(variables)) {
 *     variables.forEach(([key, value]) => {
 *       // заменяем каждую переменную на её значение
 *       str = str.replace(key, value)
 *     })
 *     // пробуем снова получить переменные в строке,
 *     // так как переменная может содержать другую переменную
 *     matches = VariableContextHolder.match(str)
 *     variables = holder.entriesOf(...(matches ?? []))
 *   }
 *
 *   return str
 * }
 *
 * const stringWithVariables = 'Процентная ставка \${percent}% годовых до \${months} месяцев'
 * const processedString = transformVariable(stringWithVariables)
 * ```
 */
export class VariableContextHolder<Key extends string = string, Value = string> implements IVariableContextHolder<Key, Value> {
  private _variables: Variable<Key, Value>[] = []
  private _listeners = new Map<symbol, (variables: Variable<Key, Value>[]) => void>()
  private _nextListenerId: number = 0
  private _storeContext: VariableStore

  private static _VARIABLE_REGEX: RegExp = /\$\{([^}]+)}/g
  private static _VARIABLE_PATTERN: string = '${variable}'
  private static _instance = new Map<string, VariableContextHolder>()

  private constructor(private _store: string) {
    // create in-memory store if instance created out of browser
    if (typeof window === 'undefined') {
      this._storeContext = new InMemoryVariableStore()
    } else {
      this._storeContext = localStorageActions
    }

    this._variables = this._storeContext.getItem<Variable<Key, Value>[]>(this._store) ?? []
  }

  /**
   * метод для извлечения ключа переменной из шаблона
   * @param variable
   */
  public static unwrap(variable: string): string {
    return variable.replace(/\$\{|}/g, '')
  }

  /**
   * метод для оборачивания ключа переменной в шаблон
   * @param variable
   */
  public static wrap(variable: string): string {
    return this._VARIABLE_PATTERN.replace('variable', variable)
  }

  /**
   * метод для поиска переменных в строке
   * @param pattern
   * @returns `string[]` если переменные присутствуют в строке, иначе `null`
   */
  public static match(pattern: string): string[] | null {
    return pattern.match(this._VARIABLE_REGEX) as string[] | null
  }

  /**
   * метод для получения синглтон экземпляра класса по ключу хранилища
   * @param store
   * @returns экземпляр подключенный к in-memory хранилищу если код выполняется в NodeJS, `localStorage` если в браузере
   */
  public static getInstance(store: string): VariableContextHolder {
    const instance = VariableContextHolder._instance.get(store)

    if (!instance) {
      const holder = new VariableContextHolder(store)
      VariableContextHolder._instance.set(store, holder)

      return holder
    }

    return instance
  }

  get variables() {
    return this._variables
  }

  private collect() {
    this._storeContext.setItem(this._store, this._variables)
    this._listeners.forEach((listener) => listener(this._variables))

    return this._variables
  }

  get = (id: string) => {
    return this._variables.find((variable) => variable._id === id)
  }

  append = (variable: Variable<Key, Value>) => {
    this._variables.push(variable)
    this.collect()
  }

  clear = () => {
    this._variables = []
    this.collect()
  }

  entriesOf = (...keys: Key[]): VariableEntry<Key, Value>[] => {
    const entries: VariableEntry<Key, Value>[] = []

    for (const variable of this._variables) {
      if (keys.includes(variable.key)) entries.push([variable.key, variable.value])
    }

    return entries
  }

  remove = (key: Key) => {
    this._variables = this._variables.filter((v) => v.key !== key)
    this.collect()
  }

  replace = (variables: Variable<Key, Value>[]): Variable<Key, Value>[] => {
    this._variables = variables

    return this.collect()
  }

  update = (id: string, variable: Variable<Key, Value>): Variable<Key, Value>[] => {
    const updated = this._variables.map((v) => (v._id === id ? variable : v))

    return this.replace(updated)
  }

  observe = (listener: (variables: Variable<Key, Value>[]) => void): (() => void) => {
    const listenerId = Symbol(this._nextListenerId++)
    this._listeners.set(listenerId, listener)

    return () => {
      this._listeners.delete(listenerId)
    }
  }

  has(key: Key): boolean {
    return this._variables.some((variable) => variable.key === key)
  }
}
