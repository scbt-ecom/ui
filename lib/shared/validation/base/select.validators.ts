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
  defaultValue?: string
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
  /**
   * максимальное количество элементов
   * @default undefined
   */
  maxLength?: number
  /**
   * фиксированное количество элементов
   * @default undefined
   */
  length?: number
  message?: SelectSingleValidationOptions<Required, Multi> & {
    minLength?: string
    maxLength?: string
    length?: string
  }
}

type SelectValidationOptions<Required extends boolean, Multi extends boolean> = Multi extends true
  ? SelectMultipleValidationOptions<Required, Multi>
  : SelectSingleValidationOptions<Required, Multi>

/**
 * Схема валидации обязательного поля типа select
 */
const getSelectRequired = <Required extends boolean, Multi extends boolean>(props?: SelectValidationOptions<Required, Multi>) => {
  const { message, defaultValue } = props || {}

  const selectSchema = z
    .string()
    .min(1, message?.single || baseDefaultMessages.SELECT_NON_EMPTY())
    .nullable()
    .refine((value) => Boolean(value), message?.single || baseDefaultMessages.SELECT_NON_EMPTY())
    .default(defaultValue ?? null)

  if (props?.multiple) {
    let arraySchema = z
      .array(selectSchema)
      .min(props?.minLength || 0, message?.multiple || baseDefaultMessages.SELECT_MULTIPLE_MIN_LENGTH(props?.minLength || 0))

    if (props?.length) {
      return arraySchema
        .length(props.length, props.message?.length || baseDefaultMessages.SELECT_FIX_LENGTH(props.length))
        .default([])
    } else if (props?.maxLength) {
      arraySchema = arraySchema.max(
        props.maxLength,
        props.message?.maxLength || baseDefaultMessages.SELECT_MULTIPLE_MAX_LENGTH(props.maxLength)
      )
    }

    return arraySchema.default([])
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
