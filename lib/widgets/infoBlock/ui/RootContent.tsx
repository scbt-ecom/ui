import { ButtonWithHandlers, type ButtonWithHandlersProps } from '../../buttonWithHandlers'
import { type Images } from '../model/types'
import { LinksList, type LinksListClasses, type LinksListProps } from './LinksList'
import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type RootContentClasses = {
  wrapper?: string
  textBlock?: string
  heading?: string
  description?: string
  imageMobileWrapper?: string
  imageMobile?: string
  buttonsGroup?: string
  linksList?: LinksListClasses
}

export interface RootContentProps extends Omit<LinksListProps, 'classes'> {
  heading: string
  description?: string
  buttonsGroup?: ButtonWithHandlersProps[]
  images: Images
  classes?: RootContentClasses
}

export const RootContent = ({ heading, buttonsGroup, description, images, linksList, classes }: RootContentProps) => {
  const withButtons = buttonsGroup && buttonsGroup?.length > 0
  const withLinks = linksList && linksList?.length > 0

  return (
    <div className={cn('flex flex-col', classes?.wrapper)}>
      <div className={cn('flex flex-col gap-4 mobile:mb-2', classes?.textBlock)}>
        <Heading as='h2' className={cn(classes?.heading)}>
          {heading}
        </Heading>
        {description && (
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className={cn('desk-body-regular-l text-color-dark', classes?.description)}
          />
        )}
      </div>

      <div className={cn('h-full w-full desktop:hidden', classes?.imageMobileWrapper)}>
        <img src={images.mobile} alt={images.alt} className={cn('h-full w-full object-contain', classes?.imageMobile)} />
      </div>

      {withButtons && (
        <div className={cn('mt-2 flex items-center gap-3 mobile:flex-col desktop:mt-8 desktop:gap-8', classes?.buttonsGroup)}>
          {buttonsGroup?.map((button, index) => (
            <ButtonWithHandlers key={index} className='w-full desktop:w-[216px]' {...button} />
          ))}
        </div>
      )}

      {withLinks && <LinksList linksList={linksList} classes={classes?.linksList} />}
    </div>
  )
}
