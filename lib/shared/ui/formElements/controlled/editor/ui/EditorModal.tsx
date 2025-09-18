import { useState } from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { cn } from '../../../../../utils'
import { Icon } from '../../../../icon'
import { Modal } from '../../../../modal'
import { MessageView } from '../../../ui'
import { InputBase } from '../../../uncontrolled/input'
import { type EditorControlProps } from '../EditorControl'
import { Editor } from './Editor'

export interface EditorModalProps<T extends FieldValues> extends EditorControlProps<T> {}

export const EditorModal = <T extends FieldValues>({
  label,
  classes,
  editable,
  helperText,
  control,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  name,
  ...props
}: EditorModalProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
