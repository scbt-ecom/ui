import { type FieldValues } from 'react-hook-form'
import { CarouselNative } from '../../../carousel/CarouselNative'
import { RadioItemCard } from '../../uncontrolled/radio'
import { RadioGroupControl, type RadioGroupControlProps } from './RadioGroupControl'
import { cn } from '$/shared/utils'

export const RadioGroupCardControl = <TFieldValues extends FieldValues = FieldValues>({
  options,
  ...props
}: RadioGroupControlProps<TFieldValues>) => {
  return (
    <RadioGroupControl
      options={options}
      {...props}
      classes={{
        ...props?.classes,
        list: cn('flex flex-row gap-4  max-w-[540px]  overflow-x-auto', props?.classes?.list)
      }}
      renderComponent={({ options, ...props }) => (
        <CarouselNative items={options} renderComponent={(option) => <RadioItemCard {...props} item={option} />} />
      )}
    />
  )
}
