import {
  type CopyrightType,
  type Details,
  type FooterClasses,
  type LigalType,
  type PhonesType,
  type SocialsLinks
} from './model/types'
import { Copyright, FooterLogo, NavLinks, PhonesBlock, SiteMap, SocialLinks } from './ui'
import { Ligal } from './ui/Ligal'
import { ResponsiveContainer } from '$/shared/ui'
import { cn, TypeGuards } from '$/shared/utils'

export interface FooterProps {
  variant: 'fourCols'
  socialsLinks: SocialsLinks
  phones: PhonesType
  ligal: LigalType
  copyright: CopyrightType
  siteMap?: boolean
  details: Details[]
  classes?: FooterClasses
}

export const Footer = ({ socialsLinks, phones, ligal, copyright, classes, details, siteMap = true }: FooterProps) => {
  const { enabled: socialsLinksEnabled = true, links } = socialsLinks
  const { enabled: phonesEnabled = true, items: phoneItems } = phones
  const { enabled: ligalEnabled = true, text: ligalText } = ligal
  const { enabled: copyrightEnabled = true, text: copyrightText } = copyright

  return (
    <footer id='footer' className={cn('w-full bg-color-footer py-8 desktop:py-10', classes?.root)}>
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
              {socialsLinksEnabled && <SocialLinks socialsLinks={links ?? []} classes={classes?.socialLinks} />}
            </div>

            {phonesEnabled && <PhonesBlock phones={phoneItems ?? []} classes={classes?.phonesBlock} />}
          </div>

          {!TypeGuards.isArrayEmpty(details) && <NavLinks details={details} classes={classes?.navLinks} />}
          {ligalEnabled && <Ligal text={ligalText || ''} />}

          <div
            className={cn(
              'mt-6 flex flex-col-reverse items-start justify-between gap-4 desktop:mt-8 desktop:flex-row desktop:gap-6',
              classes?.footerBottom
            )}
          >
            {copyrightEnabled && <Copyright text={copyrightText ?? ''} classes={classes?.copyright} />}
            {siteMap && <SiteMap classes={classes?.siteMap} />}
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
