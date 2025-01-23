'use client'

import { type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type AllowedIcons, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

const customLinkConfig = cva(
  'group outline-hidden transition-all duration-100 p-[2px] rounded-sm border border-solid border-transparent',
  {
    variants: {
      intent: {
        blue: 'text-color-primary-default hover:text-color-primary-hover hover:underline underline-offset-4 focus-visible:text-color-primary-default focus-visible:border-primary-focus',
        white:
          'text-color-white hover:text-color-footer focus-visible:text-color-white hover:underline underline-offset-4  focus-visible:border-primary-focus'
      },
      withUnderline: {
        true: 'underline underline-offset-4',
        false: ''
      },
      disabled: {
        true: 'text-color-primary-disabled! pointer-events-none border-transparent!',
        false: ''
      },
      size: {
        sm: 'desk-body-regular-m',
        md: 'desk-body-regular-l'
      }
    },
    defaultVariants: {
      intent: 'blue',
      disabled: false,
      size: 'sm',
      withUnderline: false
    }
  }
)

const linkArrowConfig = cva('size-6', {
  variants: {
    intent: {
      blue: 'text-icon-primary-default group-hover:text-icon-primary-hover group-focus:text-icon-primary-default ',
      white: 'text-icon-white group-hover:text-icon-footer group-focus:text-icon-white'
    },
    disabled: {
      true: 'text-icon-primary-disabled! pointer-events-none',
      false: ''
    }
  },
  defaultVariants: {
    intent: 'blue',
    disabled: false
  }
})

type CustomLinkClasses = {
  link?: string
  icon?: string
}

type CustomLinkConfig = VariantProps<typeof customLinkConfig>

export interface CustomLinkProps extends CustomLinkConfig, Omit<ComponentProps<'a'>, 'className'> {
  icon?: AllowedIcons
  classes?: CustomLinkClasses
}

export const CustomLink = ({ intent, children, disabled, size, icon, classes, withUnderline, ...props }: CustomLinkProps) => {
  return (
    <a className={cn(customLinkConfig({ intent, withUnderline, disabled, size }), classes?.link)} {...props}>
      {children}
      {icon && <Icon name={icon} className={cn(linkArrowConfig({ intent, disabled }), classes?.icon)} />}
    </a>
  )
}
