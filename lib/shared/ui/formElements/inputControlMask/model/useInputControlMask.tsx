import type { Noop } from 'react-hook-form'
import type { NumberFormatValues, SourceInfo } from 'react-number-format'
import type { TActions, TInputMode } from '../InputControlMask'

type TOnValueChange = {
  inputValue: NumberFormatValues
  source: SourceInfo
  onChange: (...event: any[]) => void
}

type TOnPaste = {
  event: React.ClipboardEvent<HTMLInputElement>
  onChange: (...event: any[]) => void
}

type TOnFocus = {
  event: React.FocusEvent<HTMLInputElement>
  setShowMask: React.Dispatch<React.SetStateAction<boolean>>
}

type TOnBlur = {
  event: React.FocusEvent<HTMLInputElement>
  setShowMask: React.Dispatch<React.SetStateAction<boolean>>
  hookFormBlur: Noop
}

export const useInputControlMask = (actions?: TActions, mode?: TInputMode) => {
  const onValueChange = ({ inputValue, onChange, source }: TOnValueChange) => {
    const { value } = inputValue || {}
    onChange(value ?? '')
    if (actions?.customInputChange) {
      actions?.customInputChange(inputValue, source)
    }
  }

  const onPaste = ({ event, onChange }: TOnPaste) => {
    switch (mode) {
      case 'phone':
        const pastedText = event.clipboardData.getData('text')
        const matches = ['+7', '+8', '7', '8']
        const startsWithMatch = matches.some((prefix) => pastedText.startsWith(prefix))
        if (pastedText && startsWithMatch) {
          const result = pastedText.startsWith('+') ? pastedText.slice(2) : pastedText.slice(1)
          event.preventDefault()
          onChange(result)
        }
        break

      default:
        break
    }
    if (actions?.customPaste) {
      actions?.customPaste(event)
    }
  }

  const onFocus = ({ event, setShowMask }: TOnFocus) => {
    setShowMask(true)
    if (actions?.customFocus) {
      actions?.customFocus(event)
    }
  }

  const onBlur = ({ event, setShowMask, hookFormBlur }: TOnBlur) => {
    hookFormBlur()
    setShowMask(false)
    if (actions?.customFocus) {
      actions?.customFocus(event)
    }
  }

  return { onValueChange, onPaste, onFocus, onBlur }
}
