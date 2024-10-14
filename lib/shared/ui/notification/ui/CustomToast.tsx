import toast, { type Toast } from 'react-hot-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import type { INotificationProps } from '../Notification'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

const toastContainerConfig = cva(
  'flex justify-between items-start gap-4 shadow-sm p-4 rounded-sm max-w-[328px] desktop:max-w-[576px]',
  {
    variants: {
      intent: {
        info: 'bg-color-footer text-color-white',
        error: 'bg-color-secondary-default text-color-white'
      }
    },
    defaultVariants: {
      intent: 'info'
    }
  }
)

type TContainerConfig = VariantProps<typeof toastContainerConfig>
export type ICustomToastProps = INotificationProps & TContainerConfig & Toast

export const CustomToast = ({ intent, text, customIcon, closure = true, content, id }: ICustomToastProps) => {
  return (
    <div className={cn(toastContainerConfig({ intent }))}>
      <div className='flex items-start gap-2'>
        <span className='size-6'>{customIcon}</span>
        <div className='desk-body-regular-m text-color-white'>{text}</div>
      </div>

      <div className='flex items-center gap-6'>
        {content}

        {closure && (
          <Icon onClick={() => toast.dismiss(id)} name='general/close' className='size-5 cursor-pointer text-icon-white' />
        )}
      </div>
    </div>
  )
}
