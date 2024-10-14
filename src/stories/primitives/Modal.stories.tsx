import toast from 'react-hot-toast'
import { type Meta, type StoryObj } from '@storybook/react'
import { z } from 'zod'
import { useBoolean, useControlledForm } from '$/shared/hooks'
import { Button, CheckboxControl, InputControl, Modal } from '$/shared/ui'
import { VALIDATION_MESSAGES } from '$/shared/validation'

const meta = {
  title: 'INTERACTIVE/Modal',
  component: Modal,
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof Modal>

type TModalFormFields = z.infer<typeof modalSchema>
type TCheckboxGroup = {
  label: string
  name: 'rate' | 'investment' | 'lending'
}

const modalSchema = z.object({
  email: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .email({ message: 'Введите валидную почту' })
    .min(1, 'Электронная почта обязательна'),
  rate: z.boolean(),
  investment: z.boolean(),
  lending: z.boolean()
})

const checkboxGroup: TCheckboxGroup[] = [
  { label: 'Выгодная ставка', name: 'rate' },
  { label: 'Инвестиции', name: 'investment' },
  { label: 'Кредитование', name: 'lending' }
]

const toastMessage = (values: TModalFormFields) => (
  <div className='flex flex-col gap-2'>
    <p className='desk-body-medium-l'>Заявка успешно отправлена!</p>
    <pre>{JSON.stringify(values, null, 2)}</pre>
  </div>
)

export const Base: Story = {
  render: () => {
    const [isModalOpen, setterModal] = useBoolean(false)
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <Button onClick={() => setterModal(true)}>Получить кредит</Button>
        <Modal title='Подписка на рассылку' modalIsOpen={isModalOpen} closeModal={() => setterModal(false)}>
          <p>Укажите ваш адрес электронной почты, чтобы узнавать обо всех новостях и изменения вовремя</p>
        </Modal>
      </div>
    )
  }
}

export const ModalWithForm: Story = {
  render: () => {
    const { control, handleSubmit, reset } = useControlledForm({
      schema: modalSchema,
      defaultValues: {
        email: '',
        rate: false,
        investment: false,
        lending: false
      }
    })
    const [isModalOpen, setterModal] = useBoolean(false)

    const onSubmit = (values: TModalFormFields) => {
      toast.success(toastMessage(values), { duration: 5000, position: 'top-center' })
      reset()
    }

    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <Button onClick={() => setterModal(true)}>Получить кредит</Button>
        <Modal title='Подписка на рассылку' modalIsOpen={isModalOpen} closeModal={() => setterModal(false)}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Укажите ваш адрес электронной почты, чтобы узнавать обо всех новостях и изменения вовремя</p>
            <div className='my-4 flex flex-col gap-2'>
              <InputControl name='email' label='Электронная почта' control={control} />
              <p>Присылать новости на тему:</p>
              <div className='flex flex-col gap-2'>
                {checkboxGroup?.map(({ label, name }) => (
                  <CheckboxControl key={name} control={control} name={name} label={label} />
                ))}
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Button type='submit'>Подписаться</Button>
              <Button onClick={() => setterModal(false)} intent='secondary'>
                Отменить
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    )
  }
}
