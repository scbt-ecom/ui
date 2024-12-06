import * as React from 'react'
import { defaultCopyright, defaultLigal, defaultNavigationLinks, defaultPhones, defaultSocialsLinks } from './model/defaultValues'
import type { IFooterNavLinks, IFooterPhones, IFooterSocialLinks } from './model/types'
import {
  Copyright,
  Ligal,
  NavLinks,
  PhonesBlock,
  SocialLinks,
  type TCopyrightClasses,
  type TLigalClasses,
  type TNavigationLinksClasses,
  type TPhoneBlockClasses,
  type TSocialLinksClasses
} from './ui'
import { Icon, ResponsiveContainer, Section } from '$/shared/ui'
import { cn } from '$/shared/utils'

type IFooterClasses = TLigalClasses &
  TNavigationLinksClasses &
  TPhoneBlockClasses &
  TSocialLinksClasses &
  TCopyrightClasses & {
    section: string
    container: string
    footerRoot: string
    footerHead: string
    footerSocialBlock: string
    footerLogo: string
  }

export interface IFooterProps {
  classes?: Partial<IFooterClasses>
  withSocial?: boolean
  withPhones?: boolean
  withNavLinks?: boolean
  withLigal?: boolean
  withCopyright?: boolean
  withSiteMap?: boolean

  socialsLinks?: IFooterSocialLinks[]
  phones?: IFooterPhones[]
  navigationLinks: IFooterNavLinks[]
  ligal: string | React.ReactElement
  copyright?: string | React.ReactElement
}

export const Footer = ({
  withSocial = true,
  withPhones = true,
  withNavLinks = true,
  withLigal = true,
  withCopyright = true,
  withSiteMap = true,
  socialsLinks = defaultSocialsLinks,
  phones = defaultPhones,
  navigationLinks = defaultNavigationLinks,
  ligal = defaultLigal,
  copyright = defaultCopyright,
  classes
}: IFooterProps) => {
  return (
    <Section className={cn('w-full', classes?.section)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('bg-color-footer px-4 py-8 desktop:px-6 desktop:py-10', classes?.footerRoot)}>
          <div className={cn('mb-8 flex items-center justify-between gap-6', classes?.footerHead)}>
            <div className={cn(classes?.footerSocialBlock)}>
              <a aria-label='logo' href='/' className={cn(classes?.footerLogo)}>
                <Icon name='brandLogos/logoWhite' className='h-[32px] w-[194px]' />
              </a>
              {withSocial && <SocialLinks socialsLinks={socialsLinks} classes={classes} />}
            </div>
            {withPhones && <PhonesBlock phones={phones} classes={classes} />}
          </div>

          {withNavLinks && <NavLinks navigationLinks={navigationLinks} classes={classes} />}
          {withLigal && <Ligal ligal={ligal} classes={classes} />}
          <div className='mt-6 flex items-start justify-between gap-6'>
            {withCopyright && <Copyright text={copyright} classes={classes} />}
            {withSiteMap && (
              <a
                href='https://sovcombank.ru/site-map'
                target='_blank'
                aria-label='site-map'
                rel='noreferrer'
                className='desk-body-regular-m text-color-white'
              >
                Карта сайта
              </a>
            )}
          </div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}
