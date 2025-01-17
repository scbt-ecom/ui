import { useEffect, useRef, useState } from 'react'
import { Hint } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type UploaderFileNameClasses = {
  text?: string
}

interface UploaderFilenameProps {
  file: File
  classes?: UploaderFileNameClasses
}

export const UploaderFilename = ({ file, classes }: UploaderFilenameProps) => {
  const fileRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)

  const { text } = classes || {}

  useEffect(() => {
    if (fileRef.current) {
      setIsOverflow(fileRef.current.clientWidth > 300)
    }
  }, [file])

  return (
    <>
      {isOverflow ? (
        <Hint
          triggerElement={
            <p ref={fileRef} className={cn('desk-body-regular-m max-w-[300px] truncate text-color-dark', text)}>
              {file.name}
            </p>
          }
        >
          {file.name}
        </Hint>
      ) : (
        <p ref={fileRef} className={cn('desk-body-regular-m text-color-dark', text)}>
          {file.name}
        </p>
      )}
    </>
  )
}
