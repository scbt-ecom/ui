import { listItemConfig } from '../model/cva'
import { type Details, type LongBannerConfig } from '../model/types'
import { TextItem } from './TextItem'
import { cn } from '$/shared/utils'

interface ListItemsProps<Enabled extends boolean> {
  details: Details<Enabled>[]
  intent: LongBannerConfig['intent']
  withButton: boolean
}

export const TextList = <Enabled extends boolean>({ details, intent, withButton }: ListItemsProps<Enabled>) => {
  return (
    <ul className={cn(listItemConfig({ intent, withButton }))}>
      {details?.map((element, index) => <TextItem intent={intent} data={element} key={index} />)}
    </ul>
  )
}
