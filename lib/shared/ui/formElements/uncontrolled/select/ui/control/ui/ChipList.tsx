import { type ChangeEvent } from 'react'
import { type PropsValue } from 'react-select'
import { ControlChip, type ControlChipProps } from './Chip'
import { type SelectItemOption } from '$/shared/ui'

type ControlChipListProps<Option extends SelectItemOption> = Omit<ControlChipProps, 'data'> & {
  values: PropsValue<Option>
  inputValue: string
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ChipList = <Option extends SelectItemOption>({
  values,
  inputValue,
  onInputValueChange,
  ...props
}: ControlChipListProps<Option>) => {
  const isNotEmpty = Array.isArray(values) && values.length > 0

  return (
    <>
      {isNotEmpty && values.map((chip) => <ControlChip key={chip.id} {...props} data={chip} />)}
      <input
        type='text'
        className='unset-all-apply desk-body-regular-l flex-grow bg-color-transparent'
        value={inputValue}
        onChange={onInputValueChange}
      />
    </>
  )
}
