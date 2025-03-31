'use client'

import { BaseHTMLParser, type ParserOptions } from './baseHtmlParser'

const isBrowser = typeof window !== 'undefined'
//
// class BrowserHTMLParserError extends Error {
//   constructor(
//     message: string,
//     public originalError?: Error
//   ) {
//     super(message)
//     this.name = 'BrowserHTMLParserError'
//   }
// }

export class HTMLParser extends BaseHTMLParser {
  constructor(options?: ParserOptions) {
    super(options)
  }

  async parseFromString(html: string): Promise<Document> {
    if (!isBrowser) {
      return Promise.reject()
    }

    const parser = new DOMParser()
    return parser.parseFromString(html, 'text/html')
  }
}
