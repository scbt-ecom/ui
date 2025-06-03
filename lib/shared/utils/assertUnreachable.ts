// @ts-expect-error - x
export const assertUnreachable = (x: never, msg?: string): never => {
  console.error(msg ?? 'process all the cases')
}
