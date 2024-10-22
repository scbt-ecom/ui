import { components, type OptionProps } from 'react-select'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

export const Option = <Option,>({ isSelected, ...props }: OptionProps<Option>) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.innerProps.onClick) {
      props.innerProps.onClick(event)
    }
  }

  return (
    <div className='relative flex cursor-pointer items-center'>
      {props.isMulti && (
        <span
          className={cn('absolute flex size-6 items-center justify-center rounded-sm border-2 border-blue-grey-700', {
            'border-none bg-color-primary-default': isSelected
          })}
          onClick={handleClick}
        >
          <Icon name='general/check' className={cn('size-5 text-icon-white', { invisible: !isSelected })} />
        </span>
      )}
      <components.Option isSelected={isSelected} {...props} />
    </div>
  )
}
