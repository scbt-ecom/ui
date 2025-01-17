import type {
  CopyrightClasses,
  FooterLogoClasses,
  NavigationLinksClasses,
  PhoneBlockClasses,
  SiteMapClasses,
  SocialLinksClasses
} from '../ui'
import { type SpritesMap } from '$/shared/ui'

export interface FooterSocialLinks {
  iconName: `social/${SpritesMap['social']}`
  href: string
}

export interface FooterNavLinks {
  groupLabel: string
  links: {
    text: string
    href: string
  }[]
}

export interface FooterPhones {
  phone: string
  text: string
}

export type FooterRenderBlocks = {
  withSocial?: boolean
  withPhones?: boolean
  withNavLinks?: boolean
  withCopyright?: boolean
  withSiteMap?: boolean
}

export type FooterClasses = {
  root?: string
  footerContainer?: string
  footerWrapper?: string
  footerHead?: string
  footerSocialBlock?: string
  footerBottom?: string

  footerLogo?: FooterLogoClasses
  navLinks?: NavigationLinksClasses
  phonesBlock?: PhoneBlockClasses
  socialLinks?: SocialLinksClasses
  siteMap?: SiteMapClasses
  copyright?: CopyrightClasses
}
