import { type Control, type FieldValues } from 'react-hook-form'
import type { FieldElement } from './model/types'
import { Controlled } from '$/shared/ui'

type FieldMapperProps<TFieldValues extends FieldValues> = {
  fields: FieldElement<TFieldValues>[]
  control: Control
}

export const FieldMapper = <TFieldValues extends FieldValues>({ fields, control }: FieldMapperProps<TFieldValues>) => {
  return fields.map(({ type, args }) => {
    const Component = Controlled[type] as React.ComponentType<typeof args>

    return <Component {...args} key={args.name} control={control} />
  })
}
