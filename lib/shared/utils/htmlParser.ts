import { JSDOM } from 'jsdom'

export type ParserOptions = {
  /**
   * включать элемент body
   */
  includeBody?: boolean
  /**
   * включать сплошной текст (вне тегов)
   */
  includeSolidText?: boolean
  /**
   * парсить рекурсивно
   */
  recursive?: boolean
  /**
   * фильтровать только нужные html теги
   */
  element?: keyof React.JSX.IntrinsicElements
}

const isBrowser = typeof window !== 'undefined'

const { Node } = isBrowser ? window : new JSDOM().window

export class HTMLParser {
  /**
   * Преобразует HTML строку в DOM объект.
   * @param html HTML строка
   * @returns DOM объект
   */
  static parseFromString(html: string): Document {
    if (isBrowser) {
      const parser = new DOMParser()
      return parser.parseFromString(html, 'text/html')
    }

    const dom = new JSDOM(html)
    return dom.window.document
  }

  /**
   * Рекурсивно обходит DOM дерево и собирает данные в зависимости от опций.
   * @param node Текущий узел DOM дерева
   * @param elements Массив для сбора элементов
   * @param as Тип возвращаемых данных ('string' или 'node')
   * @param options Опции парсинга
   */
  private static traverse(node: Node, as: 'string' | 'node', elements: (string | Node)[], options?: ParserOptions) {
    const { includeSolidText, recursive, element } = options || {}

    switch (node.nodeType) {
      // если узел - элемент
      case Node.ELEMENT_NODE:
        const elementNode = node as Element
        const elementName = elementNode.tagName.toLowerCase()

        // если нашли элемент script, в целях безопасности пропускаем его
        if (elementName === 'script') {
          console.warn('Found script node. For better security this node will be skipped.')
          break
        }

        // если требуется только определенные элементы и текущий не подходит, пропускаем
        if (element && elementName !== element) {
          break
        }

        // добавляем элемент в зависимости от требуемого типа
        if (as === 'node') {
          elements.push(node)
        } else {
          const content = elementNode.outerHTML.trim()
          elements.push(content)
        }

        // если требуется рекурсивно обрабатывать дочерние ноды
        if (recursive) {
          for (const child of node.childNodes) {
            this.traverse(child, as, elements, options)
          }
        }
        break
      // если узел - текстовый и требуется его добавить, добавляем
      case Node.TEXT_NODE:
        if (!includeSolidText) {
          break
        }

        if (as === 'node') {
          elements.push(node)
        } else {
          const content = node.textContent

          if (content) {
            elements.push(content)
          }
        }
        break
    }
  }

  /**
   * Парсит HTML строку и возвращает массив тегов или нод в зависимости от опций.
   * @param html HTML строка
   * @param as Тип возвращаемых данных ('string' или 'node')
   * @param options Опции парсинга
   * @returns Массив тегов или нод
   */
  static parse(
    html: string,
    as: 'string' | 'node' = 'string',
    options?: ParserOptions
  ): { stringNodes: string[]; nodes: Node[] } {
    const { includeBody } = options || {}

    const stringNodes: string[] = []
    const nodes: Node[] = []
    const doc = this.parseFromString(html)

    const elements = as === 'string' ? stringNodes : nodes

    if (includeBody) {
      this.traverse(doc.body, as, elements, options)
    } else {
      for (const child of doc.body.childNodes) {
        this.traverse(child, as, elements, options)
      }
    }

    return { stringNodes, nodes }
  }

  /**
   * Считает количество указанных тегов в HTML строке.
   * @param html HTML строка
   * @param options настройки парсера
   * @returns Количество найденных тегов
   */
  static countElements(html: string, options?: ParserOptions): number {
    const nodes = this.parse(html, 'string', options).stringNodes

    return nodes.length
  }
}
