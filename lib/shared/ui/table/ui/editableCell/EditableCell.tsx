import { useRef, useState } from 'react'
import { type CellContext } from '@tanstack/react-table'
import { useClickOutside } from '$/shared/hooks'
import { type AllowedIcons, Button, Icon } from '$/shared/ui'

type Cell<TData, TValue> = CellContext<TData, TValue> & { rowIndex?: number }

interface EditableCellProps<TData, TValue> extends Cell<TData, TValue> {
  target: keyof TData
  update: (target: number, values: TData) => void
  attachment?: {
    icon: AllowedIcons
    handler?: (value: TValue | string, event: React.MouseEvent<HTMLButtonElement>) => void
  }
}

export const EditableCell = <TData, TValue extends string | undefined>({
  row,
  getValue,
  update,
  target,
  rowIndex = -1,
  attachment
}: EditableCellProps<TData, TValue>) => {
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
  }

  useClickOutside(inputRef, onInputBlur)

  return (
    <div className='flex items-center justify-between pr-1'>
      <input
        ref={inputRef}
        className='mr-2 w-full outline-none'
        type='text'
        value={value}
        onChange={onValueChange}
        onBlur={onInputBlur}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault()

            onInputBlur()
          }
        }}
      />
      {attachment && (
        <Button intent='ghost' onClick={(event) => attachment?.handler?.(value, event)} className='mr-1 h-6 w-6 p-0'>
          <Icon name={attachment.icon} className='size-4' />
        </Button>
      )}
    </div>
  )
}
