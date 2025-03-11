export const backgroundBannerColors = {
  'skyblue-100': '#f4f8fe',
  'skyblue-200': '#e7f3ff',
  'skyblue-300': '#d9edff',
  'lavender-100': '#f7f7ff',
  'lavender-200': '#ecedfa',
  'lavender-300': '#d0d3f1',
  'salmon-200': '#faecec',
  'barvcray-200': '#ebeef4',
  'barvcray-300': '#dde1e8',
  'mint-200': '#e4f5ed',
  'greymint-200': '#deecee',
  'lightblue-300': '#bed3ec'
} as const

export type BackgroundBannerColorsValues = (typeof backgroundBannerColors)[keyof typeof backgroundBannerColors]
