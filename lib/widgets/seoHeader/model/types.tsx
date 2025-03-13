import type { AllowedIcons } from '$/shared/ui'

export type Link<Icon = boolean> = {
  href: string
  icon?: Icon
}

export type Category = {
  title?: string
  children: Category[]
  link?: Link
}

export type SeoHeaderHelpers = {
  title: string
  link: Link<AllowedIcons>
}
