import type {
  IDadataAutoOption,
  IDadataCacheOption,
  IDadataCacheSuggestion,
  IDadataConstantsAutoSuggestion,
  IDadataConstantsCountrySuggestion,
  IDadataCountryOption,
  IDadataOrganizationOption,
  TDadataReturn,
  TDadataSuggestionType,
  TDadataType
} from './types'

export type IDadataOptions<T> = IDadataCountryOption[] | IDadataAutoOption[] | IDadataCacheOption<T>[]

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

export const getOptionsByDadataType = <T>(dadataType: TDadataType, suggestions: TDadataSuggestionType<T>) => {
  switch (dadataType) {
    case 'country':
      return (suggestions as IDadataCountryOption[])?.map((suggestion) => {
        return {
          value: suggestion?.country_name,
          label: suggestion?.country_name
        }
      })

    case 'auto':
      return (suggestions as IDadataAutoOption[])?.map((suggestion) => {
        return {
          value: suggestion?.model_mark,
          label: suggestion?.model_mark
        }
      })

    case 'party':
      return (suggestions as IDadataOrganizationOption[])?.map((suggestion) => {
        return {
          value: suggestion?.value,
          label: suggestion?.value,
          additionalText: `ИНН: ${suggestion?.data?.inn}`
        }
      })
    case 'fio':
    case 'address':
      return (suggestions as IDadataCacheOption<T>[])?.map((suggestion) => {
        return {
          value: suggestion?.value,
          label: suggestion?.value
        }
      })

    default:
      return []
  }
}
