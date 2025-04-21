import { useId } from 'react'
import { Indicator, Item } from '@radix-ui/react-radio-group'
import type { RenderComponentProps } from '../RadioGroup'
import { AdditionalContent } from './AdditionalContent'
import { cn } from '$/shared/utils'

export interface RadioItemCardProps extends RenderComponentProps {}

export const RadioItemCard = ({
  classes,
  returnValue,
  displayValue,
  item,
  disabled: disableGroup,
  invalid,
  ...props
}: RadioItemCardProps) => {
  const label = displayValue ? displayValue(item) : item?.label
  const value = returnValue ? returnValue(item) : item?.value
  const id = useId()

  const disabled = disableGroup || item?.disabled

  return (
    <Item
      {...props}
      className={cn('outline-none', { 'pointer-events-none': disabled })}
      asChild
      disabled={disabled}
      value={value}
      id={id}
    >
      <div>
        <li
          className={cn(
            'group flex w-[160px] flex-col items-start rounded-md border border-solid border-blue-grey-500 px-6 py-4',
            { 'border-negative': invalid, 'bg-color-blue-grey-200': disabled },
            classes?.root
          )}
        >
          <div
            className={cn(
              'mb-4 after:left-1/2 after:top-1/2 after:h-10 after:w-10',
              'after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]',
              'after:absolute after:rounded-full [&:not(:disabled)]:hover:after:bg-color-primary-tr-hover',
              'after:duration-100 [&:not(:disabled)]:active:after:bg-color-primary-tr-pressed',
              'after:-z-10 [&:not(:disabled)]:focus:after:bg-color-primary-tr-focus',
              'relative h-6 w-6 rounded-full border-2 border-blue-grey-700',
              'group-data-[state=checked]:border-primary-default',
              {
                'border-negative': invalid
              },
              classes?.item
            )}
          >
            <Indicator
              className={cn(
                'absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-color-primary-default',
                'group-disabled:group-data-[state=checked]:bg-color-negative',
                classes?.indicator
              )}
            />
          </div>
          <label
            htmlFor={id}
            className={cn(
              'desk-body-regular-l mb-4 capitalize text-color-dark',
              { 'text-color-disabled': disabled },
              classes?.label
            )}
          >
            {label}
          </label>
          {item?.additionalContent && (
            <AdditionalContent disabled={disabled} {...item?.additionalContent} classes={classes?.additionalContent} />
          )}
        </li>
      </div>
    </Item>
  )
}
