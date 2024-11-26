import { z } from 'zod'
import { RgxCheckForHyphen, RgxPatronymic, RgxUnicode } from '../regExp'

const formattedFio = (value: string) => {
  const parts = value.trim().replace(/\s+/g, ' ').split(' ')
  const [surname, name, ...patronymicArr] = parts
  const patronymic = patronymicArr?.join(' ')

  return {
    surname,
    name,
    patronymic
  }
}

export const zodDadataFioValidate = z
  .string({ invalid_type_error: 'Обязательно к заполнению', required_error: 'Обязательно к заполнению' })
  .superRefine((value, ctx) => {
    if (!RgxUnicode.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Должна быть только кириллица'
      })
    }

    const { surname, name, patronymic } = formattedFio(value)

    if (!surname || !name) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Введите имя и фамилию'
      })
    }

    if (!RgxCheckForHyphen.test(name)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Неверно введено имя'
      })
    }

    if (!RgxCheckForHyphen.test(surname)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Неверно введена фамилия'
      })
    }

    if (patronymic) {
      if (!RgxPatronymic.test(patronymic)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Неверно введено отчество'
        })
      }
    }
  })

// .transform((value) => {
//   const { surname, name, patronymic } = formattedFio(value)

//   return {
//     surname: capitalize(surname),
//     name: capitalize(name),
//     patronymic: patronymic ? capitalize(patronymic) : undefined
//   }
// })

// Тестов Имя
// Тестов Имя Отчество
// Тестов-тестов Имя Отчество
// Тестов-тестов Имя Отчество углы-ули
// Тестов-тестов Имя Отчество углы-ули Отчество-Отчество
