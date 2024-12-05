import type { Control, FieldValues, Path } from 'react-hook-form'

export type TCommonFieldProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  label: string
  helperText?: string
}
