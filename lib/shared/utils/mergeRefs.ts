import type React from 'react'

export const mergeRefs = <T>(...inputRefs: (React.Ref<T> | undefined)[]): React.Ref<T> | React.RefCallback<T> => {
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
