import { type FieldPath, type FieldValues } from 'react-hook-form'
import { type Controlled } from '$/shared/ui'

export type ElementType = keyof typeof Controlled

export type FieldElement<TFieldValues extends FieldValues = FieldValues, Type extends ElementType = ElementType> = {
  type: Type
  args: React.ComponentPropsWithoutRef<(typeof Controlled)[Type]> & {
    name: FieldPath<TFieldValues>
  }
}
