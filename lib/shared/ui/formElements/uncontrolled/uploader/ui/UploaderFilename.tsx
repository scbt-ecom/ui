import { useRef } from 'react'
import { useOverflow } from '$/shared/hooks/useOverflow'
import { Hint } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type UploaderFileNameClasses = {
  fileText?: string
}

interface UploaderFilenameProps {
  file: File
  classes?: UploaderFileNameClasses
}

export const UploaderFilename = ({ file, classes }: UploaderFilenameProps) => {
  const fileRef = useRef<HTMLParagraphElement>(null)
  const isOverflow = useOverflow(fileRef)

  const { fileText } = classes || {}

  return (
    <div className='w-[300px]'>
      {isOverflow ? (
        <Hint triggerElement={<p className={cn('desk-body-regular-m text-color-dark truncate', fileText)}>{file.name}</p>}>
          {file.name}
        </Hint>
      ) : (
        <p ref={fileRef} className={cn('desk-body-regular-m text-color-dark text-nowrap', fileText)}>
          {file.name}
        </p>
      )}
    </div>
  )
}
