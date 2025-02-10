import { listItemConfig } from '../model/cva'
import { type Details, type LongBannerConfig } from '../model/types'
import { TextItem } from './TextItem'
import { cn } from '$/shared/utils'

interface ListItemsProps {
  details: Details[]
  intent: LongBannerConfig['intent']
  withButton: boolean
}

export const TextList = ({ details, intent, withButton }: ListItemsProps) => {
  return (
    <ul className={cn(listItemConfig({ intent, withButton }))}>
      {details?.map((element, index) => <TextItem intent={intent} data={element} key={index} />)}
    </ul>
  )
}
