import { type Control, type DefaultValues, type FieldValues, useFormContext } from 'react-hook-form'
import type { Schema, TypeOf } from 'zod'
import { EnumFieldType, type TStorybookFieldConfig } from '../model/types'
import {
  Button,
  CalendarControl,
  CheckboxControl,
  DadataInputControl,
  InputControl,
  InputControlMask,
  InputSliderControl,
  RadioControl,
  SelectControl,
  SwitchControl,
  TextareaControl
} from '$/shared/ui'

type TStorybookFieldsMapperProps<T extends FieldValues> = {
  fields: TStorybookFieldConfig<T>[]
  defaultValues?: DefaultValues<TypeOf<Schema>>
  btnSubmit?: string
  btnReset?: string
}

const renderFields = <T extends FieldValues>(fieldConfig: TStorybookFieldConfig<T>, control: Control<FieldValues>) => {
  const { fieldType } = fieldConfig
  switch (fieldType) {
    case EnumFieldType.INPUT:
      return <InputControl control={control} {...fieldConfig} />
    case EnumFieldType.MASK:
      return <InputControlMask control={control} {...fieldConfig} />
    case EnumFieldType.DADATA:
      return <DadataInputControl control={control} {...fieldConfig} />
    case EnumFieldType.CHECKBOX:
      return <CheckboxControl control={control} {...fieldConfig} />
    case EnumFieldType.RADIO:
      return <RadioControl control={control} {...fieldConfig} />
    case EnumFieldType.SWITCH:
      return <SwitchControl control={control} {...fieldConfig} />
    case EnumFieldType.SELECT:
      return <SelectControl control={control} {...fieldConfig} />
    case EnumFieldType.TEXTAREA:
      return <TextareaControl control={control} {...fieldConfig} />
    case EnumFieldType.CALENDAR:
      return <CalendarControl control={control} {...fieldConfig} />
    case EnumFieldType.CREDIT:
      return (
        <InputSliderControl
          min={40000}
          max={5000000}
          label={fieldConfig.label}
          name={fieldConfig.name}
          variant='credit'
          control={control}
        />
      )
    default:
      return null
  }
}

export const StorybookFieldsMapper = <T extends FieldValues>({
  fields,
  defaultValues,
  btnSubmit = 'Отправить',
  btnReset = 'Сбросить состояние'
}: TStorybookFieldsMapperProps<T>) => {
  const { control, clearErrors, reset } = useFormContext()

  const resetStates = () => {
    clearErrors()
    reset(defaultValues)
  }

  return (
    <div className='flex flex-col gap-3 w-[600px]'>
      {fields?.map((field) => <div key={field.name}>{renderFields(field, control)}</div>)}
      <div className='flex items-center gap-6'>
        {btnSubmit && <Button type='submit'>{btnSubmit}</Button>}
        {btnReset && (
          <Button onClick={resetStates} intent='secondary'>
            Сбросить состояние
          </Button>
        )}
      </div>
    </div>
  )
}
