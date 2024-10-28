import { type Ref, useCallback } from 'react'
import { type RefCallBack } from 'react-hook-form'

type TCombineRef<HTML> = (element: HTML) => void

export const useCombineRef = <HTML extends HTMLElement>(...refs: Array<Ref<HTML> | RefCallBack>) => {
  const combinedRef: TCombineRef<HTML> = useCallback(
    (element) => {
      refs.forEach((ref) => {
        if (!ref) return
        if (typeof ref === 'function') {
          ref(element)
        } else {
          // @ts-expect-error Mutable ref?
          ref.current = element
        }
      })
    },
    [refs]
  )

  return combinedRef
}
