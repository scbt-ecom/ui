import { type FieldValues, type Path, useFormContext, type UseFormWatch } from 'react-hook-form'
import { FieldsGroup, type SlidersGroupProps } from './FieldsGroup'

const evaluateExpressionWith = <T extends FieldValues>(value: string | undefined, watch: UseFormWatch<T>) => {
  if (!value) return 0

  const variables = (value.match(/[a-z]+/gi) as string[]) ?? []
  const expression = `return ${value}`.trim()

  const fn = new Function(...variables, expression)

  return fn(...watch(variables as Path<T>[]).map(Number))
}

export const SliderFieldsGroup = <T extends FieldValues>({ fields }: SlidersGroupProps<T>) => {
  const { watch } = useFormContext<T>()

  const transformedFields = (() => {
    return fields.map((field) => {
      const min = isNaN(Number(field.args.min)) ? evaluateExpressionWith(field.args.min?.toString(), watch) : field.args.min
      const max = isNaN(Number(field.args.max)) ? evaluateExpressionWith(field.args.max?.toString(), watch) : field.args.max

      return {
        ...field,
        args: {
          ...field.args,
          min,
          max
        }
      }
    })
  })()

  return <FieldsGroup fields={transformedFields} />
}
