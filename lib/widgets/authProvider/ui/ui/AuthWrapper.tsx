import { Loader, type LoaderProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type AuthWrapperClasses = {
  root?: string
  wrapper?: string
}

export interface AuthWrapperProps {
  children: React.ReactElement
  classes?: AuthWrapperClasses
  isLoading?: boolean
  loaderProps?: LoaderProps
}

export const AuthWrapper = ({ children, isLoading, classes, loaderProps }: AuthWrapperProps) => {
  return (
    <div
      tabIndex={0}
      className={cn(
        'desktop:max-w-[524px] relative flex h-[90px] w-full max-w-[328px] items-center justify-center rounded-sm p-2',
        'bg-color-white outline-warm-grey-200 focus-visible:outline-primary-focus outline outline-1 transition-colors',
        classes?.root
      )}
    >
      <div
        className={cn(
          'desktop:px-4 desktop:py-3 flex h-[74px] flex-1 cursor-pointer rounded-sm px-2 py-3 transition-colors',
          'bg-color-blue-grey-100 hover:bg-color-blue-grey-200 active:bg-color-blue-grey-300',
          { 'items-center': isLoading },
          classes?.wrapper
        )}
      >
        {isLoading ? <Loader position='static' classes={{ wrapper: 'size-8 m-auto' }} {...loaderProps} /> : children}
      </div>
    </div>
  )
}
