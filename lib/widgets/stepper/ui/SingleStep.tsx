import type { SingleStepProps } from '../model/types'
import { cn } from '$/shared/utils'

export type SingleStepClasses = {
  singleStep?: string
  numeric?: string
  textBlock?: string
  title?: string
  description?: string
}

export const SingleStep = ({ classes, index, variant, title, description }: SingleStepProps) => {
  const withTitles = variant === 'withTitleAndDescription' && title

  return (
    <div
      className={cn(
        'flex w-[328px] max-w-[328px] flex-col gap-4 rounded-md border border-solid border-blue-grey-500 p-4 desktop:w-[348px] desktop:max-w-[348px] desktop:border-none desktop:p-0',
        classes?.singleStep
      )}
    >
      <div
        className={cn(
          'mob-headline-bold-s flex size-10 items-center justify-center rounded-sm bg-color-blue-grey-500 text-color-white desktop:desk-title-bold-l desktop:size-12',
          classes?.numeric
        )}
      >
        {index}
      </div>

      <div className={cn('flex flex-col gap-2')}>
        {withTitles && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className={cn('mob-title-bold-m text-color-dark desktop:desk-title-bold-s', classes?.title)}
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: description ?? '' }}
          className={cn('desk-body-regular-l text-color-tetriary', classes?.description)}
        />
      </div>
    </div>
  )
}
