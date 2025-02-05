import { cva } from 'class-variance-authority'

export const wrapperConfig = cva('', {
  variants: {
    position: {
      absolute: 'absolute',
      static: 'static',
      fixed: 'fixed'
    }
  },
  defaultVariants: {
    position: 'static'
  }
})

export const loaderConfig = cva('border-2 border-solid block animate-spin rounded-full', {
  variants: {
    intent: {
      primary: 'border-white border-b-transparent',
      secondary: 'border-primary-default border-b-transparent'
    },
    size: {
      sm: 'size-5 border-2',
      md: 'size-8 border-2',
      lg: 'size-12 border-4'
    }
  },
  defaultVariants: {
    size: 'md',
    intent: 'primary'
  }
})
