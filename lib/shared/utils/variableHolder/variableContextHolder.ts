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
  variables: Variable<Key, Value>[]
  append: (variable: Variable<Key, Value>) => void
  remove: (key: Key) => void
  has: (key: Key) => boolean
  replace: (variables: Variable<Key, Value>[]) => void
  clear: () => void
  update: (id: string, variable: Variable<Key, Value>) => void
  entriesOf: (...keys: Key[]) => VariableEntry<Key, Value>[]
  observe: (listener: (variables: Variable<Key, Value>[]) => void) => () => void
  get: (key: Key) => Variable<Key, Value> | undefined
}

/**
 * Класс для управления переменными
 */
export class VariableContextHolder<Key extends string = string, Value = string> implements IVariableContextHolder<Key, Value> {
  private _variables: Variable<Key, Value>[] = []
  private _listeners = new Map<symbol, (variables: Variable<Key, Value>[]) => void>()
  private _nextListenerId: number = 0

  private static _VARIABLE_REGEX: RegExp = /\$\{([^}]+)}/g
  private static _VARIABLE_PATTERN: string = '${variable}'
  private static _instance = new Map<string, VariableContextHolder>()

  private constructor(private _store: string) {
    this._variables = localStorageActions.getItem<Variable<Key, Value>[]>(this._store) ?? []
  }

  static unwrap(variable: string): string {
    return variable.replace(/\$\{|}/g, '')
  }

  static wrap(variable: string): string {
    return this._VARIABLE_PATTERN.replace('variable', variable)
  }

  static match(pattern: string): string[] | null {
    return pattern.match(this._VARIABLE_REGEX) as string[] | null
  }

  // use only a singleton instance, do not create duplicated instances of each store key
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
    localStorageActions.setItem(this._store, this._variables)
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
