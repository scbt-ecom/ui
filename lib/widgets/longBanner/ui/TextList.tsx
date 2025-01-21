import { listItemConfig } from '../model/cva'
import { type ITextContent, type LongBannerConfig } from '../model/types'
import { TextItem } from './TextItem'
import { cn } from '$/shared/utils'

interface ListItemsProps {
  textContent: ITextContent[]
  intent: LongBannerConfig['intent']
  withButton: boolean
}

export const TextList = ({ textContent, intent, withButton }: ListItemsProps) => {
  return (
    <ul className={cn(listItemConfig({ intent, withButton }))}>
      {textContent?.map((element, index) => <TextItem intent={intent} data={element} key={index} />)}
    </ul>
  )
}
