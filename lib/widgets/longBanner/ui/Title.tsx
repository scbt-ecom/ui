import { type ReactElement } from 'react'
import { titleConfig } from '../model/cva'
import { type LongBannerConfig } from '../model/types'
import { cn } from '$/shared/utils'

interface TitleProps {
  intent: LongBannerConfig['intent']
  title: string | ReactElement
  desktopHidden?: boolean
  mobileHidden?: boolean
}

export const Title = ({ intent, title, desktopHidden = false, mobileHidden = false }: TitleProps) => {
  return <h2 className={cn(titleConfig({ intent, desktopHidden, mobileHidden }))}>{title}</h2>
}
