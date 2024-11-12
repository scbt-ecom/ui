import { type SpritesMap } from '$/shared/ui'

export interface IFooterSocialLinks {
  iconName: `social/${SpritesMap['social']}`
  href: string
}

export interface IFooterNavLinks {
  groupLabel: string
  links: {
    text: string
    href: string
  }[]
}

export interface IFooterPhones {
  phone: string
  text: string
}
