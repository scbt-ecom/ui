export type THeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingOptions {
  shortcuts: string[]
  level: THeadingLevel
}

export type ColorOption = `#${string}`
