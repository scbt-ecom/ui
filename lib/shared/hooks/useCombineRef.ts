import { type RefObject, useCallback } from 'react'

type TCombineRef<Target> = (element: Target) => void

export const useCombineRef = <Target>(...refs: RefObject<HTMLElement>[]) => {
  const combinedRef: TCombineRef<Target> = useCallback(
    (element) => {
      refs.forEach((ref) => {
        if (!ref) return
        if (typeof ref === 'function') {
          // @ts-expect-error ts(2322)
          ref(element)
        } else {
          // @ts-expect-error ts(2322)
          // eslint-disable-next-line no-param-reassign
          ref.current = element
        }
      })
    },
    [refs]
  )

  return combinedRef
}
