import { isValidElement } from 'react'
import { Slottable, type SlottableProps } from '../ui'

export const isSlottable = (child: React.ReactNode): child is React.ReactElement<SlottableProps, typeof Slottable> => {
  return isValidElement(child) && child.type === Slottable
}
