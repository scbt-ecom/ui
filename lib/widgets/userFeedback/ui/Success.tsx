import { Icon } from '$/shared/ui'

export const Success = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <Icon name='status/succesCircle' />
      <p className='desk-body-medium-l'>Спасибо за оценку!</p>
    </div>
  )
}
