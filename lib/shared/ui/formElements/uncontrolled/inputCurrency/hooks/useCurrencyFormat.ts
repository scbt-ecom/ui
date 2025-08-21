import { useEffect, useRef } from 'react'

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'decimal',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2
})

export const useCurrencyFormat = (value: string) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const target = ref.current
    const abortController = new AbortController()

    const onFocus = () => {
      target.value = value
    }

    const onBlur = () => {
      const { value } = target
      const numeric = parseFloat(value.replace(/[^\d.-]/g, ''))

      if (!isNaN(numeric)) {
        target.value = formatter.format(numeric)
      }
    }

    target.addEventListener('focus', onFocus, { signal: abortController.signal })
    target.addEventListener('blur', onBlur, { signal: abortController.signal })

    return () => {
      abortController.abort()
    }
  }, [value])

  return ref
}
