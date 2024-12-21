import * as React from 'react'
import { defaultCopyright, defaultNavigationLinks, defaultPhones, defaultSocialsLinks } from './model/defaultValues'
import type { IFooterNavLinks, IFooterPhones, IFooterSocialLinks, TFooterClasses, TFooterRenderBlocks } from './model/types'
import { Copyright, FooterLogo, NavLinks, PhonesBlock, SiteMap, SocialLinks } from './ui'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

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
              <FooterLogo classes={classes?.footerLogo} />
              {withSocial && <SocialLinks socialsLinks={socialsLinks} classes={classes?.socialLinks} />}
            </div>

            {withPhones && <PhonesBlock phones={phones} classes={classes?.phonesBlock} />}
          </div>

          {withNavLinks && <NavLinks navigationLinks={navigationLinks} classes={classes?.navLinks} />}
          {ligal && ligal}

          <div
            className={cn(
              'mt-6 flex flex-col-reverse items-start justify-between gap-4 desktop:mt-8 desktop:flex-row desktop:gap-6',
              classes?.footerBottom
            )}
          >
            {withCopyright && <Copyright text={copyright} classes={classes?.copyright} />}
            {withSiteMap && <SiteMap classes={classes?.siteMap} />}
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
