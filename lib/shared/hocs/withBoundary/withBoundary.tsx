import { Component as ComponentClass, type ErrorInfo, type FC, type ReactElement } from 'react'

type BoundaryOptions = {
  fallback?: boolean | ReactElement | string
}

export const withBoundary = <P = {},>(Component: FC<P>, options?: BoundaryOptions) => {
  return class extends ComponentClass<P, { hasError: boolean }> {
    constructor(props: P) {
      super(props)

      this.state = {
        hasError: false
      }
    }

    static getDerivedStateFromError() {
      return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.warn(error, errorInfo.componentStack)
    }

    getFallback() {
      const { fallback = false } = options ?? {}

      return fallback ?? null
    }

    render() {
      if (this.state.hasError) return this.getFallback()

      return <Component {...this.props} />
    }
  }
}
