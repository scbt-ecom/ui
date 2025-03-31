import { forwardRef, useEffect, useState } from 'react'
import { cn } from '$/shared/utils'

type IframeModalContentProps = {
  children: (body: HTMLElement) => React.ReactNode
  className?: string
} & Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'children'>

export const IframeModalContent = forwardRef<HTMLIFrameElement, IframeModalContentProps>(
  ({ children, className, ...props }, ref) => {
    const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null)

    useEffect(() => {
      const iframe = ref && 'current' in ref ? ref.current : null
      if (!iframe || !iframe.contentDocument) return

      if (iframe.contentDocument?.readyState === 'complete') {
        document.querySelectorAll('head > link[rel="stylesheet"], head > style').forEach((node) => {
          iframe.contentDocument?.head.appendChild(node.cloneNode(true))
        })

        setIframeBody(iframe.contentDocument.body)
      }
    }, [])

    return (
      <iframe id='modal-preview' {...props} ref={ref} className={cn('h-[60vh] w-[80vw]', className)}>
        {iframeBody && children(iframeBody)}
      </iframe>
    )
  }
)
