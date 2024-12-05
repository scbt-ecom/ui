import { getDataByDadataType } from './helpers'
import type { TDadataType } from './types'

export const fetchSuggestions = async <T>(
  searchText: string,
  dadataType: TDadataType,
  dadataBaseUrl: string,
  signal: AbortSignal
) => {
  try {
    const response = await fetch(`${dadataBaseUrl}/${dadataType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ query: searchText }),
      signal: signal
    })

    if (!response.ok) throw new Error('error')
    const data = await response.json()

    const formattedData = getDataByDadataType<T>(dadataType, data)

    return formattedData
  } catch (error) {
    console.error(error)
    return []
  }
}
