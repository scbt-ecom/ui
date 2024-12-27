import { useContext } from 'react'
import { SelectContext } from '../model'

export const useSelectController = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error('useSelectController must be used within SelectContextProvider')
  }

  return context
}
