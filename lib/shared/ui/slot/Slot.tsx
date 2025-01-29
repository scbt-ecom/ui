import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import { isSlottable } from './model'
import { SlotClone, type SlottableProps } from '$/shared/ui/slot/ui'

export type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

export const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  const childrenArray = Children.toArray(children)
  const slottable = childrenArray.find(isSlottable)

  if (slottable) {
    const newElement = slottable.props.children

    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (Children.count(newElement) > 1) {
          return Children.only(null)
        }

        return isValidElement(newElement) ? (newElement.props as SlottableProps).children : null
      } else {
        return child
      }
    })

    return (
      <SlotClone {...props} ref={ref}>
        {isValidElement(newElement) ? cloneElement(newElement, undefined, newChildren) : null}
      </SlotClone>
    )
  }

  return (
    <SlotClone {...props} ref={ref}>
      {children}
    </SlotClone>
  )
})
Slot.displayName = 'Slot'
