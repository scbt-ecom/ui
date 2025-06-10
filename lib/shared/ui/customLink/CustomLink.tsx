'use client'

import { type ComponentProps } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { type AllowedIcons, Icon } from '../icon'
import { customLinkConfig, linkArrowConfig } from './model/helpers'
import { cn } from '$/shared/utils'

type CustomLinkClasses = {
  link?: string
  icon?: string
}

type CustomLinkConfig = VariantProps<typeof customLinkConfig>

export interface CustomLinkProps extends CustomLinkConfig, Omit<ComponentProps<'a'>, 'className' | 'href'> {
  icon?: AllowedIcons
  href: string
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
