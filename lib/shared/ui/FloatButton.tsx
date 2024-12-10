import { Button, type IButtonProps, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

type TFloatButtonClasses = {
  root?: string
  button?: string
}

export interface IFloatButtonProps {
  isVisible: boolean
  classes?: TFloatButtonClasses
  children: React.ReactElement
  buttonProps?: IButtonProps
}

export const FloatButton = ({ isVisible, classes, children, buttonProps }: IFloatButtonProps) => {
  return (
    <ResponsiveContainer
      className={cn(
        'fixed bottom-0 left-1/2 z-[60] w-full max-w-[604px] -translate-x-1/2 translate-y-0 rounded-t-lg bg-color-white px-6 py-4 shadow-[0px_-6px_8px_0px_#2929290A] transition-transform duration-1000 desktop:hidden',
        { 'translate-y-[100%]': !isVisible },
        classes?.root
      )}
    >
      {children}
      <Button size='lg' className={cn('m-auto w-full', classes?.button)} {...buttonProps}>
        Оформить заявку
      </Button>
    </ResponsiveContainer>
  )
}
