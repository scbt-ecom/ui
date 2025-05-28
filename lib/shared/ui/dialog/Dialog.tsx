import { useRef } from 'react'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { useClickOutside } from '$/shared/hooks'
import { Heading, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  title?: string
  portal?: HTMLElement
}

export const Dialog = ({ className, children, title, portal = globalThis?.document?.body, ...props }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const onClose = () => {
    if (!dialogRef.current) return

    dialogRef.current.close()
  }

  useClickOutside(contentRef, onClose)

  const dialog = (
    <dialog
      ref={dialogRef}
      {...props}
      className='border-none'
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }}
    >
      <div className='fixed inset-0 flex items-center justify-center bg-color-overlay'>
        <div
          ref={contentRef}
          className={cn(
            'w-full bg-color-white px-4 py-6 shadow-sm desktop:max-w-[600px] desktop:rounded-md desktop:px-6 desktop:py-8',
            'rounded-tl-md rounded-tr-md mobile:absolute mobile:bottom-0',
            className
          )}
        >
          <div className='flex items-start justify-between gap-4'>
            {title && (
              <Heading as='h3' className='flex-1 text-color-dark'>
                {title}
              </Heading>
            )}
            <Icon onClick={onClose} name='general/close' className='ml-auto size-6 cursor-pointer text-icon-dark-hover' />
          </div>
          <div className='mt-4'>{children}</div>
        </div>
      </div>
    </dialog>
  )

  return portal ? createPortal(dialog, portal) : dialog
}
