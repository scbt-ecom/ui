import { type HTMLAttributes } from 'react'
import { UploaderFile, type UploaderFileClasses } from '$/shared/ui/formElements/uncontrolled/uploader/ui/UploaderFile'
import { cn, TypeGuards } from '$/shared/utils'

export type UploaderFilesClasses = {
  root?: string
  file?: UploaderFileClasses
}

interface UploaderFilesProps extends HTMLAttributes<HTMLDivElement> {
  files?: File[]
  filesStatus: {
    [key: string]: 'loading' | 'success' | 'error'
  }
  removeFile: (index: number) => void
  classes?: UploaderFilesClasses
}

export const UploaderFiles = ({ files = [], filesStatus, classes, removeFile }: UploaderFilesProps) => {
  const filesEmpty = TypeGuards.isArrayEmpty(files)

  const { root, file: fileClasses } = classes || {}

  if (!filesEmpty) {
    return (
      <ul className={cn('flex max-w-[476px] flex-col gap-1 px-1', root)}>
        {files.map((file, index) => (
          <UploaderFile
            key={index}
            file={file}
            index={index}
            filesStatus={filesStatus}
            removeFile={removeFile}
            classes={fileClasses}
          />
        ))}
      </ul>
    )
  }

  return null
}
