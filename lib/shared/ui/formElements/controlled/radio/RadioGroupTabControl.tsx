import { type FieldValues } from 'react-hook-form'
import { RadioItemTab } from '../../uncontrolled/radio'
import { RadioGroupControl } from './RadioGroupControl'
import { type RadioGroupControlProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const RadioGroupTabControl = <TFieldValues extends FieldValues = FieldValues>({
  options,
  ...props
}: RadioGroupControlProps<TFieldValues>) => {
  return (
    <RadioGroupControl
      {...props}
      options={options}
      classes={{
        ...props?.classes,
        list: cn('flex flex-row flex-wrap gap-x-3 gap-y-4', props?.classes?.list)
      }}
      renderComponent={({ options, ...props }) => {
        return (
          <div className='flex list-none flex-row flex-wrap gap-x-3 gap-y-4'>
            {options?.map((option) => <RadioItemTab key={option.value} item={option} {...props} />)}
          </div>
        )
      }}
    />
  )
}
