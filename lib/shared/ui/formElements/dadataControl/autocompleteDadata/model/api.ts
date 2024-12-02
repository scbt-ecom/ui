import { getDataByDadataType } from './helpers'
import type { TDadataType } from './types'

export const fetchSuggestions = async (searchText: string, dadataType: TDadataType, dadataBaseUrl: string) => {
  try {
    const response = await fetch(`${dadataBaseUrl}/${dadataType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ query: searchText })
    })

    if (!response.ok) throw new Error('error')
    const data = await response.json()

    const formattedData = getDataByDadataType(dadataType, data)

    return formattedData
  } catch (error) {
    console.error(error)
    return []
  }
}
