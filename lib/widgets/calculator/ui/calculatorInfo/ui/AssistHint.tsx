import { type AllowedIcons, Icon, Popover } from '$/shared/ui'

export interface AssistHintProps {
  iconName: AllowedIcons
  text: string
  hint?: string
}

export const AssistHint = ({ iconName, text, hint }: AssistHintProps) => {
  return (
    <div className='mb-6 flex items-center gap-2'>
      <div className='flex items-center gap-1'>
        <Icon name={iconName} className='size-6 text-icon-blue-grey-800' />
        <p className='desk-body-regular-l text-color-tetriary'>{text}</p>
      </div>

      {hint && (
        <Popover withCloseBtn={false} triggerElement={<Icon name='info/helpCircle' className='size-5 text-icon-blue-grey-600' />}>
          <p>{hint}</p>
        </Popover>
      )}
    </div>
  )
}
