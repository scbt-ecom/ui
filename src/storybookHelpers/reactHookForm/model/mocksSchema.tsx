import { z } from 'zod'
import { VALIDATION_MESSAGES, zodCalendarValidate } from '$/shared/validation'

export const mockSchema = z.object({
  city: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(3, `${VALIDATION_MESSAGES.MIN_LENGTH} 3`),
  phone: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(7, `${VALIDATION_MESSAGES.MIN_LENGTH} 7`),
  condition: z.literal<boolean>(true, { errorMap: () => ({ message: VALIDATION_MESSAGES.REQUIRED }) }),
  sex: z.string().min(2, VALIDATION_MESSAGES.REQUIRED),
  percent: z.literal<boolean>(true, { errorMap: () => ({ message: VALIDATION_MESSAGES.REQUIRED }) }),
  months: z.string().or(z.array(z.string())),
  description: z.string().min(3, `${VALIDATION_MESSAGES.MIN_LENGTH} 3`),
  birthday: zodCalendarValidate,
  slider: z.number().or(z.string()),
  creditSum: z.number().or(z.string()),
  files: z
    .array(z.instanceof(File))
    .min(1, { message: VALIDATION_MESSAGES.REQUIRED })
    .max(3, { message: 'Можно отправить не больше трех файлов. Чтобы добавить файлы удалите выбранные' }),
  html: z.string().min(1, { message: VALIDATION_MESSAGES.REQUIRED })
})

export type TMockSchema = z.infer<typeof mockSchema>
export const mockDefaultValues: TMockSchema = {
  city: '',
  phone: '',
  condition: true,
  sex: '',
  percent: true,
  months: '',
  description: '',
  birthday: '12.11.2024',
  slider: 100_000,
  creditSum: 100_000,
  files: [],
  html: ''
}
