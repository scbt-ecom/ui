import type { Config, FooterClasses, FooterPhones, FooterRenderBlocks, FooterSocialLinks } from './model/types'
import { Copyright, FooterLogo, NavLinks, PhonesBlock, SiteMap, SocialLinks } from './ui'
import { Ligal } from './ui/Ligal'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface FooterProps {
  classes?: FooterClasses
  renderBlocks?: FooterRenderBlocks
  socialsLinks?: FooterSocialLinks[]
  phones?: FooterPhones[]
  ligal?: string
  copyright?: string
  config: Config
}

export const Footer = ({
  renderBlocks: {
    withSocialsLinks = true,
    withPhones = true,
    withNavLinks = true,
    withCopyright = true,
    withSiteMap = true,
    withLigal = true
  } = {},
  socialsLinks = [],
  phones = [],
  ligal,
  copyright = '',
  classes,
  config
}: FooterProps) => {
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
              {withSocialsLinks && <SocialLinks socialsLinks={socialsLinks} classes={classes?.socialLinks} />}
            </div>

            {withPhones && <PhonesBlock phones={phones} classes={classes?.phonesBlock} />}
          </div>

          {withNavLinks && <NavLinks config={config} classes={classes?.navLinks} />}
          {withLigal && <Ligal text={ligal || ''} />}

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
