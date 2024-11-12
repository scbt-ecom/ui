import type { IProviderProps } from './model/types'
import { NotificationProvider } from '$/shared/ui'

export const RootProvider = ({ children }: IProviderProps) => {
  return (
    <>
      <NotificationProvider />
      {children}
    </>
  )
}
