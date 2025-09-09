import { type ComponentType, type JSX, type ReactElement } from 'react'
import { ErrorBoundary } from '$/shared/utils'

type BoundaryOptions = {
  fallback?: boolean | ReactElement | string | ((error: Error) => JSX.Element)
}

export const withBoundary = <P extends {} = {}>(Render: ComponentType<P>, options?: BoundaryOptions) => {
  return (props: P) => {
    return (
      <ErrorBoundary {...options}>
        <Render {...props} />
      </ErrorBoundary>
    )
  }
}
