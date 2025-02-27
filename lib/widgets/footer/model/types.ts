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

export interface Details {
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

export type SocialsLinks = {
  enabled?: boolean
  links?: FooterSocialLinks[]
}
export type PhonesType = {
  enabled?: boolean
  items?: FooterPhones[]
}

export type LigalType = {
  enabled?: boolean
  text?: string
}

export type CopyrightType = {
  enabled?: boolean
  text?: string
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
