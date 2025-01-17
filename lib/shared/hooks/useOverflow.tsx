import { useCallback, useEffect, useState } from 'react'

export const useOverflow = (ref: React.RefObject<HTMLElement>) => {
  const [isOverflow, setIsOverflow] = useState(false)

  const trigger = useCallback(() => {
    const { current } = ref
    const hasOverflow = !!current && current.scrollWidth > current.clientWidth
    setIsOverflow(hasOverflow)
  }, [ref])

  useEffect(() => {
    trigger()
    window.addEventListener('resize', trigger)
    return () => {
      window.removeEventListener('resize', trigger)
    }
  }, [trigger])

  return isOverflow
}
