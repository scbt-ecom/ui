import { useEffect } from 'react'

interface UseKeyboardNavigationProps<Ref extends HTMLElement> {
  ref: React.RefObject<Ref>
  openChangeHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export const useKeyboardNavigation = <Ref extends HTMLElement>({ ref, openChangeHandler }: UseKeyboardNavigationProps<Ref>) => {
  useEffect(() => {
    if (!ref.current) return

    const target = ref.current

    const abortController = new AbortController()

    target.addEventListener(
      'keydown',
      (event) => {
        switch (event.key) {
          case ' ':
            openChangeHandler(true)
            break
          case 'Escape':
            openChangeHandler(false)
        }
      },
      { signal: abortController.signal }
    )

    return () => {
      abortController.abort()
    }
  }, [])
}
