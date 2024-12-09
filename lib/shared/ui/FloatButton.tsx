import { Button, ResponsiveContainer } from '$/shared/ui/index.ts'
import { cn } from '$/shared/utils'

type TFloatButtonClasses = {
  root?: string
  button?: string
}

export interface IFloatButtonProps {
  isVisible: boolean
  classes?: TFloatButtonClasses
}

export const FloatButton = ({ isVisible, classes }: IFloatButtonProps) => {
  return (
    <ResponsiveContainer
      className={cn(
        'fixed bottom-0 left-1/2 z-[60] w-full -translate-x-1/2 bg-color-white py-4 transition-transform desktop:hidden',
        { 'bottom-[-100%]': !isVisible },
        classes?.root
      )}
    >
      <Button size='lg' className={cn('m-auto w-full max-w-[328px]', classes?.button)}>
        Оформить заявку
      </Button>
    </ResponsiveContainer>
  )
}
