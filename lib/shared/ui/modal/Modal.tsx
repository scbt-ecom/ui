'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { type IModalHeaderProps, ModalHeader, type TModalHeaderClasses } from './ui/ModalHeader'
import { cn } from '$/shared/utils'

type IModalClasses = TModalHeaderClasses & {
  overlay: string
  modal: string
  content: string
}

export interface IModalProps extends IModalHeaderProps {
  children: React.ReactElement
  modalIsOpen: boolean
  classes?: Partial<IModalClasses>
}

export const Modal = ({ title, children, modalIsOpen = false, closeModal, classes }: IModalProps) => {
  return (
    <>
      {createPortal(
        <div
          tabIndex={-1}
          onClick={closeModal}
          className={cn(
            'bg-color-overlay invisible fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center opacity-0 transition-all',
            { 'opacity-1 visible': modalIsOpen },
            classes?.overlay
          )}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeModal()
            }
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'w-full max-w-[600px] scale-0 rounded-md bg-color-white px-4 py-6 opacity-0 shadow-sm transition-all desktop:px-6 desktop:py-8',
              { 'scale-100 opacity-100': modalIsOpen },
              classes?.modal
            )}
          >
            <ModalHeader title={title} closeModal={closeModal} classes={classes} />
            <div className={cn('mt-4', classes?.content)}>{children}</div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
