import { useEffect, useRef, useState } from 'react'
import { Hint } from '../../../hint/Hint'
import { type TUploaderFileNameClasses } from '../model/types'
import { cn } from '$/shared/utils'

interface IFileNameProps {
  file: File
  classes?: TUploaderFileNameClasses
}

export const Filename = ({ file, classes }: IFileNameProps) => {
  const fileRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)

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
            <p ref={fileRef} className={cn('desk-body-regular-m max-w-[300px] truncate text-color-dark', classes?.fileText)}>
              {file.name}
            </p>
          }
        >
          {file.name}
        </Hint>
      ) : (
        <p ref={fileRef} className={cn('desk-body-regular-m text-color-dark', classes?.fileText)}>
          {file.name}
        </p>
      )}
    </>
  )
}
