// import { BaseHTMLParser, type ParserOptions } from './baseHtmlParser'
//
// class NodeHTMLParserError extends Error {
//   constructor(
//     message: string,
//     public originalError?: Error
//   ) {
//     super(message)
//     this.name = 'NodeHTMLParserError'
//   }
// }
//
// export class NodeHTMLParser extends BaseHTMLParser {
//   constructor(options?: ParserOptions) {
//     super(options)
//   }
//
//   async parseFromString(html: string): Promise<Document> {
//     const { JSDOM } = await import('jsdom').catch((error) => {
//       throw new NodeHTMLParserError('Cannot find jsdom in dependencies. Try to install jsdom', error as Error)
//     })
//
//     const dom = new JSDOM(html)
//
//     return dom.window.document
//   }
// }
