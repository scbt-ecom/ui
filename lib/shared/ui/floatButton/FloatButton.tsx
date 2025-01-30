import { Button, type ButtonProps } from '../button'
import { ResponsiveContainer } from '../responsiveContainer'
import { cn } from '$/shared/utils'

type FloatButtonClasses = {
  root?: string
  button?: string
}

export interface FloatButtonProps {
  isVisible: boolean
  classes?: FloatButtonClasses
  children: React.ReactElement
  buttonProps?: ButtonProps
}

export const FloatButton = ({ isVisible, classes, children, buttonProps }: FloatButtonProps) => {
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
