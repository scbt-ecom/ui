import type { ComponentProps, ReactElement } from 'react'

export type RenderImage = {
  imgProps: ComponentProps<'img'>
  renderImageCb?: (props: any) => ReactElement
}

export const renderImage = ({ imgProps, renderImageCb }: RenderImage) => {
  return renderImageCb ? renderImageCb(imgProps) : <img {...imgProps} />
}
