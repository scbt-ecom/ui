'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { modalContentAnimation, modalOverlayAnimation } from './model/helpers'
import { ModalHeader, type TModalHeaderClasses } from './ui/ModalHeader'
import { cn } from '$/shared/utils'

type IModalClasses = {
  overlay: string
  modal: string
  content: string
  modalHeader?: TModalHeaderClasses
}

export interface IModalProps {
  children: React.ReactElement
  isModalOpen: boolean
  classes?: IModalClasses
  isPortal?: boolean
  portalContainer?: HTMLElement
  title?: string | React.ReactElement
  closeModal: () => void
}

export const Modal = ({
  title,
  children,
  isModalOpen,
  isPortal = true,
  portalContainer = globalThis?.document?.body,
  closeModal,
  classes
}: IModalProps) => {
  const modalBody = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          tabIndex={-1}
          onClick={closeModal}
          className={cn(
            'z-1000 fixed inset-0 flex h-screen w-screen items-center justify-center bg-color-overlay',
            classes?.overlay
          )}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeModal()
            }
          }}
          {...modalOverlayAnimation}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'w-full max-w-[600px] rounded-md bg-color-white px-4 py-6 shadow-sm desktop:px-6 desktop:py-8',
              classes?.modal
            )}
            {...modalContentAnimation}
          >
            <ModalHeader title={title} closeModal={closeModal} classes={classes?.modalHeader} />
            <div className={cn('mt-4', classes?.content)}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
  return <>{isPortal ? createPortal(modalBody, portalContainer) : modalBody}</>
}
