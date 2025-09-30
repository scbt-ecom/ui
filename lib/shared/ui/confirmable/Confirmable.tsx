import { Popover, type PopoverProps } from '../popover'

export interface ConfirmableProps extends Omit<PopoverProps, 'triggerElement'> {
  children: React.ReactElement
  approve?: () => React.JSX.Element
  reject?: () => React.JSX.Element
}

export const Confirmable = ({ children, approve, reject, ...props }: ConfirmableProps) => {
  return (
    <Popover {...props} triggerElement={children}>
      {approve && approve()}
      {reject && reject()}
    </Popover>
  )
}
