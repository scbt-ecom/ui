import { useReducer } from 'react'
import { reducer } from './reducer'
import type { CategoryStore, UseCategoryReducerReturn } from './types'

export const useCategoryReducer = (initialValue: CategoryStore): UseCategoryReducerReturn => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return [state, dispatch]
}
