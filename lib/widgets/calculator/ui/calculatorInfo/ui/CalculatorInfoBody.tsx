import { useFormContext } from 'react-hook-form'
import { type CalculatorSchema, formatInfoList } from '../../../model'
import { InfoListItem, type InfoListItemDto } from './InfoListItem'

export interface CalculatedInfoBodyProps {
  infoList: InfoListItemDto[]
}

export const CalculatorInfoBody = ({ infoList }: CalculatedInfoBodyProps) => {
  const { watch } = useFormContext<CalculatorSchema>()
  const watchedFields = watch()
  const formattedInfoList = formatInfoList(infoList, watchedFields)

  return (
    <div className='my-4 flex flex-col gap-3 border-t border-solid border-blue-grey-500 pt-4'>
      {formattedInfoList?.map((listItem) => <InfoListItem key={listItem.label} {...listItem} />)}
    </div>
  )
}
