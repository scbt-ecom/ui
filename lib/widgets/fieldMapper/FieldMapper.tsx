import { type Control, type FieldValues } from 'react-hook-form'
import type { FieldElement } from './model/types'
import { Controlled } from '$/shared/ui'

type FieldMapperProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  fields: FieldElement<TFieldValues>[]
}

export const FieldMapper = <TFieldValues extends FieldValues>({ fields, control }: FieldMapperProps<TFieldValues>) => {
  return fields.map(({ type, args }) => {
    const Component = Controlled[type] as React.ComponentType<typeof args>

    if (!Component) {
      console.warn(`Cannot find component for type ${type}, skip.`)
      return null
    }

    return <Component {...args} key={args.name} control={control as Control} />
  })
}
