import { components, type MultiValueRemoveProps } from 'react-select'
import { type TMultiValueRemoveClasses } from '../model/types'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface IMultiValueRemoveProps extends MultiValueRemoveProps {
  classes?: TMultiValueRemoveClasses
}

export const MultiValueRemove = ({ classes, ...props }: IMultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name='general/close' className={cn('size-4 text-icon-blue-grey-800', classes?.multiRemoveIcon)} />
    </components.MultiValueRemove>
  )
}
