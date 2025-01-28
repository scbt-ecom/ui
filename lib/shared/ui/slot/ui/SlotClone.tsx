import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import { getElementRef, mergeProps } from '../model'
import { mergeRefs } from '$/shared/utils'

export type SlotCloneProps = {
  children: React.ReactNode
}

export const SlotClone = forwardRef<any, SlotCloneProps>(({ children, ...props }, ref) => {
  if (isValidElement(children)) {
    const childrenRef = getElementRef(children)

    return cloneElement(children, {
      ...mergeProps(props, children.props),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref: ref ? mergeRefs(ref, childrenRef) : childrenRef
    })
  }

  return Children.count(children) > 1 ? Children.only(null) : null
})
SlotClone.displayName = 'SlotClone'
