import type {
  TCopyrightClasses,
  TFooterLogoClasses,
  TNavigationLinksClasses,
  TPhoneBlockClasses,
  TSiteMapClasses,
  TSocialLinksClasses
} from '../ui'
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

export type TFooterRenderBlocks = {
  withSocial?: boolean
  withPhones?: boolean
  withNavLinks?: boolean
  withCopyright?: boolean
  withSiteMap?: boolean
}

export type TFooterClasses = {
  root?: string
  footerContainer?: string
  footerWrapper?: string
  footerHead?: string
  footerSocialBlock?: string
  footerBottom?: string

  footerLogo?: TFooterLogoClasses
  navLinks?: TNavigationLinksClasses
  phonesBlock?: TPhoneBlockClasses
  socialLinks?: TSocialLinksClasses
  siteMap?: TSiteMapClasses
  copyright?: TCopyrightClasses
}
