import { defaultValues, fields, schema } from './constants'
import { ComponentFactory } from '@/test/utils'
import { FieldMapper } from '$/widgets/fieldMapper'

describe('Test cases for FieldMapper', () => {
  const factory = new ComponentFactory(FieldMapper)

  it('Should render fields from object entries correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          fields
        },
        schema,
        defaultValues
      })
    )
  })
})
