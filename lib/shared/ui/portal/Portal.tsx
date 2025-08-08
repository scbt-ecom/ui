import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: ReactNode
  root?: HTMLElement | false
}

export const Portal = (props: PortalProps) => {
  const { root, children } = props

  if (!root) {
    return children
  }

  return createPortal(children, root)
}
