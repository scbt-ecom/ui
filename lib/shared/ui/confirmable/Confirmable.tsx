import { Popover, type PopoverProps } from '../popover'

export interface ConfirmableProps extends Omit<PopoverProps, 'triggerElement'> {
  children: React.ReactElement
  approve?: React.ReactElement
  reject?: React.ReactElement
}

export const Confirmable = ({ children, approve, reject, ...props }: ConfirmableProps) => {
  return (
    <Popover {...props} triggerElement={children}>
      {approve && approve}
      {reject && reject}
    </Popover>
  )
}
