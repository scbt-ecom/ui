import { components, type OptionProps } from 'react-select'
import { cn, Icon } from '$/hybrid'

export type TCustomOption = {
  additionalText?: string
}

export const Option = <ValueType,>({ isSelected, ...props }: OptionProps<ValueType>) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.innerProps.onClick) {
      props.innerProps.onClick(event)
    }
  }

  return (
    <div className='relative flex cursor-pointer items-center'>
      <span
        className={cn('absolute flex size-6 items-center justify-center rounded-sm border-2 border-blue-grey-700', {
          'border-none bg-color-primary-default': isSelected
        })}
        onClick={handleClick}
      >
        <Icon name='general/check' className={cn('size-5 text-icon-white', { invisible: !isSelected })} />
      </span>
      <components.Option isSelected={isSelected} {...props} />
    </div>
  )
}