import type {
  CopyrightClasses,
  FooterLogoClasses,
  NavigationLinksClasses,
  PhoneBlockClasses,
  SiteMapClasses,
  SocialLinksClasses
} from '../ui'
import { type AllowedIconsGroup } from '$/shared/ui/icon/allowedIcons'

export interface FooterSocialLinks {
  iconName: AllowedIconsGroup<'social'>
  href: string
  target?: string
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
  target?: string
}

export interface FooterPhones {
  phone: string
  text: string
}

type SocialsLinksEnabled = {
  enabled: true
  links: FooterSocialLinks[]
}

type SocialsLinksDisabled = {
  enabled: false
}

export type SocialsLinksType<Enabled extends boolean> = Enabled extends true ? SocialsLinksEnabled : SocialsLinksDisabled

type PhonesEnabled = {
  enabled: true
  items: FooterPhones[]
}

type PhonesDisabled = {
  enabled: false
}

export type PhonesType<Enabled extends boolean> = Enabled extends true ? PhonesEnabled : PhonesDisabled

type LigalEnabled = {
  enabled: true
  text: string
}

type LigalDisabled = {
  enabled: false
}

export type LigalType<Enabled extends boolean> = Enabled extends true ? LigalEnabled : LigalDisabled

type CopyrightEnabled = {
  enabled: true
  text: string
}

type CopyrightDisabled = {
  enabled: false
}

export type CopyrightType<Enabled extends boolean> = Enabled extends true ? CopyrightEnabled : CopyrightDisabled

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
