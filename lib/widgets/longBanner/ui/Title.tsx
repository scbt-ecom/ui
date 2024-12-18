import { type ReactElement } from 'react'
import { titleConfig } from '../model/cva'
import { type TLongBannerConfig } from '../model/types'
import { cn } from '$/shared/utils'

interface ITitleProps {
  intent: TLongBannerConfig['intent']
  title: string | ReactElement
  desktopHidden?: boolean
  mobileHidden?: boolean
}

export const Title = ({ intent, title, desktopHidden = false, mobileHidden = false }: ITitleProps) => {
  return <h2 className={cn(titleConfig({ intent, desktopHidden, mobileHidden }))}>{title}</h2>
}
