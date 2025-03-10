import { useContext } from 'react'
import { SeoTabContext } from '../tab/context'

export const useTabContext = () => {
  const context = useContext(SeoTabContext)

  if (!context) {
    throw new Error('useTabContext must be used within SeoTabContextProvider')
  }

  return context
}
