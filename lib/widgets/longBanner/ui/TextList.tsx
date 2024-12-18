import { listItemConfig } from '../model/cva'
import { type ITextContent, type TLongBannerConfig } from '../model/types'
import { TextItem } from './TextItem'
import { cn } from '$/shared/utils'

interface IListItemsProps {
  textContent: ITextContent[]
  intent: TLongBannerConfig['intent']
  withButton: boolean
}

export const TextList = ({ textContent, intent, withButton }: IListItemsProps) => {
  return (
    <ul className={cn(listItemConfig({ intent, withButton }))}>
      {textContent?.map((element, index) => <TextItem intent={intent} data={element} key={index} />)}
    </ul>
  )
}
