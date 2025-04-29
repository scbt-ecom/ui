import { type FieldValues, FormProvider } from 'react-hook-form'
import { type CalculatorSchema, evaluateFormula, getCalculatorSchema, isFormula } from './model'
import { CalculatorFields, type CalculatorFieldsProps, CalculatorInfo, type CalculatorInfoProps, type CalculatorTab } from './ui'
import { useControlledForm } from '$/shared/hooks'
import { ZodUtils } from '$/shared/validation'

export interface CalculatorViewProps<T extends FieldValues = FieldValues> extends CalculatorTab {
  calculatorInfoConfig: CalculatorInfoProps
  calculatorFieldsConfig: CalculatorFieldsProps<T>
}

export const CalculatorView = <T extends FieldValues>({
  calculatorInfoConfig,
  calculatorFieldsConfig
}: CalculatorViewProps<T>) => {
  console.log(calculatorInfoConfig, '@calculatorInfoConfig')
  console.log(calculatorFieldsConfig, '@calculatorFieldsConfig')
  const calculatorSchema: CalculatorSchema = getCalculatorSchema(calculatorFieldsConfig?.fieldsGroup)

  const formMethods = useControlledForm({
    schema: calculatorSchema,
    mode: 'onBlur',
    defaultValues: ZodUtils.getZodDefaults(calculatorSchema)
  })

  const watchedFields = formMethods.watch()

  const { rootValue } = calculatorInfoConfig
  const calculatedValue = isFormula(rootValue) ? evaluateFormula(rootValue.formula, watchedFields) : rootValue

  const mergedCalcInfoConfig = { ...calculatorInfoConfig, rootValue: calculatedValue }

  return (
    <FormProvider {...formMethods}>
      <div className='flex items-start gap-16'>
        <CalculatorFields {...calculatorFieldsConfig} />
        <CalculatorInfo {...mergedCalcInfoConfig} />
      </div>
    </FormProvider>
  )
}
