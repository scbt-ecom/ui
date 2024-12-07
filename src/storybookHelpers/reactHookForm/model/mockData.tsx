import { type TMockSchema } from './mocksSchema'
import { EnumFieldType, type TStorybookFieldConfig } from './types'
import type { IRadioGroupOption } from '$/shared/ui'

export const MOCK_RADIO_GROUP: IRadioGroupOption[] = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' }
]

export const MOCK_SELECT_OPTIONS_REACT_SELECT = [
  { label: 'Кредит наличными', value: 'cash-credit' },
  { label: 'Автокредит', value: 'avto-credit' },
  { label: 'Депозит', value: 'depozit' },
  { label: 'Кредит на недвижимость', value: 'realty-credit' },
  { label: 'Кредит на обучение', value: 'education-credit' },
  { label: 'Кредит на бизнес', value: 'business-credit' },
  { label: 'Кредит на автомобиль', value: 'car-credit' },
  { label: 'Кредит на путешествие', value: 'travel-credit' },
  { label: 'Кредит на покупку земли', value: 'land-credit' },
  { label: 'Кредит на покупку квартиры', value: 'flat-credit' }
]

export const mockFields: TStorybookFieldConfig<TMockSchema>[] = [
  {
    name: 'phone',
    label: 'Номер телефона',
    fieldType: EnumFieldType.MASK,
    format: '+7 (###) ###-##-##',
    mask: '_',
    allowEmptyFormatting: true
  },
  { name: 'city', label: 'Город', fieldType: EnumFieldType.INPUT },
  {
    name: 'condition',
    label:
      'Выражаю согласие на обработку персональных данных и подтверждаю, что ознакомлен с Политикой обработки персональных данных',
    fieldType: EnumFieldType.CHECKBOX
  },
  {
    name: 'sex',
    groupName: 'Выберите пол',
    radioItemsGroup: MOCK_RADIO_GROUP,
    fieldType: EnumFieldType.RADIO
  },
  { name: 'percent', label: 'Увеличенный процент', fieldType: EnumFieldType.SWITCH },

  {
    name: 'description',
    label: 'Описание к блоку',
    fieldType: EnumFieldType.TEXTAREA
  },
  {
    name: 'files',
    label: 'Файлы',
    fieldType: EnumFieldType.UPLOADER,
    dropzoneOptions: {
      maxFiles: 5,
      maxSize: 1024 * 1024 * 4,
      multiple: true,
      accept: {
        'image/jpeg': [],
        'image/png': [],
        'application/pdf': []
      }
    }
  },
  {
    name: 'slider',
    label: 'Сумма кредита',
    fieldType: EnumFieldType.SLIDER,
    max: 300_000,
    min: 40_000,
    variant: 'credit'
  },
  {
    fieldType: EnumFieldType.EDITOR,
    name: 'html',
    label: 'Введите HTML',
    helperText: 'Текст преобразуется в HTML'
  },
  {
    fieldType: EnumFieldType.OTP,
    name: 'code',
    label: 'Введите код',
    helperText: 'Текст преобразуется в HTML'
  }
]

export const mockToastMessage = (values: string) => (
  <div className='flex flex-col'>
    <p className='desk-body-regular-l'>Форма успешно отправлена</p>
    <code className='desk-body-regular-m text-color-tetriary'>{values}</code>
  </div>
)
