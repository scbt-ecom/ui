'use client'

import { useCallback } from 'react'
import type { ButtonHandlerOptions } from './types'
import { isClient, scrollToElement } from '$/shared/utils'

export const useButtonHandler = (handlerOptions: ButtonHandlerOptions) => {
  const handleClick = useCallback(() => {
    switch (handlerOptions.handler) {
      case 'navigate': {
        const { url, target, rel } = handlerOptions
        if (isClient) {
          window?.open(url, target, rel)
        }

        break
      }
      case 'scroll': {
        const { widgetId } = handlerOptions ?? ''
        scrollToElement({ widgetId })
        break
      }

      case 'dialog': {
        if (!isClient) return

        const { dialogId } = handlerOptions ?? {}

        const dialog = document.getElementById(dialogId) as HTMLDialogElement | null

        if (!dialog) {
          console.error('Такого элемента в DOM не существует', dialogId)
          break
        }

        dialog.show()
      }
    }
  }, [handlerOptions])

  return handleClick
}
