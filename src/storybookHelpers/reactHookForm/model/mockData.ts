import { type IRadioGroupOption, type ISelectOption } from '$/shared/ui'

export const MOCK_SELECT_OPTIONS: ISelectOption[] = [
  { optionValue: 'Январь' },
  { optionValue: 'Февраль' },
  { optionValue: 'Март', additionalText: 'Дополнительный текст' },
  { optionValue: 'Апрель', additionalText: 'Дополнительный текст' },
  { optionValue: 'Май', additionalText: 'Дополнительный текст' },
  { optionValue: 'Июнь' },
  { optionValue: 'Июль' },
  { optionValue: 'Август' },
  { optionValue: 'Сентябрь' },
  { optionValue: 'Октябрь' },
  { optionValue: 'Ноябрь' },
  { optionValue: 'Декабрь' }
]

export const MOCK_RADIO_GROUP: IRadioGroupOption[] = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' }
]
