import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const baseSchema = object({
  field: zodValidators.base.getDateSchema()
})

export const dayPickerBaseProps = {
  inputProps: {
    label: 'Pick a day',
    'data-test-id': 'day-picker'
  },
  name: 'field'
}
