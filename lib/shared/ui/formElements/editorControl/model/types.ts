export type THeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface THeadingOptions {
  shortcuts: string[]
  level: THeadingLevel
}

export interface TColorsOptions {
  name: string
  color: `#${string}`
}
