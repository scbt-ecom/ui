'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { modalContentAnimation, modalOverlayAnimation } from './model/helpers'
import { type IModalHeaderProps, ModalHeader, type TModalHeaderClasses } from './ui/ModalHeader'
import { cn } from '$/shared/utils'

type IModalClasses = TModalHeaderClasses & {
  overlay: string
  modal: string
  content: string
}

export interface IModalProps extends IModalHeaderProps {
  children: React.ReactElement
  isModalOpen: boolean
  classes?: Partial<IModalClasses>
}

export const Modal = ({ title, children, isModalOpen, closeModal, classes }: IModalProps) => {
  return (
    <>
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              tabIndex={-1}
              onClick={closeModal}
              className={cn(
                'fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-color-overlay',
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
                <ModalHeader title={title} closeModal={closeModal} classes={classes} />
                <div className={cn('mt-4', classes?.content)}>{children}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
