import { widgetIds } from '../model'
import {
  type CopyrightType,
  type Details,
  type FooterClasses,
  type LigalType,
  type PhonesType,
  type SocialsLinksType
} from './model/types'
import { Copyright, FooterLogo, NavLinks, PhonesBlock, SiteMap, SocialLinks } from './ui'
import { Ligal } from './ui/Ligal'
import { ResponsiveContainer } from '$/shared/ui'
import { cn, TypeGuards } from '$/shared/utils'

export interface FooterProps<Enabled extends boolean> {
  variant: 'fourCols'
  socialsLinks: SocialsLinksType<Enabled>
  phones: PhonesType<Enabled>
  ligal: LigalType<Enabled>
  copyright: CopyrightType<Enabled>
  siteMap?: boolean
  details: Details[]
  classes?: FooterClasses
}

export const Footer = <Enabled extends boolean>({
  socialsLinks,
  phones,
  ligal,
  copyright,
  classes,
  details,
  siteMap = true
}: FooterProps<Enabled>) => {
  return (
    <footer
      id={widgetIds.footer}
      data-test-id={widgetIds.footer}
      className={cn('w-full bg-color-footer py-8 desktop:py-10', classes?.root)}
    >
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
              {socialsLinks.enabled && <SocialLinks socialsLinks={socialsLinks.links} classes={classes?.socialLinks} />}
            </div>

            {phones.enabled && <PhonesBlock phones={phones.items} classes={classes?.phonesBlock} />}
          </div>

          {!TypeGuards.isArrayEmpty(details) && <NavLinks details={details} classes={classes?.navLinks} />}
          {ligal.enabled && <Ligal text={ligal.text} />}

          <div
            className={cn(
              'mt-6 flex flex-col-reverse items-start justify-between gap-4 desktop:mt-8 desktop:flex-row desktop:gap-6',
              classes?.footerBottom
            )}
          >
            {copyright.enabled && <Copyright text={copyright.text} classes={classes?.copyright} />}
            {siteMap && <SiteMap classes={classes?.siteMap} />}
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
