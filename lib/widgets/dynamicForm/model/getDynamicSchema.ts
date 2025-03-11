import { type FieldValues } from 'react-hook-form'
import { object, type ZodObject, type ZodRawShape, type ZodTypeAny } from 'zod'
import { TypeGuards } from '$/shared/utils'
import { zodValidators } from '$/shared/validation'
import { type FieldElement } from '$/widgets'

export type FieldValidation = {
  type: string
  args: Record<string, any>
}

type ValidationSchema = {
  [key: string]: (...args: any[]) => ZodTypeAny
}

type ValidationConfig<T extends ValidationSchema> = {
  [K in keyof T]: Parameters<T[K]>[0]
}

type ValidationReturn<T extends ValidationSchema> = {
  [K in keyof T]: ReturnType<T[K]>
}

type BaseValidationKey = keyof typeof zodValidators.base
type BaseValidationSchema = typeof zodValidators.base
type BaseValidationConfig = ValidationConfig<BaseValidationSchema>
type BaseValidationReturn = ValidationReturn<BaseValidationSchema>

type DadataValidationKey = keyof typeof zodValidators.dadata
type DadataValidationSchema = typeof zodValidators.dadata
type DadataValidationConfig = ValidationConfig<DadataValidationSchema>
type DadataValidationReturn = ValidationReturn<DadataValidationSchema>

const existDadataSchemas = ['getFioSchema']

const createFieldSchema = <Schema extends ValidationSchema, Type extends keyof Schema>(
  schema: Schema,
  type: Type,
  props: ValidationConfig<Schema>[Type]
): ValidationReturn<Schema>[Type] => {
  const validator = schema[type]

  if (TypeGuards.isNil(validator)) {
    throw new Error(`validation for type ${String(type)} not found`)
  }

  if (!TypeGuards.isFunction(validator)) {
    throw new Error(`Cannot generate ${String(type)} because is not a function`)
  }

  return validator(props) as ValidationReturn<Schema>[Type]
}

const createBaseFieldSchema = <Type extends BaseValidationKey>(
  type: Type,
  props: BaseValidationConfig[Type]
): BaseValidationReturn[Type] => {
  return createFieldSchema(zodValidators.base, type, props)
}

const createDadataFieldSchema = <Type extends DadataValidationKey>(
  type: Type,
  props: DadataValidationConfig[Type]
): DadataValidationReturn[Type] => {
  return createFieldSchema(zodValidators.dadata, type, props)
}

export const getDynamicSchema = <TFieldValues extends FieldValues>(
  fields: FieldElement<TFieldValues, any, { validation: FieldValidation }>[]
): ZodObject<ZodRawShape> => {
  const fieldValidation = fields.map((field) => ({ name: field.args.name, validation: field.args.validation }))

  const shape = fieldValidation.reduce<ZodRawShape>((acc, field) => {
    const validation = existDadataSchemas.includes(field.validation.type)
      ? createDadataFieldSchema(
          field.validation.type as DadataValidationKey,
          field.validation.args as DadataValidationConfig[DadataValidationKey]
        )
      : createBaseFieldSchema(
          field.validation.type as BaseValidationKey,
          field.validation.args as BaseValidationConfig[BaseValidationKey]
        )

    acc[field.name] = validation

    return acc
  }, {})

  return object(shape)
}
