export const fioDefaultMessages = {
  NON_EMPTY: () => 'Поле обязательно для заполнения',
  VALUE_NO_WHITESPACE: () => 'Укажите фамилию, имя и отчество через пробел',
  ONLY_CYRILLIC: () => 'Данные должны быть написаны кириллицей',
  NAME_OR_SURNAME_NON_EMPTY: () => 'Укажите имя и фамилию',
  INVALID_NAME: () => 'Неверно введено имя',
  INVALID_SURNAME: () => 'Неверно введена фамилия',
  INVALID_PATRONYMIC: () => 'Неверно введено отчество'
}

export const fioRegex = {
  ONLY_CYRILLIC: /^[а-яА-ЯёЁ]+$/,
  CHECK_HYPHEN: /^(?:[^-]+(?:-[^-]+){0,4}|[^-]+)$/,
  CHECK_WHITESPACES: /\s/g,
  PATRONYMIC: /^[a-zA-Zа-яА-ЯёЁ]+(?:\s*-\s*[a-zA-Zа-яА-ЯёЁ]+){0,4}(?:\s+[a-zA-Zа-яА-ЯёЁ]+(?:\s*-\s*[a-zA-Zа-яА-ЯёЁ]+){0,4})?$/i
}
