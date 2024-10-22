import { type HTMLAttributes } from 'react'
import { type TClassesUploader } from '../model/types'
import { File } from './File'
import { cn } from '$/shared/utils'

interface IUploaderContentProps extends HTMLAttributes<HTMLDivElement> {
  controlledFiles: File[]
  filesStatus: {
    [key: string]: 'loading' | 'success' | 'error'
  }
  removeFile: (index: number) => void
  classes?: TClassesUploader
}

export const Files = ({ controlledFiles, filesStatus, classes, removeFile }: IUploaderContentProps) => {
  const isFilesExist = controlledFiles && controlledFiles.length > 0

  if (isFilesExist) {
    return (
      <ul className={cn('flex max-w-[476px] flex-col gap-1 px-1', classes?.filesWrapperContent)}>
        {controlledFiles.map((file, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <File key={index} file={file} index={index} filesStatus={filesStatus} removeFile={removeFile} classes={classes} />
        ))}
      </ul>
    )
  }

  return null
}
