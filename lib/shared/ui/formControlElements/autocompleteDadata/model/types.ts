export type TDadataType = 'address' | 'fio' | 'country' | 'auto' | 'party'
export type TDadataBaseUrl = 'cache' | 'constants'

export type TDadataOption = {
  value: string
  additionalText?: string
  isDisabled?: boolean
}

// # constants suggestions COUNTRY
export interface IDadataCountryOption {
  id: number
  country_name: string
}
export interface IDadataConstantsCountrySuggestion {
  matches: IDadataCountryOption[]
}

// # constants suggestions AUTO
export interface IDadataAutoOption {
  id: number
  mark: string
  model: string
  model_mark: string
  year_max: string
  year_min: string
}
export interface IDadataConstantsAutoSuggestion {
  matches: IDadataAutoOption[]
}

// # Default dadata suggestions [FIO, ADDRESS]
export interface IDadataCacheOption<T> {
  value: string
  unrestricted_value: string
  data: T
}
export interface IDadataCacheSuggestion<T> {
  suggestions: IDadataCacheOption<T>[]
}

// #  dadata suggestions organization (party)
export interface IDadataOrganizationOption {
  value: string
  unrestricted_value: string
  data: {
    inn: 'string'
  }
}

export type TDadataReturn<T> = IDadataConstantsCountrySuggestion | IDadataCacheSuggestion<T> | IDadataConstantsAutoSuggestion
export type TDadataSuggestionType<T> = IDadataCountryOption[] | IDadataCacheOption<T>[] | IDadataAutoOption[]
