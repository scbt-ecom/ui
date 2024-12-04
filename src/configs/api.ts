import { QueryClient } from '@tanstack/react-query'

export const DADATA_BASE_CACHE_URL = import.meta.env.STORYBOOK_DADATA_CACHE_API
export const DADATA_BASE_CONSTANTS_URL = import.meta.env.STORYBOOK_DADATA_CONSTANTS_API

export const VITE_DADATA_BASE_CACHE_URL = import.meta.env.VITE_DADATA_CACHE_API
export const VITE_DADATA_BASE_CONSTANTS_URL = import.meta.env.VITE_DADATA_CONSTANTS_API

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, //Количество повторных запросов при неудачном ответе
      refetchOnWindowFocus: false // Не отправлять повторный запрос при заходе на вкладку
    }
  }
})
