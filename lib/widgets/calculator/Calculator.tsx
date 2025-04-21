import { type FieldValues, FormProvider } from 'react-hook-form'
import { type CalculatorSchema, evaluateFormula, getCalculatorSchema, isFormula } from './model'
import { CalculatorInfo, type CalculatorInfoProps, RootCalculator, type RootCalculatorProps } from './ui'
import { useControlledForm } from '$/shared/hooks'
import { ZodUtils } from '$/shared/validation'

export interface CalculatorProps<T extends FieldValues = FieldValues> {
  calculatedInfoConfig: CalculatorInfoProps
  rootCalculatorConfig: RootCalculatorProps<T>
}

export const Calculator = <T extends FieldValues>({ calculatedInfoConfig, rootCalculatorConfig }: CalculatorProps<T>) => {
  const calculatorSchema: CalculatorSchema = getCalculatorSchema(rootCalculatorConfig.fieldsGroup)

  const formMethods = useControlledForm({
    schema: calculatorSchema,
    mode: 'onBlur',
    defaultValues: ZodUtils.getZodDefaults(calculatorSchema)
  })

  const watchedFields = formMethods.watch()

  const { rootValue } = calculatedInfoConfig
  const calculatedValue = isFormula(rootValue) ? evaluateFormula(rootValue.formula, watchedFields) : rootValue

  const mergedCalcInfoConfig = { ...calculatedInfoConfig, rootValue: calculatedValue }
  return (
    <FormProvider {...formMethods}>
      <div className='flex items-start gap-16'>
        <RootCalculator {...rootCalculatorConfig} />
        <CalculatorInfo {...mergedCalcInfoConfig} />
      </div>
    </FormProvider>
  )
}
