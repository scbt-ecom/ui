import { widgetIds } from '../model'
import { RootContent, type RootContentClasses, type RootContentProps } from './ui'
import type { BackgroundBannerColors } from '$/shared/constants'
import { ResponsiveContainer } from '$/shared/ui'
import { type RenderImage, renderImage } from '$/shared/utils'
import { cn } from '$/shared/utils'

type InfoBlockClasses = {
  root?: string
  container?: string
  wrapper?: string
  rootContent?: RootContentClasses
  imageDesktopWrapper?: string
  imageDesktop?: string
}

export interface InfoBlockProps extends RootContentProps {
  size?: 'sm' | 'md'
  imageDesktop: RenderImage['imgProps']
  classes?: InfoBlockClasses
  backgroundColor?: BackgroundBannerColors
}

export const InfoBlock = (props: InfoBlockProps) => {
  const { size = 'md', renderImageCb, backgroundColor = '#F4F8FE', imageDesktop, classes, ...rest } = props

  return (
    <section
      id={widgetIds.infoBlock}
      data-test-id={widgetIds.infoBlock}
      style={{ backgroundColor: backgroundColor }}
      className={cn('py-14', classes?.root)}
    >
      <ResponsiveContainer>
        <div className={cn('flex items-center justify-between gap-11 mobile:flex-col', classes?.container)}>
          <RootContent renderImageCb={renderImageCb} classes={classes?.rootContent} {...rest} />

          <div
            className={cn('h-[200px] w-full max-w-[432px] mobile:hidden', classes?.imageDesktopWrapper, {
              'h-[238px]': size === 'md'
            })}
          >
            {renderImage({
              imgProps: {
                className: cn('object-contain w-full h-full', classes?.imageDesktop),
                ...imageDesktop
              },
              renderImageCb
            })}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}

// eslint-disable-next-line import/no-default-export
export default InfoBlock
