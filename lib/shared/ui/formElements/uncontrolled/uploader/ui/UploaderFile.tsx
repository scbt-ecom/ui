import { UploaderFilename, type UploaderFileNameClasses } from './UploaderFilename'
import { Icon, Loader } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type UploaderFileClasses = UploaderFileNameClasses & {
  root?: string
  content?: string
  deleteIcon?: string
  buttonRoot?: string
  buttonDelete?: string
}

interface UploaderFileProps {
  filesStatus: {
    [key: string]: 'loading' | 'success' | 'error'
  }
  removeFile: (index: number) => void
  classes?: UploaderFileClasses
  file: File
  index: number
}

export const UploaderFile = ({ filesStatus, removeFile, classes, file, index }: UploaderFileProps) => {
  const fileSizeMb = file.size / 1024 / 1024

  const { root, deleteIcon, buttonDelete, content, buttonRoot, ...restClasses } = classes || {}

  return (
    <li key={file.name} className={cn('flex h-6 items-center justify-between p-1', root)}>
      <div className={cn('flex items-center gap-2', content)}>
        {filesStatus[file.name] === 'loading' && <Loader size='sm' />}
        {filesStatus[file.name] === 'success' && <Icon name='general/check' className='text-icon-positive-default' />}
        <UploaderFilename file={file} classes={restClasses} />
      </div>
      <div className={cn('flex items-center gap-2', buttonRoot)}>
        <p className='desk-body-regular-m text-color-blue-grey-600'>{`${fileSizeMb.toFixed(1)} MB`}</p>
        <button className={cn('cursor-pointer', buttonDelete)} onClick={() => removeFile(index)}>
          <Icon name='general/close' className={cn('text-icon-blue-grey-600', deleteIcon)} />
        </button>
      </div>
    </li>
  )
}
