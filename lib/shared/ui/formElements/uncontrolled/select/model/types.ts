import type { DeepPartial } from '$/shared/types'
import { type AllowedIcons } from '$/shared/ui'
import { type FieldAttachment } from '$/shared/ui/formElements/ui'

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

export type SelectItemOption = {
  value: string | null
  label: string
  helperText?: string
  disabled?: boolean
  attachment?: {
    left?: AllowedIcons
    right?: DeepPartial<FieldAttachmentProps>
  }
}
