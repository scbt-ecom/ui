import { forwardRef, type Ref } from 'react'
import { type DropzoneRootProps } from 'react-dropzone'
import { type FieldError, type FieldValues, type Path } from 'react-hook-form'
import { type TClassesUploader } from '../model/types'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

export interface IFileInputProps<T extends FieldValues> {
  dropzoneState: DropzoneRootProps
  disabled?: boolean
  error?: FieldError
  classes?: Partial<TClassesUploader>
  name?: Path<T>
}

export const Input = forwardRef(function Input<T extends FieldValues>(
  { dropzoneState, classes, disabled, error, name }: IFileInputProps<T>,
  ref: Ref<HTMLDivElement>
) {
  const dropzoneProps = dropzoneState.getRootProps()
  return (
    <div
      className={cn(
        'flex h-[64px] w-[476px] rounded-sm bg-[length:100%_100%] bg-no-repeat hover:border hover:border-primary-hover hover:bg-color-primary-tr-hover focus-visible:border focus-visible:border-primary-hover focus-visible:bg-color-primary-tr-hover focus-visible:outline-none active:border active:border-primary-hover active:bg-color-primary-tr-pressed [&:not(:hover)(:focus-visible)(:active)(:disabled)]:bg-[url("../../static/files/border.svg")]',
        classes?.borderContent,
        { 'bg-color-primary-light-default opacity-50': disabled },
        { '[&:not(:hover)(:focus-visible)(:active)(:disabled)]:bg-[url("../../static/files/borderError.svg")]': error }
      )}
      ref={ref}
      {...dropzoneProps}
    >
      <div className={cn('flex h-full w-full items-center justify-center gap-2', classes?.wrapperTextContent)}>
        <Icon name='files/upload' className={cn('text-icon-primary-default', classes?.uploaderIcon)} />
        <p className={cn('desk-body-regular-l select-none text-icon-primary-default', classes?.wrapperTextContent)}>
          Выберите файл
          <span className={cn('text-icon-blue-grey-600', classes?.selectFileTextSpan)}> или перетащите сюда</span>
        </p>
      </div>
      <input
        name={name}
        ref={dropzoneState.inputRef}
        disabled={disabled}
        {...dropzoneState.getInputProps()}
        className={cn(classes?.uploaderInput)}
      />
    </div>
  )
})
