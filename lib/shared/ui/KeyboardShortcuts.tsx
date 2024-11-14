import { cn } from '../utils'

type TKeyboardShortcutsClasses = {
  root: string
  keys: string
  key: string
}

export interface IKeyboardShortcutsProps {
  keyList: string[]
  classes?: Partial<TKeyboardShortcutsClasses>
}

export const KeyboardShortcuts = ({ keyList, classes }: IKeyboardShortcutsProps) => {
  return (
    <div className={cn('flex items-center gap-1', classes?.root)}>
      {keyList?.map((key, index) => (
        <div key={index} className={cn('flex items-center gap-1', classes?.keys)}>
          <span
            className={cn(
              'desk-body-regular-s rounded-sm border border-solid border-warm-grey-200 px-2 py-1 capitalize',
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
