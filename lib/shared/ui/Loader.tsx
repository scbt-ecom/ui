import type { HTMLAttributes, ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '$/shared/utils'

const wrapperConfig = cva('', {
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

const loaderConfig = cva('border-2 border-solid block animate-spin rounded-full', {
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

type ILoaderClasses = {
  wrapper: string
  loader: string
  text: string
}

export interface ILoaderProps
  extends VariantProps<typeof loaderConfig>,
    VariantProps<typeof wrapperConfig>,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  intent?: 'primary' | 'secondary' | null
  text?: ReactElement | string
  classes?: Partial<ILoaderClasses>
}

export const Loader = ({ size = 'md', classes, intent = 'secondary', position = 'static', text, ...props }: ILoaderProps) => {
  return (
    <div className={cn(wrapperConfig({ position }), { 'flex flex-col items-center gap-2': text }, classes?.wrapper)}>
      <span data-testid='loader' className={cn(loaderConfig({ size, intent }), classes?.loader)} {...props}></span>
      {text && <p className={cn('desk-body-regular-l text-color-dark', classes?.text)}>{text}</p>}
    </div>
  )
}
