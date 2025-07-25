import { useFormContext } from 'react-hook-form'
import { type CalculatorSchema, formatInfoList } from '../../../model'
import { InfoListItem, type InfoListItemDTO } from './InfoListItem'
import { cn } from '$/shared/utils'

export type CalculatorInfoBodyClasses = {
  wrapper?: string
}

export interface CalculatedInfoBodyProps {
  infoList: InfoListItemDTO[]
  classes?: CalculatorInfoBodyClasses
}

export const CalculatorInfoBody = ({ infoList, classes }: CalculatedInfoBodyProps) => {
  const { watch } = useFormContext<CalculatorSchema>()
  const watchedFields = watch()
  const formattedInfoList = formatInfoList(infoList, watchedFields)

  return (
    <div className={cn('mb-6 mt-4 flex flex-col gap-3 border-t border-solid border-blue-grey-500 pt-4', classes?.wrapper)}>
      {formattedInfoList?.map((listItem) => (
        <InfoListItem key={listItem.label} {...listItem} />
      ))}
    </div>
  )
}
