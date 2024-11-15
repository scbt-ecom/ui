import { type ReactElement } from 'react'
import { type TFieldWrapperClasses } from '../model'
import { cn } from '$/shared/utils'

interface ILabelProps<V> {
  label: string | ReactElement
  fieldId: string
  value: V
  classes?: Partial<TFieldWrapperClasses>
  isTextarea?: boolean
  disabled?: boolean
}

export const Label = <V,>({ disabled, fieldId, label, value, classes, isTextarea = false }: ILabelProps<V>) => {
  return (
    <label
      htmlFor={fieldId}
      className={cn(
        'desk-body-regular-l pointer-events-none absolute left-4 top-2/4 -translate-y-1/2 text-color-tetriary transition-all duration-15',
        { '!top-2 !translate-y-0 !bg-color-transparent [&&]:desk-body-regular-s': value && !isTextarea },
        {
          'group-focus-within:desk-body-regular-s group-focus-within:top-2 group-focus-within:translate-y-0 group-focus-within:bg-color-transparent':
            !isTextarea
        },
        { 'desk-body-regular-s top-2 translate-y-0': isTextarea },
        { 'text-color-disabled': disabled },
        classes?.label
      )}
    >
      {label}
    </label>
  )
}
