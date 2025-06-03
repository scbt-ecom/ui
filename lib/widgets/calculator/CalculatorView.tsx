import { useEffect } from 'react'
import { type FieldValues, FormProvider } from 'react-hook-form'
import { type CalculatorSchema, evaluateFormula, getCalculatorSchema, isFormula } from './model'
import {
  CalculatorFields,
  type CalculatorFieldsClasses,
  type CalculatorFieldsProps,
  CalculatorInfo,
  type CalculatorInfoClasses,
  type CalculatorInfoProps,
  type CalculatorTab
} from './ui'
import { useControlledForm } from '$/shared/hooks'
import { cn, localStorageActions } from '$/shared/utils'
import { ZodUtils } from '$/shared/validation'

type CalculatorViewClasses = {
  root?: string
  calculatorFields?: CalculatorFieldsClasses
  calculatorInfo?: CalculatorInfoClasses
}

export interface CalculatorViewProps<T extends FieldValues = FieldValues> extends CalculatorTab {
  calculatorInfoConfig: CalculatorInfoProps
  calculatorFieldsConfig: CalculatorFieldsProps<T>
  classes?: CalculatorViewClasses
}

export const CalculatorView = <T extends FieldValues>({
  calculatorInfoConfig,
  calculatorFieldsConfig,
  classes
}: CalculatorViewProps<T>) => {
  const calculatorSchema: CalculatorSchema = getCalculatorSchema(calculatorFieldsConfig?.fieldsGroup)

  const formMethods = useControlledForm({
    schema: calculatorSchema,
    mode: 'onBlur',
    defaultValues: ZodUtils.getZodDefaults(calculatorSchema)
  })

  const watchedFields = formMethods.watch()

  const { rootValue } = calculatorInfoConfig

  useEffect(() => {
    localStorageActions.setItem('calculatorData', JSON.stringify(watchedFields))
  }, [watchedFields])

  const calculatedValue = isFormula(rootValue) ? evaluateFormula(rootValue.formula, watchedFields) : rootValue

  const mergedCalcInfoConfig = { ...calculatorInfoConfig, rootValue: calculatedValue }

  return (
    <FormProvider {...formMethods}>
      <div className={cn('flex items-start gap-16', classes?.root)}>
        <CalculatorFields {...calculatorFieldsConfig} classes={classes?.calculatorFields} />
        <CalculatorInfo {...mergedCalcInfoConfig} classes={classes?.calculatorInfo} />
      </div>
    </FormProvider>
  )
}
