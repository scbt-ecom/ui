import toast, { type Toast } from 'react-hot-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import type { NotificationProps } from '../Notification'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

const toastContainerConfig = cva(
  'flex justify-between items-center gap-4 shadow-sm p-4 rounded-sm max-w-[328px] desktop:max-w-[576px]',
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
export type ICustomToastProps = NotificationProps & TContainerConfig & Toast

export const CustomToast = ({
  intent,
  text,
  customIcon,
  closure = true,
  link,
  linkText = 'Подробнее',
  id
}: ICustomToastProps) => {
  return (
    <div className={cn(toastContainerConfig({ intent }))}>
      <div className='flex items-center gap-2'>
        {customIcon && <span className='size-6'>{customIcon}</span>}
        <div className='desk-body-regular-m text-color-white'>{text}</div>
      </div>

      {(link || closure) && (
        <div className='flex items-center gap-6'>
          {link && (
            <a href={link} className='mob-body-medium-m cursor-pointer underline' target='_blank' rel='noreferrer'>
              {linkText}
            </a>
          )}

          {closure && (
            <Icon onClick={() => toast.dismiss(id)} name='general/close' className='size-5 cursor-pointer text-icon-white' />
          )}
        </div>
      )}
    </div>
  )
}
