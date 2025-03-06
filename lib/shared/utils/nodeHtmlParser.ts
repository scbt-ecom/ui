import { HTMLParser, type ParserOptions } from './htmlParser'

export class NodeHTMLParser extends HTMLParser {
  static async parseFromString(html: string): Promise<Document> {
    const { JSDOM } = await import('jsdom')

    if (!JSDOM) {
      throw new Error('Cannot find jsdom in dependencies. Try to install jsdom. pnpm add jsdom')
    }

    const dom = new JSDOM(html)

    return dom.window.document
  }

  static async parse(
    html: string,
    as: 'string' | 'node',
    options?: ParserOptions
  ): Promise<{ stringNodes: string[]; nodes: Node[] }> {
    const { includeBody } = options || {}

    const stringNodes: string[] = []
    const nodes: Node[] = []
    const doc = await this.parseFromString(html)

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

  static async countElements(html: string, options?: ParserOptions): Promise<number> {
    const { stringNodes } = await this.parse(html, 'string', options)

    return stringNodes.length
  }
}
