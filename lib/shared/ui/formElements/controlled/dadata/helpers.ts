import type {
  IDadataCacheSuggestion,
  IDadataConstantsAutoSuggestion,
  IDadataConstantsCountrySuggestion,
  TDadataReturn,
  TDadataType
} from './types'

export const getDataByDadataType = <T>(dadataType: TDadataType, data: TDadataReturn<T>) => {
  switch (dadataType) {
    case 'country':
      return (data as IDadataConstantsCountrySuggestion).matches
    case 'auto':
      return (data as IDadataConstantsAutoSuggestion).matches
    default:
      return (data as IDadataCacheSuggestion<T>).suggestions
  }
}
