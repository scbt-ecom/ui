// @ts-expect-error - x never
export const assertUnreachable = (x: never, msg?: string): never => {
  console.error(msg ?? 'process all the cases')
}
