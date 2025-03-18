import { QueryClient, QueryClientProvider as QueryClientProviderBase } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProviderBase client={queryClient}>{children}</QueryClientProviderBase>
)
