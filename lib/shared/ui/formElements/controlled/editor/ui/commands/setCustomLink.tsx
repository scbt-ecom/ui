import type { Editor } from '@tiptap/react'
import { z } from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Button, Controlled, Icon, Popover } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface ISetCustomLinkProps {
  editor: Editor
}

const linkSchema = z.object({
  href: z.string().url(),
  underline: z.boolean().optional().default(true)
})

type TLinkSchema = z.infer<typeof linkSchema>

export const SetCustomLink = ({ editor }: ISetCustomLinkProps) => {
  const { control, handleSubmit } = useControlledForm({
    schema: linkSchema,
    defaultValues: {
      href: '',
      underline: true
    }
  })

  const onSubmit = (values: TLinkSchema) => {
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({
        href: values?.href,
        rel: 'noopener noreferrer',
        target: '_blank',
        class: cn('text-color-primary-default', { 'underline underline-offset-4': values?.underline })
      })
      .run()
  }

  return (
    <div>
      <Popover
        classes={{ content: 'w-[360px] max-w-full' }}
        triggerElement={
          <span
            title='Добавить заголовок'
            className={cn(
              'flex size-7 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white',
              { '!bg-color-primary-hover !text-color-white': editor.isActive('link') }
            )}
          >
            <Icon name='editor/link' className='size-4' />
          </span>
        }
      >
        <div className='flex flex-1'>
          <form
            onSubmit={(event) => {
              event.stopPropagation()
              event.nativeEvent.stopPropagation()
              handleSubmit(onSubmit)(event)
            }}
            className='flex flex-1 flex-col gap-4'
          >
            <Controlled.InputControl control={control} name='href' label='Введите ссылку' />
            <Controlled.SwitchControl control={control} name='underline'>
              С подчеркиванием
            </Controlled.SwitchControl>
            <Button type='submit' size='sm'>
              Сохранить
            </Button>
          </form>
        </div>
      </Popover>
    </div>
  )
}
