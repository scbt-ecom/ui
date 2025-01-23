# Модуль `@scbt-ecom/ui/validation`

## Структура модуля

Модуль содержит всю логику, связанную с валидацией форм и полей в них.

- [`zodValidators`](#zodvalidators) - базовые пере используемые схемы валидации основанные на [zod](https://zod.dev/)
  - [`base`](#basegetstringschema)
    - [`getStringSchema`](#basegetstringschema)
    - [`getEmailSchema`](#basegetemailschema)
    - [`getSelectSchema`](#basegetselectschema)
    - [`getNumberSchema`](#basegetnumberschema)
    - [`getPhoneSchema`](#basegetphoneschema)
    - [`getDateSchema`](#basegetdateschema)
    - [`getUnionSchema`](#basegetunionschema)
  - [`dadata`](#dadatagetfioschema)
    - [`getFioSchema`](#dadatagetfioschema)
- [`ZodUtils`](#zodutils)
  - [`getZodDefaults`](#getzoddefaults)

# Api Reference

## `zodValidators`

### `base.getStringSchema`

Стандартная строковая схема

Используется для стандартной валидации строковых полей с возможностью конфигурирования валидации

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getStringSchema({ min: 1, max: 10 }),
  field_2: zodValidators.base.getStringSchema({ min: 1, max: 10, required: false }),
})
/*
  this will return
  {
    field_1: z.string().min(1).max(10),
    field_2: z.string().min(1).max(10).optional()
  }
*/
  
schema.parse({
  field_1: 'some value',
  field_2: 'some long value' // this field contains invalid value and throws an validation error
})
```

### Prop types

| Prop       | Type      | Description                      | Required | Default     |
|------------|-----------|----------------------------------|----------|-------------|
| `min`      | `number`  | минимальное количество символов  | `false`  | `1`         |
| `max`      | `number`  | максимальное количество символов | `false`  | `undefined` |
| `length`   | `number`  | фиксированная длина символов     | `false`  | `undefined` |
| `required` | `boolean` | указывает что поле обязательное  | `false`  | `true`      |
| `message`  | `{}`      | переопределение сообщений ошибки | `false`  | `undefined` |

### `base.getEmailSchema`

Строковая схема с email валидацией

Используется для стандартной валидации email полей 

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getEmailSchema({ regexp: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g }),
  field_2: zodValidators.base.getEmailSchema({ required: false }),
})
/*
  this will return
  {
    field_1: z.string().min(1).regex(regexp),
    field_2: z.string().regex(DEFAULT_EMAIL_REGEX).optional()
  }
*/
  
schema.parse({
  field_1: 'example@domain.ru',
  field_2: 'example&domain,ru' // this field contains invalid email and throws an validation error
})
```

### Prop types

| Prop       | Type      | Description                                           | Required | Default                              |
|------------|-----------|-------------------------------------------------------|----------|--------------------------------------|
| `regexp`   | `RegExp`  | Регулярное выражение для проверки email на валидность | `false`  | `/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g` |
| `required` | `boolean` | указывает что поле обязательное                       | `false`  | `true`                               |
| `message`  | `{}`      | переопределение сообщений ошибки                      | `false`  | `undefined`                          |

### `base.getSelectSchema`

Строковая схема для `Select` полей

Используется для стандартной валидации полей с использованием `Select` компонентов

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getSelectSchema(),
  field_2: zodValidators.base.getSelectSchema({ multiple: true }),
  field_3: zodValidators.base.getSelectSchema({ required: false }),
  field_4: zodValidators.base.getSelectSchema({ multiple: true, required: false }),
})
/*
  this will return
  {
    field_1: z.string().min(1).nullable(),
    field_2: z.array(z.string().min(1).nullable()),
    field_3: z.string().min(1).nullable().optional(),
    field_4: z.array(z.string().min(1).nullable().optional()).optional(),
  }
*/
  
schema.parse({
  field_1: 'value_1',
  field_2: ['value_1', 'value_2'],
  field_3: 123 // this field contains invalid value and throws an validation error
})
```

### Prop types

| Prop        | Type      | Description                                                               | Required | Default     |
|-------------|-----------|---------------------------------------------------------------------------|----------|-------------|
| `multiple`  | `boolean` | включает валидацию мульти селекта                                         | `false`  | `false`     |
| `required`  | `boolean` | указывает что поле обязательное                                           | `false`  | `true`      |
| `minLength` | `number`  | минимальное количество элементов (игнорируется есть `multiple = false`)   | `false`  | `1`         |
| `maxLength` | `number`  | максимальное количество элементов (игнорируется есть `multiple = false`)  | `false`  | `undefined` |
| `length`    | `number`  | фиксированное количество элементов (игнорируется есть `multiple = false`) | `false`  | `undefined` |
| `message`   | `{}`      | переопределение сообщений ошибки                                          | `false`  | `undefined` |

### `base.getNumberSchema`

Стандартная числовая схема

Используется для стандартной валидации полей числового типа

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getNumberSchema(),
  field_2: zodValidators.base.getNumberSchema({ required: false }),
})
/*
  this will return
  {
    field_1: z.coerce.number(),
    field_2: z.coerce.number().optional(),
  }
*/
  
schema.parse({
  field_1: 123,
  field_2: '123' // this field contains invalid value and throws an validation error
})
```

### Prop types

| Prop       | Type      | Description                      | Required | Default     |
|------------|-----------|----------------------------------|----------|-------------|
| `min`      | `number`  | минимальное значение             | `false`  | `0`         |
| `max`      | `number`  | максимальное значение            | `false`  | `undefined` |
| `required` | `boolean` | указывает что поле обязательное  | `false`  | `true`      |
| `message`  | `{}`      | переопределение сообщений ошибки | `false`  | `undefined` |

### `base.getPhoneSchema`

Строковая схема с валидацией номера телефона

Используется для стандартной валидации номера телефона

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getPhoneSchema(),
  field_2: zodValidators.base.getPhoneSchema({ ignoreMask: false }),
  field_3: zodValidators.base.getPhoneSchema({ required: false }),
})
/*
  this will return
  {
    field_1: z.string(),
    field_2: z.string(),
    field_3: z.string().optional(),
  }
*/
  
schema.parse({
  field_1: '+7 (999) 999-99-99',
  field_2: '+7 (999) 999-99-99',
  field_3: '+7 (123) 123-12-12' // this field contains invalid phone and throws an validation error
})
/*
  this will return
  {
    field_1: '79999999999',
    field_2: '+7 (999) 999-99-99' // ignoreMask will prevent ignoring mask behavior
  }
*/
```

### Prop types

| Prop          | Type      | Description                                                  | Required | Default       |
|---------------|-----------|--------------------------------------------------------------|----------|---------------|
| `ignoreMask`  | `boolean` | исключает маску в возвращаемом значении                      | `false`  | `true`        |
| `maskSymbols` | `RegExp`  | игнорирует символы для проверки поля исключая данные символы | `false`  | `/[()+_ -]/g` |
| `required`    | `boolean` | указывает что поле обязательное                              | `false`  | `true`        |
| `message`     | `{}`      | переопределение сообщений ошибки                             | `false`  | `undefined`   |

### `base.getDateSchema`

Строковая схема валидации даты

Используется для стандартной валидации даты

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getDateSchema({ iso: true }),
  field_2: zodValidators.base.getDateSchema(),
  field_3: zodValidators.base.getDateSchema({ required: false }),
})
/*
  this will return
  {
    field_1: z.string(),
    field_2: z.string(),
    field_3: z.string().optional(),
  }
*/
  
schema.parse({
  field_1: '2025-01-23T00:00:00.000Z',
  field_2: '23.01.2025',
  field_3: '50.50.5000' // this field contains invalid date and throws an validation error
})
```

### Prop types

| Prop       | Type      | Description                                                           | Required | Default      |
|------------|-----------|-----------------------------------------------------------------------|----------|--------------|
| `iso`      | `boolean` | валидация строки с учетом ISO формата                                 | `false`  | `false`      |
| `pattern`  | `string`  | шаблон для валидации строки (будет проигнорирован, если `iso = true`) | `false`  | `dd.MM.yyyy` |
| `required` | `boolean` | указывает что поле обязательное                                       | `false`  | `true`       |
| `message`  | `{}`      | переопределение сообщений ошибки                                      | `false`  | `undefined`  |

### `base.getUnionSchema`

Схема валидации юнион-полей

Используется для стандартной валидации списков с определенными значениями

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.base.getUnionSchema(['A', 'B', 'C'] as const),
  field_2: zodValidators.base.getUnionSchema(['A', 'B', 'C'] as const),
  field_3: zodValidators.base.getUnionSchema({ required: false })
})
/*
  this will return
  {
    field_1: z.union([z.literal('A'), z.literal('B'), z.literal('C')]),
    field_2: z.union([z.literal('A'), z.literal('B'), z.literal('C')]),
    field_3: z.union([z.literal('A'), z.literal('B'), z.literal('C')]).optional(),
  }
*/
  
schema.parse({
  field_1: 'A',
  field_2: 'D' // this field contains invalid value and throws an validation error
})
```

### Prop types

| Prop                 | Type                                           | Description                                         | Required | Default     |
|----------------------|------------------------------------------------|-----------------------------------------------------|----------|-------------|
| `invalid_type_error` | `string`                                       | сообщение об ошибке при не правильном типе значение | `false`  | `undefined` |
| `required_error`     | `string`                                       | сообщение об ошибке при отсутствии значения         | `false`  | `undefined` |
| `description`        | `string`                                       | описание схемы                                      | `false`  | `undefined` |
| `required`           | `boolean`                                      | указывает что поле обязательное                     | `false`  | `true`      |
| `message`            | `((values: readonly T[]) => string) \| string` | переопределение сообщений ошибки                    | `false`  | `undefined` |

### `dadata.getFioSchema`

Стандартная строковая схема валидации ФИО

Используется для стандартной валидации строковых полей для ввода ФИО

Пример использования:

```ts
import { zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  field_1: zodValidators.dadata.getFioSchema(),
  field_2: zodValidators.dadata.getFioSchema({ required: false }),
})
/*
  this will return
  {
    field_1: z.string(),
    field_2: z.string().optional()
  }
*/
  
schema.parse({
  field_1: 'Иванов Иван Иванович',
  field_2: 'ИвановИванИванович' // this field contains invalid value and throws an validation error
})
```

### Prop types

| Prop       | Type      | Description                      | Required | Default     |
|------------|-----------|----------------------------------|----------|-------------|
| `required` | `boolean` | указывает что поле обязательное  | `false`  | `true`      |
| `message`  | `{}`      | переопределение сообщений ошибки | `false`  | `undefined` |

## `ZodUtils`

Класс утилитарных функций для [zod](https://zod.dev/)

### `getZodDefaults`

Утилита для получения значений по умолчанию в соответствии со схемой валидации

Пример использования

```tsx
import { useControlledForm } from '@scbt-ecom/ui/hooks'
import { ZodUtils, zodValidators } from '@scbt-ecom/ui/validation'

const schema = z.object({
  name: zodValidators.base.getStringSchema(),
  role: zodValidators.base.getUnionSchema(['UNKNOWN', 'ADMIN', 'MODERATOR', 'USER'] as const),
  info: z.object({
    address: zodValidators.base.getStringSchema(),
    phone: zodValidators.base.getPhoneSchema({ ignoreMask: true }),
    age: zodValidators.base.getNumberSchema()
  })
})

const defaultValues = ZodUtils.getZodDefaults(schema)

// default values will be inferred from schema
// {
//   name: '',
//   role: 'UNKNOWN',
//   info: {
//     address: '',
//     phone: '',
//     age: 0
//   }
// }


const Component = () => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues
  })
  
  /*
    some logic
  */
  
  return (
    <form onSubmit={handleSubmit((values) => {}, (errors) => {})}>
      {/* some fields */}
    </form>
  )
}
```

### Prop types

| Prop                 | Type      | Description                                                    | Required | Default |
|----------------------|-----------|----------------------------------------------------------------|----------|---------|
| `fillArrayWithValue` | `boolean` | Вставить в массив значение, исходя из внутренней схемы z.array | `false`  | `false` |