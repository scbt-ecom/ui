'use client'
import type { ParserOptions } from './baseHtmlParser'

type ElementTag = keyof React.JSX.IntrinsicElements

type HTMLRendererProps<AS extends ElementTag, Props = AS extends ElementTag ? React.ComponentProps<AS> : {}> = {
  html: string
  options?: ParserOptions
  as?: AS
} & Props

export const HTMLRenderer = <AS extends ElementTag>({ html, as, ...props }: HTMLRendererProps<AS>) => {
  const Wrapper = as ?? 'div'

  // @ts-expect-error abc
  return <Wrapper dangerouslySetInnerHTML={{ __html: html }} {...props} />
}
