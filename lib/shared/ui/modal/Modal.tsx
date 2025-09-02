'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { modalContentAnimation, modalOverlayAnimation } from './model/helpers'
import { IframeModalContent } from './ui/IframeModalContent'
import { ModalHeader, type TModalHeaderClasses } from './ui/ModalHeader'
import { cn } from '$/shared/utils'

type ModalClasses = {
  overlay?: string
  modal?: string
  content?: string
  modalHeader?: TModalHeaderClasses
}

export interface ModalProps {
  children: React.ReactElement
  isModalOpen: boolean
  classes?: ModalClasses
  isPortal?: boolean
  portalContainer?: HTMLElement
  title?: string | React.ReactElement
  closeModal: () => void
  iframe?: boolean
}

export const Modal = ({
  title,
  children,
  isModalOpen,
  isPortal = true,
  portalContainer = globalThis?.document?.body,
  closeModal,
  classes,
  iframe
}: ModalProps) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isModalOpen])
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const modalBody = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          ref={(node) => node?.focus()}
          tabIndex={-1}
          onMouseDown={closeModal}
          className={cn(
            'fixed inset-0 flex h-screen w-screen items-center justify-center bg-color-overlay',
            { 'z-1000': !isPortal },
            classes?.overlay
          )}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeModal()
            }
          }}
          data-test-id='modal-overlay'
          {...modalOverlayAnimation}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            className={cn(
              'w-full max-w-[600px] rounded-md bg-color-white px-4 py-6 shadow-sm desktop:px-6 desktop:py-8',
              classes?.modal
            )}
            data-test-id='modal'
            {...modalContentAnimation}
          >
            <ModalHeader title={title} closeModal={closeModal} classes={classes?.modalHeader} />
            {iframe ? (
              <IframeModalContent ref={iframeRef} className={cn('mt-4', classes?.content)}>
                {(iframeBody) => createPortal(children, iframeBody)}
              </IframeModalContent>
            ) : (
              <div className={cn('mt-4', classes?.content)}>{children}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
  return <>{isPortal ? createPortal(modalBody, portalContainer) : modalBody}</>
}
