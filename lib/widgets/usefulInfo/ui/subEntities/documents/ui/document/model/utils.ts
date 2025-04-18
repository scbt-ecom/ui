import { cva } from 'class-variance-authority'
import type { SpritesMap } from '$/shared/ui'

export type IconNames = Extract<SpritesMap['files'], 'documentFilled' | 'documentOutline'>

export const iconsMap: Record<IconNames, `files/${IconNames}`> = {
  documentFilled: 'files/documentFilled',
  documentOutline: 'files/documentOutline'
}

export const iconConfig = cva('size-8 transition-colors', {
  variants: {
    iconType: {
      documentOutline: 'text-icon-secondary-dark-default group-hover:text-icon-secondary-dark-hover',
      documentFilled: 'text-icon-primary-default group-hover:text-icon-primary-hover'
    }
  },
  defaultVariants: {
    iconType: 'documentOutline'
  }
})
