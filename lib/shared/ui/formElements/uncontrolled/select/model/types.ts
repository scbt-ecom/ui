import type { DeepPartial } from '$/shared/types'
import { type FieldAttachment } from '$/shared/ui/formElements/ui'

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

export type SelectItemOption = {
  value: string
  label: string
  helperText?: string
  disabled?: boolean
  attachment?: {
    left?: DeepPartial<FieldAttachmentProps>
    right?: DeepPartial<FieldAttachmentProps>
  }
}
