import { type ChangeEvent } from 'react'
import { type SelectItemOption } from '../model'
import { ControlChip, type ControlChipProps } from './Chip'

type ControlChipListProps = Omit<ControlChipProps, 'data'> & {
  values: SelectItemOption | SelectItemOption[]
  inputValue: string
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDeleteItem: (option: SelectItemOption) => void
}

export const ChipList = ({ values, onDeleteItem, inputValue, onInputValueChange, ...props }: ControlChipListProps) => {
  const isNotEmpty = Array.isArray(values) && values.length > 0

  return (
    <>
      {isNotEmpty &&
        values.map((chip) => (
          <ControlChip key={chip.value} {...props} data={chip} onDeleteItem={(option) => onDeleteItem(option)} />
        ))}
      <input
        type='text'
        className='unset-all-apply desk-body-regular-l flex-1 bg-color-transparent'
        value={inputValue}
        onChange={onInputValueChange}
      />
    </>
  )
}
