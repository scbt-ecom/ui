import { useRef, useState } from 'react'
import { type CellContext } from '@tanstack/react-table'
import { useClickOutside } from '$/shared/hooks'

interface EditableCellProps<TData, TValue> extends CellContext<TData, TValue> {
  target: keyof TData
  update: (values: TData) => void
}

export const EditableCell = <TData, TValue extends string | undefined>({
  row,
  getValue,
  update,
  target
}: EditableCellProps<TData, TValue>) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [value, setValue] = useState<TValue | string>(getValue())

  const inputRef = useRef<HTMLInputElement>(null)

  const { original } = row

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onInputBlur = () => {
    const updatedRow = { ...original, [target]: value }

    update(updatedRow)

    setFocused(false)
  }

  useClickOutside(inputRef, onInputBlur)

  return focused ? (
    <input
      ref={inputRef}
      className='w-full border-b outline-none'
      type='text'
      value={value}
      onChange={onValueChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          onInputBlur()
        }
      }}
    />
  ) : (
    <p className='w-full' onClick={() => setFocused(true)}>
      {getValue()}
    </p>
  )
}
