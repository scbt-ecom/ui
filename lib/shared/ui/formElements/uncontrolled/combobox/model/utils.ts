type Fn<T, R> = (arg: T) => R

export function call<T>(...functions: Array<Fn<T, void> | undefined>): Fn<T, void> {
  return (arg: T) => functions.forEach((fn) => fn?.(arg))
}
