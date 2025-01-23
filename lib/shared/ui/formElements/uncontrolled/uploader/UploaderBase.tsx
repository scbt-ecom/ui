import { forwardRef, type InputHTMLAttributes } from 'react'
import { type DropzoneOptions } from 'react-dropzone'
import { defaultDropzoneOptions } from './model'
import { useUploader } from './model/hooks/useUploader'
import { UploaderFiles, type UploaderFilesClasses, UploaderInput, type UploaderInputClasses } from './ui'
import { cn } from '$/shared/utils'

type UploaderBaseClasses = {
  root?: string
  input?: UploaderInputClasses
  files?: UploaderFilesClasses
}

export interface UploaderBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'placeholder' | 'value' | 'onChange'> {
  /**
   * Опции uploader-а, в нем можно валидировать файлы, указывать максимум и минимум для файлов
   * Подробнее можно узнать в типе DropzoneOptions
   */
  dropzoneOptions?: DropzoneOptions
  /**
   * Объект классов которые можно переопределить
   */
  classes?: UploaderBaseClasses
  /**
   * Доп текст под инпутом
   */
  helperText?: string
  /**
   * Сеттер значение
   * @param file - файлы
   */
  onChange?: (file: File[]) => void
  /**
   * Валидное ли значение
   */
  invalid?: boolean
  /**
   * Значение
   */
  value?: File[]
}

export const UploaderBase = forwardRef<HTMLInputElement, UploaderBaseProps>(
  ({ classes, dropzoneOptions = defaultDropzoneOptions, name, value, disabled, invalid, onChange }: UploaderBaseProps, ref) => {
    const { filesStatus, removeFile, dropzoneState } = useUploader({
      controlledFiles: value,
      dropzoneOptions,
      onChange
    })

    const { root, input, files } = classes || {}

    return (
      <>
        <div className={cn('relative mb-3 w-[476px]', root)}>
          <UploaderInput
            ref={ref}
            name={name}
            classes={input}
            disabled={disabled}
            invalid={invalid}
            dropzoneState={dropzoneState}
          />
        </div>
        <UploaderFiles files={value} removeFile={removeFile} classes={files} filesStatus={filesStatus} />
      </>
    )
  }
)
