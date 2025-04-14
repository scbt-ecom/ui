type Primitive = string | number | boolean | null | undefined

export type KeysOf<T> = T extends Primitive
  ? never
  : T extends any[]
    ? KeysOf<T[number]>
    : T extends object
      ? {
          [K in keyof T]: K | KeysOf<T[K]>
        }[keyof T]
      : never
