import { Icon } from '$/shared/ui'

export interface SuccessProps {
  title?: string
}

const defaultTitle = 'Спасибо за оценку!'

export const Success = ({ title = defaultTitle }: SuccessProps) => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <Icon name='status/succesCircle' />
      <p className='desk-body-medium-l'>{title}</p>
    </div>
  )
}
