import { createElement } from 'react'
import { HTMLParser, type ParserOptions } from './htmlParser'

export class ReactHTMLParser {
  /**
   * Функция для парсинга ноды в react элемент
   */
  private static parseNode(node: Node): React.ReactNode {
    // if node is text node
    if (node.nodeType === Node.TEXT_NODE) {
      const content = node.textContent

      return content ?? null
    }
    // if node is element node
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element
      const tagName = element.tagName.toLowerCase()

      const attributes: Record<string, string | boolean | Record<string, string>> = {}
      // collect attributes
      for (const attr of element.attributes) {
        let reactAttrName = attr.name
        let reactAttrValue: string | boolean | Record<string, string> = attr.value

        switch (attr.name) {
          case 'class':
            reactAttrName = 'className'
            break
          case 'for':
            reactAttrName = 'htmlFor'
            break
          case 'checked':
          case 'disabled':
          case 'selected':
            reactAttrValue = attr.value !== 'false'
            reactAttrValue = attr.value !== 'false'
            reactAttrValue = attr.value !== 'false'
            break
          case 'readonly':
            reactAttrName = 'readOnly'
            reactAttrValue = attr.value !== 'false'
            break
          case 'style':
            reactAttrName = 'style'
            const styles: Record<string, string> = {}
            attr.value.split(';').forEach((style) => {
              const [prop, value] = style.split(':')

              if (prop && value) {
                const camelProp = prop.trim().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

                styles[camelProp] = value.trim()
              }
            })

            reactAttrValue = styles
            break
        }

        attributes[reactAttrName] = reactAttrValue
      }

      attributes.key = Math.random().toString(36).substring(2, 9)

      const children: React.ReactNode[] = []
      // recursive parse children nodes
      for (const child of element.childNodes) {
        const childNode = this.parseNode(child as Node)

        if (childNode) {
          children.push(childNode)
        }
      }

      return createElement(tagName, attributes, ...children)
    }

    return null
  }

  /**
   * функция для преобразования html строки в react элементы
   */
  static toReactNodes(html: string, options?: ParserOptions) {
    const { nodes } = HTMLParser.parse(html, 'node', options)

    return nodes.map((node) => this.parseNode(node))
  }
}
