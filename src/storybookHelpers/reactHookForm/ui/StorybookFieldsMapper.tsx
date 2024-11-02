import { type DefaultValues, type FieldValues, useFormContext, type UseFormReturn } from 'react-hook-form'
import type { Schema, TypeOf } from 'zod'
import {
  EnumFieldType,
  type TControlledInput,
  type TControlledInputCalendar,
  type TControlledInputCheckbox,
  type TControlledInputDadata,
  type TControlledInputMask,
  type TControlledInputRadio,
  type TControlledInputSlider,
  type TControlledInputSwitch,
  type TControlledInputTextarea,
  type TControlledInputUploader,
  type TStorybookFieldConfig
} from '../model/types'
import {
  Button,
  CalendarControl,
  CheckboxControl,
  DadataInputControl,
  InputControl,
  InputControlMask,
  InputControlUploader,
  InputSliderControl,
  RadioControl,
  SwitchControl,
  TextareaControl
} from '$/shared/ui'

type TStorybookFieldsMapperProps<T extends FieldValues> = {
  fields: TStorybookFieldConfig<T>[]
  defaultValues?: DefaultValues<TypeOf<Schema>>
  btnSubmit?: string
  btnReset?: string
}

const renderFields = <T extends FieldValues>(fieldConfig: TStorybookFieldConfig<T>, formMethods: UseFormReturn<T>) => {
  const { control, setValue, watch } = formMethods
  const { fieldType, ...props } = fieldConfig
  switch (fieldType) {
    case EnumFieldType.INPUT:
      return <InputControl control={control} {...(props as TControlledInput<T>)} />
    case EnumFieldType.MASK:
      return <InputControlMask control={control} {...(props as TControlledInputMask<T>)} />
    case EnumFieldType.DADATA:
      return <DadataInputControl control={control} {...(props as TControlledInputDadata<T>)} />
    case EnumFieldType.CHECKBOX:
      return <CheckboxControl control={control} {...(props as TControlledInputCheckbox<T>)} />
    case EnumFieldType.RADIO:
      return <RadioControl control={control} {...(props as TControlledInputRadio<T>)} />
    case EnumFieldType.SWITCH:
      return <SwitchControl control={control} {...(props as TControlledInputSwitch<T>)} />
    case EnumFieldType.TEXTAREA:
      return <TextareaControl control={control} {...(props as TControlledInputTextarea<T>)} />
    case EnumFieldType.CALENDAR:
      return <CalendarControl control={control} setValue={setValue} watch={watch} {...(props as TControlledInputCalendar<T>)} />
    case EnumFieldType.SLIDER:
      return <InputSliderControl control={control} {...(props as TControlledInputSlider<T>)} />
    case EnumFieldType.UPLOADER:
      return <InputControlUploader control={control} {...(props as TControlledInputUploader<T>)} />
    // case EnumFieldType.EDITOR:
    //   return <EditorControl control={control} {...props} />
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
  const formMethods = useFormContext()

  const resetStates = () => {
    formMethods?.clearErrors()
    formMethods?.reset(defaultValues)
  }

  return (
    <div className='flex w-[600px] flex-col gap-3'>
      {fields?.map((field) => <div key={field.name}>{renderFields(field, formMethods)}</div>)}
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
