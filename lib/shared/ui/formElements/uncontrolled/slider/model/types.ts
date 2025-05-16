import { type FieldValues, type Path } from 'react-hook-form'
import type { InputBaseProps } from '../../input'
import { type InputBaseClasses } from '../../input/Input'
import { type SliderClasses } from '../ui'

export type TSuffixVariants = 'year' | 'month' | 'day' | 'currency' | 'percent'

export type ExternalHandlers = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onInputChange?: (value?: number) => void
  onChange?: (value: number) => void
}

export type SliderBaseClasses = {
  root?: string
  textContainer?: string
  input?: string
  labelClasses?: string
  textRight?: string
  textLeft?: string
  field?: string
  slider?: SliderClasses
  inputRoot?: InputBaseClasses
}

export type ComponentType = 'marks' | 'step' | 'algorithmic'

export interface SliderCommonProps
  extends Omit<InputBaseProps, 'externalHandlers' | 'onChange' | 'value' | 'defaultValue' | 'type'> {
  /**
   * Объект classes с помощью которого можно поменять стили у компонента
   */
  classes?: SliderBaseClasses
  /**
   * Значение
   */
  value?: number
  /**
   * Значение
   */
  defaultValue?: number
  /**
   * Сеттер инпута
   * @param value значение инпута
   */
  onChange?: (value: number | undefined) => void
  /**
   * Вариант инпута по дефолту credit (если использовать years то префикс поменяется на (лет, год, года в зависимости от склонения value)
   */
  suffix: TSuffixVariants
  /**
   * Label инпута
   */
  label: string
  /**
   * Шаг слайдера (если использовать вариант credit, то step будет проигнорирован)
   */

  externalHandlers?: ExternalHandlers

  type?: 'text' | 'tel' | 'password'
  /**
   * Суффикс для слайдер value (например) 74% / 400_000 рублей - / 400_000 это суффикс
   */
  additionalSuffix?: string
  /**
   * Значения только для чтения
   */
  readOnly?: boolean
  /**
   * Увеличение значения через слайдер в алгоритимеческой прогрессии
   */
  componentType: ComponentType
}

export type SliderMarksProps = SliderCommonProps & {
  componentType: 'marks'
  marks: number[]
  readOnly?: true
}

export type SliderStepProps = SliderCommonProps & {
  componentType: 'step'
  step: number
  /**
   * Минимальное значение инпута
   */
  min: number
  /**
   * Максимальное значение инпута
   */
  max: number
}

export type SliderAlgorithmicProps = SliderCommonProps & {
  componentType: 'algorithmic'
  /**
   * Минимальное значение инпута
   */
  min: number
  /**
   * Максимальное значение инпута
   */
  max: number
}

export type SliderAdditionalProps<T extends FieldValues> = SliderAlgorithmicProps & {
  enabled: boolean
  label: string
  readOnly?: boolean
  min: string
  name: Path<T>
  disabled?: boolean
}

export type SliderGatewayProps = SliderAlgorithmicProps | SliderStepProps | SliderMarksProps
