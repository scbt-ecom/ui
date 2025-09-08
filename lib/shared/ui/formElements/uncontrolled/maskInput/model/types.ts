export type Mask =
  | 'datetime'
  | 'email'
  | 'numeric'
  | 'currency'
  | 'decimal'
  | 'integer'
  | 'percentage'
  | 'url'
  | 'ip'
  | 'mac'
  | 'ssn'
  | 'brl-currency'
  | 'cpf'
  | 'cnpj'
  | 'phone'
  | 'car'
  | (string & {})
  | (string[] & {})
  | null

type Validator = (char: string) => boolean
type Casing = 'upper' | 'lower' | 'title'
export type Definition = {
  validator: string | Validator
  casing?: Casing
  cardinality?: number
  placeholder?: string
  definitionSymbol?: string
}
