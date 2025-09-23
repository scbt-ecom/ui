import { useState } from 'react'
import { type ControllerRenderProps, type FieldError, type FieldValues } from 'react-hook-form'
import { Icon } from '../../../../icon'
import { Modal } from '../../../../modal'
import { MessageView } from '../../../ui'
import { InputBase } from '../../../uncontrolled/input'
import { type EditorControlProps } from '../EditorControl'
import { Editor } from './Editor'
import { cn } from '$/shared/utils'

export interface EditorModalProps<T extends FieldValues>
  extends Pick<EditorControlProps<T>, 'label' | 'classes' | 'editable' | 'helperText'> {
  field: ControllerRenderProps<T>
  error?: FieldError
}

export const EditorModal = <T extends FieldValues>({
  label,
  classes,
  editable,
  helperText,
  field,
  error,
  ...props
}: EditorModalProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
