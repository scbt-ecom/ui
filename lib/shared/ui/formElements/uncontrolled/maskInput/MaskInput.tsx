import { forwardRef } from 'react'
import { useInputMask } from 'use-mask-input'
import { InputBase, type InputBaseProps } from '../input'
import { defaultDefinitions } from './model/mask'
import { mergeRefs } from '$/shared/utils'

type Validator = (char: string) => boolean
type Casing = 'upper' | 'lower' | 'title'
export type Definition = {
  validator: string | Validator
  casing?: Casing
  cardinality?: number
  placeholder?: string
  definitionSymbol?: string
}

export type MaskInputProps = InputBaseProps & {
  /**
   * маска, по которой будет определяться валидация символов
   */
  mask:
    | 'datetime'
    | 'email'
    | 'numeric'
    | 'currency'
    | 'decimal'
    | 'integer'
    | 'percentage'
    | 'url'
    | 'ip'
    | 'mac'
    | 'ssn'
    | 'brl-currency'
    | 'cpf'
    | 'cnpj'
    | (string & {})
    | (string[] & {})
    | null
  /**
   * дополнительные валидаторы спец символов в маске
   */
  externalMaskDefinitions?: Record<string, Definition>
}

/**
 * Компонент маски очень умный, умеет обрабатывать специальные символы
 * в том порядке, который определён маской
 * @typeParam `#` позволяет вводить только числа (regexp: `/\d/g`)
 * @typeParam `A` позволяет вводить любые буквы русского и английского алфавита (regexp: `/[A-Za-zА-Яа-я]/g`)
 * @typeParam `C` позволяет вводить любые буквы, которые определены для использования в гос номерах автомобилей (regexp: `/([АВЕКМНОРСТУХавекмнорстух])/`)
 */
export const MaskInput = forwardRef<HTMLInputElement, MaskInputProps>(({ mask, externalMaskDefinitions, ...props }, ref) => {
  const maskedRef = useInputMask({
    mask,
    options: {
      jitMasking: false,
      definitions: {
        ...defaultDefinitions,
        ...externalMaskDefinitions
      }
    }
  })

  return <InputBase ref={mergeRefs(maskedRef, ref)} {...props} />
})
MaskInput.displayName = 'MaskInput'
