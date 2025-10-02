import data from './data.json'
import dataDeposits from './dataDeposits.json'
import { formatDateToLocaleString, TableUtils } from '$/shared/ui'

export const columns = TableUtils.getColumns(data[0], {
  enableSorting: ['name'],
  sortingFn: 'alphanumeric',
  cellAccessor: {
    age: ({ getValue }) => formatDateToLocaleString(new Date(getValue()))
  }
})

export const columnsDeposits = TableUtils.getColumns(dataDeposits[0], {})
