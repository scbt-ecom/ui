'use client'
import { Fragment, useEffect, useState } from 'react'
import type { ParserOptions } from './baseHtmlParser'
import { ReactHTMLParser } from './reactHtmlParser'

type ElementTag = keyof React.JSX.IntrinsicElements

type HTMLRendererProps<AS extends ElementTag, Props = AS extends ElementTag ? React.ComponentProps<AS> : {}> = {
  html: string
  options?: ParserOptions
  as?: AS
} & Props

type AsyncRenderProps = {
  promises: Promise<React.ReactNode[]>
}

const AsyncRender = ({ promises }: AsyncRenderProps) => {
  const [nodes, setNodes] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const resolve = async () => {
      setNodes(await promises)
    }

    resolve()
  }, [promises])

  return <>{nodes}</>
}

export const HTMLRenderer = <AS extends ElementTag>({ html, options, as, ...props }: HTMLRendererProps<AS>) => {
  const Wrapper = as ?? Fragment

  const wrapperProps = as ? props : {}

  const nodes = ReactHTMLParser.toReactNodes(html, options)

  return (
    // @ts-expect-error disable warning
    <Wrapper {...wrapperProps}>
      <AsyncRender promises={nodes} />
    </Wrapper>
  )
}
