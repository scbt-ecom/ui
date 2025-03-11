import data from './data.json'
import { formatDateToLocaleString, TableUtils } from '$/shared/ui'

export const columns = TableUtils.getColumns(data[0], {
  enableSorting: ['age'],
  cellAccessor: {
    age: ({ getValue }) => formatDateToLocaleString(new Date(getValue()))
  }
})
