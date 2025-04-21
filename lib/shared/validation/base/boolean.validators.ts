import z from 'zod'

export type BooleanValidationOptions<Required extends boolean> = {
  defaultValue?: boolean
  required?: Required
  message?: Partial<Record<keyof Omit<BooleanValidationOptions<Required>, 'message'>, string>>
}

const getBooleanRequired = (props?: Omit<BooleanValidationOptions<true>, 'required'>) => {
  const { defaultValue } = props || {}

  const schema = z.boolean()

  return schema.default(defaultValue ?? false)
}

type BooleanRequiredSchema = ReturnType<typeof getBooleanRequired>

const getBooleanOptional = (props?: Omit<BooleanValidationOptions<false>, 'required'>) => {
  return getBooleanRequired(props).optional()
}

type BooleanOptionalSchema = ReturnType<typeof getBooleanOptional>

export function getBooleanSchema(props?: BooleanValidationOptions<true>): BooleanRequiredSchema
export function getBooleanSchema(props?: BooleanValidationOptions<false>): BooleanOptionalSchema
export function getBooleanSchema<Required extends boolean>(
  props?: BooleanValidationOptions<Required>
): BooleanRequiredSchema | BooleanOptionalSchema {
  const { required = true, ...rest } = props || {}

  return required ? getBooleanRequired(rest) : getBooleanOptional(rest)
}
