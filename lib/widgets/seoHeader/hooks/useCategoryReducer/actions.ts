import type { Category } from '../../model'
import { type CategoryAction, CategoryActionType } from './types'

export const currentCategoryAction = (payload: Category): CategoryAction => ({
  type: CategoryActionType.CURRENT,
  payload
})

export const rootCategoryAction = (payload: Category): CategoryAction => ({
  type: CategoryActionType.ROOT,
  payload
})
