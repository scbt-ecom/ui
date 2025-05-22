import * as React from 'react'
import { type AllowedIcons } from './allowedIcons'
import { iconsMap } from './iconsMap'

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: AllowedIcons
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = iconsMap[name]

  return <IconComponent {...props} />
}
