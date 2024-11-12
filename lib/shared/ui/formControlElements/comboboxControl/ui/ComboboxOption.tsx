import { components, type OptionProps } from 'react-select'
import { type TComboboxOptionClasses } from '../model/types'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface IComboboxOptionProps<Option> extends OptionProps<Option> {
  classes?: Partial<TComboboxOptionClasses>
  isSelected: boolean
}

export const ComboboxOption = <Option,>({ isSelected, classes, ...props }: IComboboxOptionProps<Option>) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.innerProps.onClick) {
      props.innerProps.onClick(event)
    }
  }

  return (
    <div className={cn('relative flex cursor-pointer items-center', classes?.optionCustom)}>
      {props.isMulti && (
        <span
          onClick={handleClick}
          className={cn(
            'absolute left-1 flex size-6 items-center justify-center rounded-sm border-2 border-blue-grey-700',
            { 'border-none bg-color-primary-default': isSelected },
            classes?.checkboxIsMulti
          )}
        >
          <Icon
            name='general/check'
            className={cn('size-5 text-icon-white', { invisible: !isSelected }, classes?.checkboxIsMultiIcon)}
          />
        </span>
      )}
      <components.Option isSelected={isSelected} {...props} />
    </div>
  )
}
