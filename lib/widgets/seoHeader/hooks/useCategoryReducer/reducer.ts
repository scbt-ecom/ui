import { type CategoryAction, CategoryActionType, type CategoryStore } from './types'

export const reducer = (state: CategoryStore, action: CategoryAction) => {
  switch (action.type) {
    case CategoryActionType.ROOT:
      return {
        ...state,
        root: action.payload
      }
    case CategoryActionType.CURRENT:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state
  }
}
