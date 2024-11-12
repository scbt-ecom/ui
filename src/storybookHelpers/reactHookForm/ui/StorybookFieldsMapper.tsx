import { type FieldValues, useFormContext } from 'react-hook-form'
import { renderFields } from '../model/renderFields'
import { type TStorybookFieldsMapperProps } from '../model/types'
import { Button } from '$/shared/ui'

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
