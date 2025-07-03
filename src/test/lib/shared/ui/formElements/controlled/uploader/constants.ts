import type React from 'react'
import { z } from 'zod'
import { type UploaderControl } from '$/shared/ui'

type UploaderProps = React.ComponentPropsWithoutRef<typeof UploaderControl> & {
  'data-test-id': string
}

export const baseSchema = z.object({
  field: z.array(z.instanceof(File)).min(1)
})

export const uploaderDefaultProps: Omit<UploaderProps, 'control'> = {
  'data-test-id': 'uploader',
  name: 'field'
}
