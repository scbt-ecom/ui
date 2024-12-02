import { type IFieldWrapperProps, type TFieldWrapperClasses } from '../FieldWrapper'
import { cn } from '$/shared/utils'

interface IFieldLabelProps<V> extends Omit<IFieldWrapperProps<V>, 'error' | 'children' | 'classes'> {
  classes?: Pick<TFieldWrapperClasses, 'fieldLabel'>
}

export const FieldLabel = <V,>({ disabled, fieldId, label, value, classes }: IFieldLabelProps<V>) => {
  return (
    <label
      htmlFor={fieldId}
      className={cn(
        'desk-body-regular-l pointer-events-none absolute left-4 top-2/4 -translate-y-1/2 text-color-tetriary transition-all duration-15 group-focus-within:desk-body-regular-s group-focus-within:top-2 group-focus-within:translate-y-0 group-focus-within:bg-color-transparent',
        { '!top-2 translate-y-0 !bg-color-transparent [&&]:desk-body-regular-s': value },
        { 'text-color-disabled': disabled },
        classes?.fieldLabel
        // && !isTextarea
        // {
        //   'group-focus-within:desk-body-regular-s group-focus-within:top-2 group-focus-within:translate-y-0 group-focus-within:bg-color-transparent':
        //     !isTextarea
        // },
        // { 'desk-body-regular-s top-2 translate-y-0': isTextarea },
      )}
    >
      {label}
    </label>
  )
}
