import { Component, type ErrorInfo, type JSX, type ReactElement } from 'react'

type ErrorBoundaryProps = {
  children: ReactElement | string
  fallback?: boolean | ReactElement | string | ((error: Error) => JSX.Element)
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean; error?: Error }> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo.componentStack)
  }

  getFallback() {
    const { fallback = false } = this.props
    const { error } = this.state

    return fallback ? (typeof fallback === 'function' ? fallback(error!) : fallback) : null
  }

  render() {
    if (this.state.hasError) return this.getFallback()

    return this.props.children
  }
}
