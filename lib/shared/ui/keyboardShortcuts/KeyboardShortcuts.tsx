import { cn } from '$/shared/utils'

type KeyboardShortcutsClasses = {
  root?: string
  keys?: string
  key?: string
}

export interface KeyboardShortcutsProps {
  keyList: string[]
  classes?: KeyboardShortcutsClasses
}

export const KeyboardShortcuts = ({ keyList, classes }: KeyboardShortcutsProps) => {
  return (
    <div className={cn('flex items-center gap-1', classes?.root)}>
      {keyList?.map((key, index) => (
        <div key={index} className={cn('flex items-center gap-1', classes?.keys)}>
          <span
            className={cn(
              'desk-body-regular-s border-warm-grey-200 rounded-sm border border-solid px-2 py-1 capitalize',
              classes?.key
            )}
          >
            {key}
          </span>
          <span>{index !== keyList.length - 1 && '+'}</span>
        </div>
      ))}
    </div>
  )
}
