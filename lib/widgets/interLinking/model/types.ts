export interface Link {
  label: string
  path: string
}

export interface Group {
  groupLabel: string
  links: Link[]
}

export interface Column {
  column: Group[]
}

export type InterLinkingVariant = 'twoCols' | 'threeCols' | 'fourCols'

export interface InterLinkingRoot {
  headline: string
  config: {
    variant: InterLinkingVariant
    details: Column[]
  }
}
