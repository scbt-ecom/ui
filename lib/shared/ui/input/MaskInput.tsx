import { forwardRef } from 'react'
import { useInputMask } from 'use-mask-input'
import { InputBase, type InputBaseProps } from './Input'

type Validator = (char: string) => boolean
type Casing = 'upper' | 'lower' | 'title'
type Definition = {
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
  mask: Parameters<typeof useInputMask>[0]['mask']
  /**
   * дополнительные валидаторы спец символов в маске
   */
  externalMaskDefinitions?: Record<string, Definition>
}

function mergeRefs<T>(...inputRefs: (React.Ref<T> | undefined)[]): React.Ref<T> | React.RefCallback<T> {
  const filteredInputRefs = inputRefs.filter(Boolean)

  if (filteredInputRefs.length <= 1) {
    const firstRef = filteredInputRefs[0]

    return firstRef || null
  }

  return function mergedRefs(ref) {
    filteredInputRefs.forEach((inputRef) => {
      if (typeof inputRef === 'function') {
        inputRef(ref)
      } else if (inputRef) {
        ;(inputRef as React.MutableRefObject<T | null>).current = ref
      }
    })
  }
}

/**
 * Компонент маски очень умный, умеет обрабатывать специальные символы
 * в том порядке, который определён маской
 * @typeParam '\#' позволяет вводить только числа (regexp: /\d/g)
 * @typeParam 'A' позволяет вводить любые буквы русского и английского алфавита (regexp: /[A-Za-zА-Яа-я]/g)
 * @typeParam 'C' позволяет вводить любые буквы, которые определены для использования в гос номерах автомобилей (regexp: /([АВЕКМНОРСТУХавекмнорстух])/)
 */
export const MaskInput = forwardRef<HTMLInputElement, MaskInputProps>(({ mask, externalMaskDefinitions, ...props }, ref) => {
  const maskedRef = useInputMask({
    mask,
    options: {
      jitMasking: false,
      definitions: {
        '#': {
          validator: (char) => /\d/g.test(char)
        },
        A: {
          validator: (char) => /[A-Za-zА-Яа-я]/g.test(char)
        },
        C: {
          validator: (char) => /([АВЕКМНОРСТУХавекмнорстух])/.test(char)
        },
        ...externalMaskDefinitions
      }
    }
  })

  return <InputBase ref={mergeRefs(maskedRef, ref)} {...props} />
})
MaskInput.displayName = 'MaskInput'
