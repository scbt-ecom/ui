import z, { ZodIssueCode } from 'zod'
import { baseDefaultMessages } from './base.constants'

const departmentLevels = ['0', '1', '2', '3']

export type PassportDepartmentValidationOptions = {
  /**
   * значение по умолчанию
   * @default undefined
   */
  defaultValue?: string
  message?: Partial<Record<'empty' | 'root' | 'invalidDepartment', string>>
}

/**
 * Схема валидации обязательного поля паспорта
 */
const getPassportDepartmentRequired = (props?: PassportDepartmentValidationOptions) => {
  const { defaultValue, message } = props || {}
  const { root, empty, invalidDepartment } = message || {}

  const schema = z
    .string({ message: root ?? baseDefaultMessages.DEPARTMENT_NON_EMPTY() })
    .nonempty(empty ?? baseDefaultMessages.DEPARTMENT_NON_EMPTY())
    .superRefine((value, context) => {
      const [left, right] = value.replace(/_/g, '').split('-')

      if (left?.length + right?.length !== 6) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: empty ?? baseDefaultMessages.INVALID_DEPARTMENT()
        })
      }

      if (!left.length || !right.length) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: empty ?? baseDefaultMessages.DEPARTMENT_NON_EMPTY()
        })
      }

      if (/^0{2,3}/.test(left)) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidDepartment ?? baseDefaultMessages.INVALID_DEPARTMENT()
        })
      }

      if (!departmentLevels.includes(left[left.length - 1])) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidDepartment ?? baseDefaultMessages.INVALID_DEPARTMENT()
        })
      }

      if (!right.replace(/^0+/g, '').length) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidDepartment ?? baseDefaultMessages.INVALID_DEPARTMENT()
        })
      }
    })

  return schema.default(defaultValue ?? '')
}
type PassportDepartmentRequiredSchema = ReturnType<typeof getPassportDepartmentRequired>

/**
 * Схема валидации обязательного поля кода подразделения паспорта
 * @param {PassportDepartmentValidationOptions} props настройки схемы
 * @typeParam `message` - `{ ['empty' | 'root' | 'invalidDepartment']: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getPassportDepartmentSchema()
 * })
 * // will return z.string()
 */
export function getPassportDepartmentSchema(props?: PassportDepartmentValidationOptions): PassportDepartmentRequiredSchema {
  return getPassportDepartmentRequired(props)
}
