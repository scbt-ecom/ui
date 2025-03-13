import type { Category } from '../../model'

export enum CategoryActionType {
  ROOT = 'root',
  CURRENT = 'current'
}

export type CategoryStore = {
  root: Category
  current: Category
}

export type CategoryAction = {
  type: CategoryActionType
  payload: Category
}

export type UseCategoryReducerReturn = [CategoryStore, React.Dispatch<CategoryAction>]
