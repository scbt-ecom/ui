import z from 'zod'
import { baseDefaultMessages } from './base.constants'

export type SelectSingleValidationOptions<Required extends boolean, Multi extends boolean = false> = {
  /**
   * включает валидацию мульти селекта
   * @default false
   */
  multiple?: Multi
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
  message?: {
    single?: string
    multiple?: string
  }
}

type SelectMultipleValidationOptions<Required extends boolean, Multi extends boolean = true> = SelectSingleValidationOptions<
  Required,
  Multi
> & {
  /**
   * минимальное количество элементов
   * @default 0
   */
  minLength?: number
}

type SelectValidationOptions<Required extends boolean, Multi extends boolean> = Multi extends true
  ? SelectMultipleValidationOptions<Required, Multi>
  : SelectSingleValidationOptions<Required, Multi>

/**
 * Схема валидации обязательного поля типа select
 */
const getSelectRequired = <Required extends boolean, Multi extends boolean>(props?: SelectValidationOptions<Required, Multi>) => {
  const { message } = props || {}

  const selectSchema = z
    .string()
    .min(1, message?.single || baseDefaultMessages.SELECT_NON_EMPTY())
    .nullable()
    .refine((value) => Boolean(value), message?.single || baseDefaultMessages.SELECT_NON_EMPTY())
    .default(null)

  if (props?.multiple) {
    return z
      .array(selectSchema)
      .min(props?.minLength || 0, message?.multiple || baseDefaultMessages.SELECT_MULTIPLE_NON_EMPTY(props?.minLength || 0))
      .default([])
  }

  return selectSchema
}
type SelectRequiredSchema = ReturnType<typeof getSelectRequired>

/**
 * Схема валидации опционального поля типа select
 */
function getSelectOptional<Required extends boolean, Multi extends boolean>(
  props?: Omit<SelectValidationOptions<Required, Multi>, 'message'>
) {
  const selectSchema = z.string().nullable().optional()

  if (props?.multiple) {
    return z.array(selectSchema).optional()
  }

  return selectSchema
}
type SelectOptionalSchema = ReturnType<typeof getSelectOptional>

/**
 * Схема валидации опционального поля типа select
 * @param {SelectValidationOptions} props настройки схемы
 @typeParam `required` - `boolean`
 * @typeParam `multiple` - `boolean`
 * @typeParam `minLength` - `number | undefined`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required single value
 * z.object({
 *   field: zodValidators.base.getSelectSchema({ multiple: false })
 * })
 * // will returns z.string().nullable()
 *
 * @example with required multiple value
 * z.object({
 *   field: zodValidators.base.getSelectSchema({ multiple: true })
 * })
 * // will returns z.array(z.string().nullable())
 *
 * @example with optional single value
 * z.object({
 *   field: zodValidators.base.getSelectSchema({ required: false, multiple: false })
 * })
 * // will returns z.string().nullable().optional()
 *
 * @example with optional multiple value
 * z.object({
 *   field: zodValidators.base.getSelectSchema({ required: false, multiple: true })
 * })
 * // will returns z.array(z.string().nullable().optional()).optional()
 */
export function getSelectSchema<Multi extends boolean>(props?: SelectValidationOptions<true, Multi>): SelectRequiredSchema
export function getSelectSchema<Multi extends boolean>(props?: SelectValidationOptions<false, Multi>): SelectOptionalSchema
export function getSelectSchema<Multi extends boolean, Required extends boolean>(
  props?: SelectValidationOptions<Required, Multi>
): SelectRequiredSchema | SelectOptionalSchema {
  const { required = true } = props || {}

  return required ? getSelectRequired(props) : getSelectOptional(props)
}
