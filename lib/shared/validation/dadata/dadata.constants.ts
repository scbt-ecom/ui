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
  ONLY_CYRILLIC: /[\u0400-\u04FF\u00CB\u00EB -]/g,
  CHECK_HYPHEN: /^(?:[^-]+(?:-[^-]+){0,4}|[^-]+)$/,
  PATRONYMIC: /^[a-zA-Zа-яА-ЯёЁ]+(?:\s*-\s*[a-zA-Zа-яА-ЯёЁ]+){0,4}(?:\s+[a-zA-Zа-яА-ЯёЁ]+(?:\s*-\s*[a-zA-Zа-яА-ЯёЁ]+){0,4})?$/i
}
