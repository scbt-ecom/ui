import { type DeepPartial } from '$/shared/types'
import { type FieldAttachment } from '$/shared/ui/formElements/ui'

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

export type SelectItemOption = {
  value: string
  label: string
  disabled?: boolean
  helperText?: string
  attachment?: {
    left?: DeepPartial<FieldAttachmentProps>
    right?: DeepPartial<FieldAttachmentProps>
  }
}
