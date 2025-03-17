import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '$/shared/utils'

type IframeModalContentProps = React.IframeHTMLAttributes<HTMLIFrameElement>

export const IframeModalContent = ({ children, className, ...props }: IframeModalContentProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!iframeRef.current) return

    const abortController = new AbortController()

    const iframe = iframeRef.current

    iframe.addEventListener(
      'load',
      () => {
        document.querySelectorAll('head > link[rel="stylesheet"], head > style').forEach((node) => {
          iframe.contentDocument?.head.appendChild(node.cloneNode(true))
        })

        setIframeLoaded(true)
      },
      { signal: abortController.signal }
    )

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <iframe {...props} ref={iframeRef} className={cn('w-full', className)}>
      {iframeLoaded && iframeRef.current?.contentDocument && createPortal(children, iframeRef.current.contentDocument.body)}
    </iframe>
  )
}
