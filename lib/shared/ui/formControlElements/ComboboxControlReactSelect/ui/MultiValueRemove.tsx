import { components, type MultiValueRemoveProps } from 'react-select'
import { Icon } from '$/hybrid'

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name='general/close' className='size-4 text-icon-blue-grey-800' />
    </components.MultiValueRemove>
  )
}
