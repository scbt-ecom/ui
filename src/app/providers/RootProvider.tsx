import { QueryClientProvider } from '@tanstack/react-query'
import type { IProviderProps } from './model/types'
import { queryClient } from '@/configs/api'
import { NotificationProvider } from '$/shared/ui'

export const RootProvider = ({ children }: IProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider />
      {children}
    </QueryClientProvider>
  )
}
