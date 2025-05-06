import { cn } from '../../shared/utils'
import { type ButtonHandlerOptions, useButtonHandler } from './model'
import { Button, type ButtonProps } from '$/shared/ui'

export interface ButtonWithHandlersProps extends ButtonProps {
  handlerOptions: ButtonHandlerOptions
}

export const ButtonWithHandlers = ({ handlerOptions, className, ...props }: ButtonWithHandlersProps) => {
  const handleClick = useButtonHandler(handlerOptions)

  return (
    <Button className={cn(className)} onClick={handleClick} {...props}>
      {props.children}
    </Button>
  )
}
