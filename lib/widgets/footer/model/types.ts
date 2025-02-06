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

export interface Config {
  variant?: string
  details: Detail[]
}

export interface Detail {
  column: Column[]
}

export interface Column {
  groupLabel: string
  links: Link[]
}

export interface Link {
  label: string
  path: string
}

export interface FooterPhones {
  phone: string
  text: string
}

export type FooterRenderBlocks = {
  withSocialsLinks?: boolean
  withPhones?: boolean
  withNavLinks?: boolean
  withCopyright?: boolean
  withSiteMap?: boolean
  withLigal?: boolean
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
