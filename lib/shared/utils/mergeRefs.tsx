import type React from 'react'

export const mergeRefs = <T,>(...inputRefs: (React.Ref<T> | undefined)[]): React.Ref<T> | React.RefCallback<T> => {
  const filteredInputRefs = inputRefs.filter(Boolean)

  if (filteredInputRefs.length <= 1) {
    const firstRef = filteredInputRefs[0]

    return firstRef || null
  }

  /**
   * Бежим по всем рефам, которые нам передали и присваиваем каждому instance ноды.
   * @example
   * <div ref={(instance) => mergeRefs(ref1, ref2, forwardedRef)(instance)}></div>
   * //         ^ инстанс ноды которая будет присвоена каждому рефу
   * <div ref={mergeRefs(ref1, ref2, forwardedRef)}></div>
   * //        ^ аналогичная запись
   */
  return function mergedRefs(instance) {
    filteredInputRefs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(instance)
      } else if (ref) {
        ;(ref as React.MutableRefObject<T | null>).current = instance
      }
    })
  }
}
