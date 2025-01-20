import z from 'zod'
import { baseDefaultMessages } from './base.constants'

type SelectSingleValidationOptions<Multi extends boolean = false> = {
  /**
   * включает валидацию мульти селекта
   * @default false
   */
  multiple?: Multi
  message?: {
    single?: string
    multiple?: string
  }
}

type SelectMultipleValidationOptions<Multi extends boolean = true> = SelectSingleValidationOptions<Multi> & {
  /**
   * минимальное количество элементов
   * @default 0
   */
  minLength?: number
}

type SelectValidationOptions<Multi extends boolean> = Multi extends true
  ? SelectMultipleValidationOptions<Multi>
  : SelectSingleValidationOptions<Multi>

/**
 * Схема валидации обязательного поля типа select
 * @param {SelectValidationOptions} props настройки схемы
 * @typeParam `multiple` - `boolean`
 * @typeParam `minLength` - `number` `required if multiple = true`
 * @typeParam `message` - `{ [single | multiple]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getSelectRequiredValidationSchema({ multiple: false })
 * })
 * // will returns z.string().min(1).nullable().refine(Boolean)
 *
 * z.object({
 *   field: zodValidators.base.getSelectRequiredValidationSchema({ multiple: true, minLength: 3 })
 * })
 * // will returns z.array(z.string().min(1).nullable().refine(Boolean))
 */
export const getSelectRequiredValidationSchema = <Multi extends boolean>(props?: SelectValidationOptions<Multi>) => {
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

/**
 * Схема валидации опционального поля типа select
 * @param {SelectValidationOptions} props настройки схемы
 * @typeParam `multiple` - `boolean`
 * @typeParam `minLength` - `number` `required if multiple = true`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getSelectOptionalValidationSchema({ multiple: false })
 * })
 * // will returns z.string().nullable()
 *
 * z.object({
 *   field: zodValidators.base.getSelectOptionalValidationSchema({ multiple: true })
 * })
 * // will returns z.array(z.string().nullable())
 */
export const getSelectOptionalValidationSchema = <Multi extends boolean>(
  props?: Omit<SelectValidationOptions<Multi>, 'message'>
) => {
  const selectSchema = z.string().nullable().optional()

  if (props?.multiple) {
    return z.array(selectSchema).optional()
  }

  return selectSchema
}
