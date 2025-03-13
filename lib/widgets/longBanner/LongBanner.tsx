import { type ReactElement } from 'react'
import { type ButtonHandlerOptions, ButtonWithHandlers } from '../buttonWithHandlers'
import { containerImgConfig } from './model/cva'
import { type Details, type LongBannerClasses, type LongBannerConfig } from './model/types'
import { TextList, Title } from './ui'
import { type ButtonProps, ResponsiveContainer } from '$/shared/ui'
import { cn, TypeGuards } from '$/shared/utils'

export interface LongBannerProps<Enabled extends boolean> extends LongBannerConfig {
  headline: string | ReactElement
  details: Details<Enabled>[]
  intent?: 'twoItems' | 'fourItems'
  buttonConfig?: {
    buttonContent: ButtonProps & { handlerOptions: ButtonHandlerOptions }
    enabled: boolean
  }
  image:
    | ReactElement
    | {
        url: string
      }
  classes?: LongBannerClasses
}

export const LongBanner = <Enabled extends boolean>({
  headline,
  buttonConfig,
  intent = 'twoItems',
  details,
  image,
  classes
}: LongBannerProps<Enabled>) => {
  const isFourItems = intent === 'fourItems'
  const isTwoItems = intent === 'twoItems'

  const img =
    image && 'url' in image && TypeGuards.isObject(image) ? (
      <img className='w-full object-contain' alt='Картинка баннера' src={image.url} />
    ) : (
      image
    )

  return (
    <section id='long-banner' className={cn(classes?.root)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        {isTwoItems && <Title intent={intent} headline={headline} />}

        <div
          className={cn(
            'bg-banner-skyblue-100 px-6 pb-8 pt-6 desktop:flex desktop:flex-row-reverse desktop:justify-between desktop:px-0 desktop:py-0 desktop:pl-12',
            classes?.contentContainer
          )}
        >
          {isFourItems && <Title intent={intent} headline={headline} desktopHidden={true} />}
          <div className={cn(containerImgConfig({ intent, withButton: buttonConfig?.enabled }), classes?.imgContainer)}>
            {img}
          </div>
          <div
            className={cn('desktop:flex desktop:flex-col desktop:justify-center desktop:py-10', classes?.textWithBtnContainer)}
          >
            {isFourItems && <Title intent={intent} headline={headline} mobileHidden={true} />}
            <TextList details={details} intent={intent} withButton={buttonConfig?.enabled ?? false} />
            {buttonConfig?.enabled && buttonConfig && (
              <ButtonWithHandlers
                className={cn('w-full px-4 desktop:w-max', classes?.button)}
                size='lg'
                intent='secondary'
                {...buttonConfig.buttonContent}
              />
            )}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
