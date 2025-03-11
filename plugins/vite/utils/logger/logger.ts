/* eslint-disable no-console */

interface LoggerOptions {
  divider?: string
}

enum LoggerType {
  Error = 'ERROR',
  Info = 'INFO'
}

export class Logger {
  private issuer?: string
  private readonly options: LoggerOptions = {
    divider: ' - '
  }

  constructor(issuer?: string) {
    this.issuer = issuer
  }

  error(message: string): void {
    const { divider } = this.options

    const now = new Date().toISOString()

    const logMessage = [`[${now}]`, this.issuer ? `[${this.issuer}]` : undefined, `[${LoggerType.Error}]`, message]
      .filter(Boolean)
      .join(divider)

    console.error(logMessage)
  }

  info(message: string): void {
    const { divider } = this.options

    const now = new Date().toISOString()

    const logMessage = [`[${now}]`, this.issuer ? `[${this.issuer}]` : undefined, `[${LoggerType.Info}]`, message]
      .filter(Boolean)
      .join(divider)

    console.info(logMessage)
  }
}
