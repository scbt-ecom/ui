import { z } from 'zod'

export const zodPhoneSchema = z
  .string()
  .superRefine((value, ctx) => {
    const operatorCode = value.charAt(0)

    if (!['3', '4', '5', '6', '9'].includes(operatorCode)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Код города/оператора должен начинаться с цифры 3, 4, 5, 6 или 9'
      })
    }

    if (value.length !== 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Введите номер телефона полностью'
      })
    }
  })
  .transform((value) => `7${value}`)
