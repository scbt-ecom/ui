import { type TClassesUploader } from '../model/types'
import { Filename } from './Filename'
import { Icon } from '$/shared/ui/icon'
import { Loader } from '$/shared/ui/Loader'
import { cn } from '$/shared/utils'

interface IFileProps {
  filesStatus: {
    [key: string]: 'loading' | 'success' | 'error'
  }
  removeFile: (index: number) => void
  classes?: TClassesUploader
  file: File
  index: number
}

export const File = ({ filesStatus, removeFile, classes, file, index }: IFileProps) => {
  const fileSizeMb = file.size / 1024 / 1024

  return (
    <li key={file.name} className={cn('flex h-6 items-center justify-between p-1', classes?.fileWrapperContent)}>
      <div className={cn('flex items-center gap-2', classes?.fileContent)}>
        {filesStatus[file.name] === 'loading' && <Loader size='sm' />}
        {filesStatus[file.name] === 'success' && <Icon name='general/check' className='text-icon-positive-default' />}
        <Filename file={file} classes={classes} />
      </div>
      <div className={cn('flex items-center gap-2', classes?.fileButtonDeleteWrapper)}>
        <p className='desk-body-regular-m text-color-blue-grey-600'>{`${fileSizeMb.toFixed(1)} MB`}</p>
        <button className={cn('cursor-pointer', classes?.fileButtonDelete)} onClick={() => removeFile(index)}>
          <Icon name='general/close' className={cn('text-icon-blue-grey-600', classes?.fileDeleteIcon)} />
        </button>
      </div>
    </li>
  )
}
