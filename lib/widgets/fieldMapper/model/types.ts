import { type FieldPath, type FieldValues } from 'react-hook-form'
import { type Controlled } from '$/shared/ui'

export type ElementType = keyof typeof Controlled

export type FieldElement<
  TFieldValues extends FieldValues = FieldValues,
  Type extends ElementType = ElementType,
  ExternalProps = {}
> = {
  type: Type
  args: React.ComponentPropsWithoutRef<(typeof Controlled)[Type]> &
    ExternalProps & {
      name: FieldPath<TFieldValues>
    }
}

export type FieldElementWithoutControl<
  TFieldValues extends FieldValues = FieldValues,
  Type extends ElementType = ElementType,
  ExternalProps = {}
> = {
  type: Type
  args: Omit<React.ComponentPropsWithoutRef<(typeof Controlled)[Type]>, 'control'> &
    ExternalProps & {
      name: FieldPath<TFieldValues>
    }
}
