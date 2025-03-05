import { Fragment } from 'react'
import type { ParserOptions } from './htmlParser'
import { ReactHTMLParser } from './reactHtmlParser'

type HTMLRendererProps = {
  html: string
  options?: ParserOptions
  as?: keyof React.JSX.IntrinsicElements
}

export const HTMLRenderer = ({ html, options, as }: HTMLRendererProps) => {
  const Wrapper = as ?? Fragment

  const nodes = ReactHTMLParser.toReactNodes(html, options)

  return <Wrapper>{nodes}</Wrapper>
}
