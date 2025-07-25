import data from './data.json'
import { TableUtils } from '$/shared/ui'

export const columns = TableUtils.getColumns(data[0], {
  enableSorting: ['Срок вклада', 'При расчётах картой Халва*'],
  sortingFn: {
    'Срок вклада': 'basic',
    'При расчётах картой Халва*': 'alphanumeric'
  },
  size: {
    'Срок вклада': {
      size: 222
    }
  }
})
