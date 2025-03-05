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

export class HTMLParser {
  /**
   * Функция для преобразования html строки в DOM объект
   */
  static parseFromString(html: string): Document {
    const parser = new DOMParser()
    return parser.parseFromString(html, 'text/html')
  }

  /**
   * Функция для обхода html
   */
  private static traverse(node: Node, as: 'string' | 'node', elements: (string | Node)[], options?: ParserOptions) {
    const { includeSolidText, recursive, element } = options || {}

    // если node является элементом (HTML | DIV | P | UL или другие)
    if (node.nodeType === Node.ELEMENT_NODE) {
      // собираем как Node
      if (as === 'node') {
        // если фильтрация не нужна
        if (!element) {
          elements.push(node)
          return
        }

        // собираем node только по фильтру
        if ((node as Element).tagName.toLowerCase() === element) {
          elements.push(node)
        }
      } else {
        // собираем как строки
        const content = (node as Element).outerHTML.trim()
        // если фильтрация не нужна
        if (!element) {
          elements.push(content)
          return
        }
        // собираем только по фильтру
        if (content.startsWith(`<${element}`)) {
          elements.push(content)
        }
      }
      // проходим по всем нодам рекурсивно
      if (recursive) {
        for (const child of node.childNodes) {
          this.traverse(child, as, elements, options)
        }
      }
    }
    // собираем текстовые ноды
    if (includeSolidText) {
      if (node.nodeType === Node.TEXT_NODE) {
        // собираем как Node
        if (as === 'node') {
          elements.push(node)
        } else {
          // собираем как простой текст
          const content = node.textContent

          if (content) {
            elements.push(content)
          }
        }
      }
    }
  }

  /**
   * Функция для парсинга html строки
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

    switch (as) {
      case 'string':
        if (includeBody) {
          this.traverse(doc.body, 'string', stringNodes, options)
        } else {
          for (const child of doc.body.childNodes) {
            this.traverse(child, 'string', stringNodes, options)
          }
        }
        break
      case 'node':
        if (includeBody) {
          this.traverse(doc.body, 'node', nodes, options)
        } else {
          for (const child of doc.body.childNodes) {
            this.traverse(child, 'node', nodes, options)
          }
        }
    }

    return { stringNodes, nodes }
  }

  /**
   * Функция для подсчета количества тегов в html строке
   */
  static countElements(html: string, options?: ParserOptions): number {
    const nodes = this.parse(html, 'string', options).stringNodes

    return nodes.length
  }
}
