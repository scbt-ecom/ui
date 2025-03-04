import { type ButtonHandlerOptions, useButtonHandler } from './model'
import { Button, type ButtonProps } from '$/shared/ui'

export interface ButtonWithHandlersProps extends ButtonProps {
  handlerOptions: ButtonHandlerOptions
}

export const ButtonWithHandlers = ({ handlerOptions, ...props }: ButtonWithHandlersProps) => {
  const handleClick = useButtonHandler(handlerOptions)

  return (
    <Button onClick={handleClick} {...props}>
      {props.children}
    </Button>
  )
}
