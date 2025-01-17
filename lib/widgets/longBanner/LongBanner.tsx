import { type ReactElement } from 'react'
import { containerImgConfig } from './model/cva'
import { type IButtonConfig, type ILongBannerClasses, type ITextContent, type LongBannerConfig } from './model/types'
import { TextList, Title } from './ui'
import { Button, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface LongBannerProps extends LongBannerConfig {
  title: string | ReactElement
  buttonConfig?: IButtonConfig
  textContent: ITextContent[]
  imageComponent: ReactElement
  classes?: Partial<ILongBannerClasses>
}

export const LongBanner = ({
  title,
  buttonConfig,
  intent = 'twoItems',
  textContent,
  imageComponent,
  classes
}: LongBannerProps) => {
  const withButton = !!buttonConfig
  const isFourItems = intent === 'fourItems'
  const isTwoItems = intent === 'twoItems'

  return (
    <section className={cn(classes?.section)}>
      <ResponsiveContainer className={cn(classes?.mainContainer)}>
        {isTwoItems && <Title intent={intent} title={title} />}

        <div
          className={cn(
            'bg-banner-skyblue-100 px-6 pb-8 pt-6 desktop:flex desktop:flex-row-reverse desktop:justify-between desktop:px-0 desktop:py-0 desktop:pl-12',
            classes?.contentContainer
          )}
        >
          {isFourItems && <Title intent={intent} title={title} desktopHidden={true} />}
          <div className={cn(containerImgConfig({ intent, withButton }), classes?.imgContainer)}>{imageComponent}</div>
          <div
            className={cn('desktop:flex desktop:flex-col desktop:justify-center desktop:py-10', classes?.textWithBtnContainer)}
          >
            {isFourItems && <Title intent={intent} title={title} mobileHidden={true} />}
            <TextList textContent={textContent} intent={intent} withButton={withButton} />
            {withButton && (
              <Button
                className={cn('w-full px-4 desktop:w-max', classes?.button)}
                size='lg'
                onClick={buttonConfig.onClick}
                intent='secondary'
              >
                {buttonConfig.text}
              </Button>
            )}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
