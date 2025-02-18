export class TypeGuards {
  static isString(value: unknown): value is string {
    return typeof value === 'string'
  }

  static isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean'
  }

  static isStringEmpty(value: unknown): value is string {
    return this.isString(value) && !value.length
  }

  static isNull(value: unknown): value is null {
    return value === null
  }

  static isUndefined(value: unknown): value is undefined {
    return value === undefined && typeof value === 'undefined'
  }

  static isNil(value: unknown): value is boolean {
    return this.isNull(value) || this.isUndefined(value)
  }

  static isArray(value: unknown): value is unknown[] {
    return Array.isArray(value)
  }

  static isArrayEmpty(value: unknown): value is boolean {
    return this.isArray(value) && !value.length
  }
}
