'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { HookForm } from '../utils'
import { Controlled } from '$/shared/ui'
import { megabytesToBytes } from '$/shared/ui/formElements/uncontrolled/uploader'

const uploaderSchema = z.object({
  file: z.array(z.instanceof(File)).min(1)
})

type Schema = z.TypeOf<typeof uploaderSchema>
type UploaderControlProps = React.ComponentPropsWithoutRef<typeof Controlled.UploaderControl>

const meta = {
  title: 'CONTROLLED/UploaderControl',
  component: Controlled.UploaderControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    name: 'file'
  },
  render: (props) => (
    <>
      <HookForm<UploaderControlProps, Schema>
        {...props}
        defaultValues={{
          file: []
        }}
        schema={uploaderSchema}
        renderComponent={(componentProps: UploaderControlProps) => <Controlled.UploaderControl {...componentProps} />}
      />
    </>
  )
} satisfies Meta<typeof Controlled.UploaderControl>

export default meta

type Story = StoryObj<typeof Controlled.UploaderControl>

/**
 * \`UploaderControl\` компонент, контролируемый библиотекой \`react-hook-form\`\n
 *
 * | Props          | Description                         | Type                         | Required  |
 * | -------------- | ----------------------------------- | ---------------------------- | --------- |
 * | \`control\`    | Контрол объект для управления полем | \`Control\<TFieldValues\>\`  | \`true\`  |
 * | \`name\`       | Имя поля                            | \`string\`                   | \`true\`  |
 * | \`classes\`    | Дополнительные стили компонента     | \`UploaderControlClasses\`   | \`false\` |
 *
 * Остальные свойства наследуются от [UploaderBase](?path=/docs/base-uploaderbase--docs)\n
 */
export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const Invalid: Story = {
  args: {
    invalid: true
  }
}

export const CustomOptions: Story = {
  args: {
    dropzoneOptions: {
      maxSize: megabytesToBytes(4),
      /**
       * Максимальное кол-во файлов которые можно перенести
       */
      maxFiles: 5
    }
  }
}
