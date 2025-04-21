import { useId } from 'react'
import { Item } from '@radix-ui/react-radio-group'
import type { RenderComponentProps } from '../RadioGroup'
import { AdditionalContent } from './AdditionalContent'
import { cn } from '$/shared/utils'

export interface RadioItemTabProps extends RenderComponentProps {}

export const RadioItemTab = ({
  classes,
  returnValue,
  displayValue,
  item,
  disabled: disableGroup,
  invalid,
  ...props
}: RadioItemTabProps) => {
  const label = displayValue ? displayValue(item) : item.label
  const value = returnValue ? returnValue(item) : item.value
  const id = useId()

  const disabled = disableGroup || item?.disabled

  return (
    <Item {...props} asChild disabled={disabled} value={value} id={id}>
      <li
        className={cn(
          'group desk-body-regular-l cursor-pointer rounded-sm border border-solid border-transparent bg-color-blue-grey-100 px-4 py-2 text-color-secondary outline outline-2 outline-transparent transition-colors hover:bg-color-blue-grey-200 hover:text-color-secondary data-[state=checked]:!bg-color-primary-default',
          { 'pointer-events-none text-color-disabled': disabled, 'border-negative': invalid },
          classes?.root
        )}
      >
        <label
          htmlFor={id}
          className={cn(
            'desk-body-regular-l cursor-pointer capitalize text-color-dark transition-colors group-data-[state=checked]:!text-color-white',
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
    </Item>
  )
}
