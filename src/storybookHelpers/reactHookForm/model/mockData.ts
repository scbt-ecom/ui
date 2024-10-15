import { type IRadioGroupOption, type ISelectOption } from '$/shared/ui'

export const MOCK_SELECT_OPTIONS: ISelectOption[] = [
  { optionValue: 'Январь', optionLabel: 'Январь' },
  { optionValue: 'Февраль', optionLabel: 'Февраль' },
  { optionValue: 'Март', optionLabel: 'Март', additionalText: 'Дополнительный текст' },
  { optionValue: 'Апрель', optionLabel: 'Апрель', additionalText: 'Дополнительный текст' },
  { optionValue: 'Май', optionLabel: 'Май', additionalText: 'Дополнительный текст' },
  { optionValue: 'Июнь', optionLabel: 'Июнь' },
  { optionValue: 'Июль', optionLabel: 'Июль' },
  { optionValue: 'Август', optionLabel: 'Август' },
  { optionValue: 'Сентябрь', optionLabel: 'Сентябрь' },
  { optionValue: 'Октябрь', optionLabel: 'Октябрь' },
  { optionValue: 'Ноябрь', optionLabel: 'Ноябрь' },
  { optionValue: 'Декабрь', optionLabel: 'Декабрь' }
]

export const MOCK_RADIO_GROUP: IRadioGroupOption[] = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' }
]
