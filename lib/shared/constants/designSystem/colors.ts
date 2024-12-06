const rootStyles = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
  initial: 'initial'
}

const allowedBackgroundColors = {
  'blue-grey-100': '#f3f4f7',
  'blue-grey-200': '#eaedf1',
  'blue-grey-300': '#d4dbe2',
  'blue-grey-500': '#a9b6c5',
  footer: '#40465a',
  negative: '#f42500',
  'negative-light': '#ffd2ca',
  positive: '#76bc21',
  'positive-light': '#e4f6ce',
  'primary-default': '#003790',
  'primary-focus': '#2477ff',
  'primary-hover': '#042e73',
  'primary-light-default': '#f0f4f9',
  'primary-tr-focus': '#0037901f',
  'primary-tr-hover': '#00379014',
  'primary-tr-pressed': '#00379033',
  'secondary-default': '#fc5055',
  'secondary-hover': '#f12f34',
  warning: '#f49f00',
  'warning-light': '#ffeecc',
  white: '#ffffff',
  'primary-disabled': '#809bc7',
  'secondary-disabled': '#FFB7BF',
  dark: '#292929',
  purple: '#5f40bd',
  'purple-hover': '#52399d',
  overlay: '#0000004d',
  ...rootStyles
} as const

const allowedTextColors = {
  dark: '#292929',
  disabled: '#a9b6c5',
  footer: '#c3c3c3',
  negative: '#f42500',
  positive: '#76bc21',
  'primary-default': '#003790',
  'primary-hover': '#042e73',
  secondary: '#40465a',
  tetriary: '#5a6e85',
  warning: '#f49f00',
  white: '#ffffff',
  'primary-disabled': '#809bc7',
  'blue-grey-600': '#94a4b7',
  ...rootStyles
} as const

const allowedBannersBackgroundColors = {
  'barvcray-200': '#ebeef4',
  'barvcray-300': '#dde1e8',
  'greymint-200': '#deecee',
  'lavender-100': '#f7f7ff',
  'lavender-200': '#ecedfa',
  'lavender-300': '#d0d3f1',
  'lightblue-300': '#bed3ec',
  'mint-200': '#e4f5ed',
  'salmon-200': '#faecec',
  'skyblue-100': '#f4f8fe',
  'skyblue-200': '#e7f3ff',
  'skyblue-300': '#d9edff',
  ...rootStyles
} as const

const allowedIconsColors = {
  'accent-default': '#2477ff',
  'accent-hover': '#0053da',
  'blue-grey-100': '#f3f4f7',
  'blue-grey-600': '#94a4b7',
  'blue-grey-700': '#69809a',
  'blue-grey-800': '#5a6e85',
  'dark-default': '#292929',
  'dark-hover': '#535353',
  disabled: '#a9b6c5',
  'negative-default': '#f42500',
  'negative-hover': '#c31e00',
  'positive-default': '#76bc21',
  'positive-hover': '#598d19',
  'primary-default': '#003790',
  'primary-hover': '#042e73',
  'secondary-dark-default': '#f12f34',
  'secondary-dark-hover': '#c40309',
  'secondary-default': '#fc5055',
  'secondary-hover': '#f12f34',
  'warning-default': '#f49f00',
  'warning-hover': '#d68b00',
  white: '#ffffff',
  'primary-disabled': '#809bc7',
  footer: '#C3C3C3',
  ...rootStyles
} as const

const allowedStrokeColors = {
  'blue-grey-500': '#a9b6c5',
  'blue-grey-700': '#69809a',
  'blue-grey-800': '#5a6e85',
  dark: '#292929',
  negative: '#f42500',
  positive: '#76bc21',
  'primary-default': '#003790',
  'primary-focus': '#2477ff',
  'primary-hover': '#042e73',
  'primary-light': '#f0f4f9',
  'secondary-default': '#fc5055',
  'secondary-hover': '#f12f34',
  'warm-grey-200': '#e4e4e4',
  'warm-grey-300': '#c3c3c3',
  warning: '#f49f00',
  white: '#ffffff',
  'primary-disabled': '#809bc7',
  ...rootStyles
} as const

export { allowedStrokeColors, allowedBannersBackgroundColors, allowedIconsColors, allowedTextColors, allowedBackgroundColors }
