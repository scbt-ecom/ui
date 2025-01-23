import * as React from 'react'
import { defaultCopyright, defaultNavigationLinks, defaultPhones, defaultSocialsLinks } from './model/defaultValues'
import type { FooterClasses, FooterNavLinks, FooterPhones, FooterRenderBlocks, FooterSocialLinks } from './model/types'
import { Copyright, FooterLogo, NavLinks, PhonesBlock, SiteMap, SocialLinks } from './ui'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface FooterProps {
  classes?: FooterClasses
  renderBlocks?: FooterRenderBlocks
  socialsLinks?: FooterSocialLinks[]
  phones?: FooterPhones[]
  navigationLinks?: FooterNavLinks[]
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
}: FooterProps) => {
  return (
    <footer className={cn('bg-color-footer desktop:py-10 w-full py-8', classes?.root)}>
      <ResponsiveContainer className={cn(classes?.footerContainer)}>
        <div className={cn('mobile:pb-[176px]', classes?.footerWrapper)}>
          <div
            className={cn(
              'border-blue-grey-500 desktop:flex-row desktop:gap-6 desktop:pb-8 flex flex-col items-start justify-between gap-4 border-b border-solid pb-6',
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
              'desktop:mt-8 desktop:flex-row desktop:gap-6 mt-6 flex flex-col-reverse items-start justify-between gap-4',
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
