import * as React from 'react'
import { type AllowedIcons } from './allowedIcons'

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: AllowedIcons
}

function memoize<T, R>(fn: (...args: T[]) => R) {
  const cache: Record<string, R> = {}

  return function (...args: T[]) {
    const key = args.toString()

    if (!cache[key]) {
      cache[key] = fn(...args)
      return cache[key]
    }

    return cache[key]
  }
}

const memoizedIcon = memoize((name: string) => {
  const filepath = name.slice(0, name.lastIndexOf('/'))
  const filename = name.slice(name.lastIndexOf('/') + 1)

  return React.lazy(() => import(`../../../../static/${filepath}/${filename}.svg?react`))
})

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = memoizedIcon(name)

  return (
    <div>
      <IconComponent {...props} />
    </div>
  )
}
