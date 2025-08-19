import { array, boolean, instanceof as instanceOf, object, type TypeOf } from 'zod'
import { DADATA_BASE_CACHE_URL } from '@/configs/api'
import { ZodUtils, zodValidators } from '$/shared/validation'
import type { FieldElement } from '$/widgets'

export const schema = object({
  field: zodValidators.base.getStringSchema(),
  gender: zodValidators.base.getSelectSchema(),
  birthday: zodValidators.base.getDateSchema({ iso: false }),
  registerDate: zodValidators.base.getDateSchema(),
  arguments: zodValidators.base.getSelectSchema(),
  applyConditions: boolean(),
  file: array(instanceOf(File)).min(1),
  description: zodValidators.base.getStringSchema(),
  enableProps: boolean(),
  range: zodValidators.base.getNumberSchema({ min: 1 }),
  html: zodValidators.base.getStringSchema(),
  fio: zodValidators.dadata.getFioSchema()
})

export const defaultValues = ZodUtils.getZodDefaults(schema)

export type Schema = TypeOf<typeof schema>

export const fields: FieldElement<Schema, any>[] = [
  {
    type: 'InputControl',
    args: {
      name: 'field',
      label: 'Input 1'
    }
  },
  {
    type: 'MaskInputControl',
    args: {
      name: 'birthday',
      label: 'Birthday',
      mask: '##.##.####'
    }
  },
  {
    type: 'ComboboxControl',
    args: {
      name: 'gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ],
      label: 'Gender'
    }
  },
  {
    type: 'DayPickerControl',
    args: {
      name: 'registerDate',
      inputProps: {
        label: 'Register Date'
      }
    }
  },
  {
    type: 'CheckboxControl',
    args: {
      name: 'applyConditions',
      children: 'Apply Conditions',
      label: 'About it'
    }
  },
  {
    type: 'RadioGroupControl',
    args: {
      name: 'arguments',
      label: 'Pick one value',
      options: [
        { value: 'value_1', label: 'Value 1' },
        { value: 'value_2', label: 'Value 2' }
      ]
    }
  },
  {
    type: 'UploaderControl',
    args: {
      name: 'file'
    }
  },
  {
    type: 'TextareaControl',
    args: {
      name: 'description',
      label: 'About me'
    }
  },
  {
    type: 'SwitchControl',
    args: {
      name: 'enableProps',
      children: 'Enable props'
    }
  },
  {
    type: 'SliderControl',
    args: {
      name: 'range',
      label: 'Range',
      min: 30_000,
      max: 5_000_000,
      variant: 'credit',
      leftText: '30 тыс.',
      rightText: '5 млн.'
    }
  },
  {
    type: 'EditorControl',
    args: {
      name: 'html',
      label: 'Enter an HTML',
      helperText: 'Text will convert to HTML'
    }
  },
  {
    type: 'DadataFio',
    args: {
      name: 'fio',
      label: 'FIO',
      dadataBaseUrl: DADATA_BASE_CACHE_URL
    }
  }
]
