import * as React from 'react'
import { defaultCopyright, defaultNavigationLinks, defaultPhones, defaultSocialsLinks } from './model/defaultValues'
import type { IFooterNavLinks, IFooterPhones, IFooterSocialLinks } from './model/types'
import {
  Copyright,
  FooterLogo,
  NavLinks,
  PhonesBlock,
  SiteMap,
  SocialLinks,
  type TCopyrightClasses,
  type TFooterLogoClasses,
  type TNavigationLinksClasses,
  type TPhoneBlockClasses,
  type TSiteMapClasses,
  type TSocialLinksClasses
} from './ui'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

type TFooterRenderBlocks = {
  withSocial?: boolean
  withPhones?: boolean
  withNavLinks?: boolean
  withCopyright?: boolean
  withSiteMap?: boolean
}

type TFooterClasses = TSiteMapClasses &
  TFooterLogoClasses &
  TNavigationLinksClasses &
  TPhoneBlockClasses &
  TSocialLinksClasses &
  TCopyrightClasses & {
    root?: string
    footerContainer?: string
    footerWrapper?: string
    footerHead?: string
    footerSocialBlock?: string
  }

export interface IFooterProps {
  classes?: TFooterClasses
  renderBlocks?: TFooterRenderBlocks
  socialsLinks?: IFooterSocialLinks[]
  phones?: IFooterPhones[]
  navigationLinks?: IFooterNavLinks[]
  ligal?: string | React.ReactElement
  copyright?: string | React.ReactElement
}

export const Footer = ({
  renderBlocks: { withSocial = true, withPhones = true, withNavLinks = true, withCopyright = true, withSiteMap = true } = {},
  socialsLinks = defaultSocialsLinks,
  phones = defaultPhones,
  navigationLinks = defaultNavigationLinks,
  ligal,
  copyright = defaultCopyright,
  classes
}: IFooterProps) => {
  return (
    <footer className={cn('w-full bg-color-footer py-8 desktop:py-10', classes?.root)}>
      <ResponsiveContainer className={cn(classes?.footerContainer)}>
        <div className={cn('mobile:pb-[176px]', classes?.footerWrapper)}>
          <div
            className={cn(
              'flex flex-col items-start justify-between gap-4 border-b border-solid border-blue-grey-500 pb-6 desktop:flex-row desktop:gap-6 desktop:pb-8',
              classes?.footerHead
            )}
          >
            <div className={cn(classes?.footerSocialBlock)}>
              <FooterLogo classes={classes} />
              {withSocial && <SocialLinks socialsLinks={socialsLinks} classes={classes} />}
            </div>

            {withPhones && <PhonesBlock phones={phones} classes={classes} />}
          </div>

          {withNavLinks && <NavLinks navigationLinks={navigationLinks} classes={classes} />}
          {ligal && ligal}

          <div className='flex flex-col-reverse items-start justify-between gap-4 desktop:flex-row desktop:gap-6'>
            {withCopyright && <Copyright text={copyright} classes={classes} withSiteMap={withSiteMap} />}
            {withSiteMap && <SiteMap classes={classes} />}
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
