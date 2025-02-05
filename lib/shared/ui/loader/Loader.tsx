import type { HTMLAttributes, ReactElement } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { loaderConfig, wrapperConfig } from './model/helpers'
import { cn } from '$/shared/utils'

type TLoaderClasses = {
  wrapper?: string
  loader?: string
  text?: string
}

export interface LoaderProps
  extends VariantProps<typeof loaderConfig>,
    VariantProps<typeof wrapperConfig>,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  intent?: 'primary' | 'secondary' | null
  text?: ReactElement | string
  classes?: TLoaderClasses
}

export const Loader = ({ size = 'md', classes, intent = 'secondary', position = 'static', text, ...props }: LoaderProps) => {
  return (
    <div className={cn(wrapperConfig({ position }), { 'flex flex-col items-center gap-2': text }, classes?.wrapper)}>
      <span data-testid='loader' className={cn(loaderConfig({ size, intent }), classes?.loader)} {...props}></span>
      {text && <p className={cn('desk-body-regular-l text-color-dark', classes?.text)}>{text}</p>}
    </div>
  )
}
