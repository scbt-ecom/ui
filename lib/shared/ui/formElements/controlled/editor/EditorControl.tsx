import { type ReactElement, useState } from 'react'
import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { MessageView } from '../../ui'
import { Editor } from './ui/Editor'
import { Icon, InputBase, Modal } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type EditorControlClasses = {
  root?: string
  editor?: string
  wrapper?: string
  message?: string
  label?: string
}

export type EditorControlProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
  editable?: boolean
  classes?: EditorControlClasses
  helperText?: string | ReactElement
  label: string
  limit?: number
  small?: boolean
}

export const EditorControl = <T extends FieldValues>({
  control,
  label,
  helperText,
  editable = true,
  classes,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  name,
  small,
  ...props
}: EditorControlProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
    name
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  if (small) {
    return (
      <>
        <div className='flex flex-1 flex-col'>
          <InputBase
            readOnly
            label={label}
            {...field}
            renderValues={() => (
              <div
                className={cn('peer max-h-[50px] w-full overflow-y-hidden p-4 pb-[9px] pt-[27px]')}
                dangerouslySetInnerHTML={{ __html: field.value }}
              />
            )}
            attachmentProps={{
              icon: <Icon name='general/edit' className='size-5 text-color-tetriary' />
            }}
            onClick={() => editable && setIsModalOpen(true)}
          />
          <MessageView
            className={classes?.message}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={!editable}
          />
        </div>
        <Modal
          classes={{
            modal: 'max-w-[700px]'
          }}
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        >
          <Editor
            {...field}
            editable={editable}
            error={error}
            helperText={helperText}
            classes={{
              editor: 'min-h-[350px]',
              ...classes
            }}
            {...props}
          />
        </Modal>
      </>
    )
  }
  return (
    <Editor {...field} editable={editable} error={error} helperText={helperText} label={label} classes={classes} {...props} />
  )
}
