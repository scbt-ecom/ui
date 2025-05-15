import { useRef, useState } from 'react'
import { type CellContext } from '@tanstack/react-table'
import { useClickOutside } from '$/shared/hooks'

type Cell<TData, TValue> = CellContext<TData, TValue> & { rowIndex?: number }

interface EditableCellProps<TData, TValue> extends Cell<TData, TValue> {
  target: keyof TData
  update: (target: number, values: TData) => void
}

export const EditableCell = <TData, TValue extends string | undefined>({
  row,
  getValue,
  update,
  target,
  rowIndex = -1
}: EditableCellProps<TData, TValue>) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [value, setValue] = useState<TValue | string>(getValue())
  const changed = useRef<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const { original } = row

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

    changed.current = true
  }

  const onInputBlur = () => {
    if (changed.current) {
      const updatedRow = { ...original, [target]: value }
      update(rowIndex, updatedRow)

      changed.current = false
    }

    setFocused(false)
  }

  useClickOutside(inputRef, onInputBlur)

  return focused ? (
    <input
      ref={inputRef}
      className='mr-2 w-full outline-none'
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
