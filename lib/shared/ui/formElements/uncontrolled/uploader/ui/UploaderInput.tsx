import { forwardRef, type Ref } from 'react'
import { type DropzoneRootProps } from 'react-dropzone'
import { type ExternalHandlers } from '../UploaderBase'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

export type UploaderInputClasses = {
  root?: string
  input?: string
  textContainer?: string
  icon?: string
  textContent?: string
  textContentSpan?: string
}

export interface UploaderInputProps {
  dropzoneState: DropzoneRootProps
  disabled?: boolean
  invalid?: boolean
  classes?: UploaderInputClasses
  name?: string
  externalHandlers?: ExternalHandlers
}

export const UploaderInput = forwardRef(
  (
    { dropzoneState, classes, disabled, invalid, name, externalHandlers, ...props }: UploaderInputProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const dropzoneProps = dropzoneState.getRootProps()
    return (
      <div
        className={cn(
          'flex h-[64px] w-[476px] rounded-sm',
          'active:border-1 active:border-solid active:border-primary-hover active:bg-color-primary-tr-pressed',
          'focus-visible:border-1 focus-visible:border-solid focus-visible:border-primary-hover focus-visible:bg-color-primary-tr-hover focus-visible:outline-none',
          'hover:border-1 hover:border-solid hover:border-primary-hover hover:bg-color-primary-tr-hover',
          'border-[1.5px] border-dashed border-blue-grey-700',
          classes?.root,
          { 'bg-color-primary-light-default opacity-50': disabled },
          { 'border-negative': invalid }
        )}
        ref={ref}
        {...dropzoneProps}
      >
        <div className={cn('flex h-full w-full items-center justify-center gap-2', classes?.textContainer)}>
          <Icon name='files/upload' className={cn('text-icon-primary-default', classes?.icon)} />
          <p className={cn('desk-body-regular-l select-none text-icon-primary-default', classes?.textContent)}>
            Выберите файл
            <span className={cn('text-icon-blue-grey-600', classes?.textContentSpan)}> или перетащите сюда</span>
          </p>
        </div>
        <input
          {...props}
          {...dropzoneState.getInputProps()}
          onClick={externalHandlers?.onClick}
          name={name}
          ref={dropzoneState.inputRef}
          disabled={disabled}
          className={cn(classes?.input)}
          data-test-id='uploader'
        />
      </div>
    )
  }
)
