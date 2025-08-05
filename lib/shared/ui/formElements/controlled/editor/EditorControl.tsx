import { type ReactElement, useState } from 'react'
import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { Editor } from './ui/Editor'
import { InputBase, Modal } from '$/shared/ui'
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
      <div className={classes?.root}>
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
          onClick={() => editable && setIsModalOpen(true)}
        />

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
      </div>
    )
  }
  return (
    <Editor {...field} editable={editable} error={error} helperText={helperText} label={label} classes={classes} {...props} />
  )
}
