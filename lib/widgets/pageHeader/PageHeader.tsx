import { renderContentVariant } from './model/helpers'
import type { PageHeaderProps } from './model/types'
import { brandLogos, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const PageHeader = (props: PageHeaderProps) => {
  const { logoPath = '/', logoType = 'main', classes } = props

  return (
    <header className={cn('bg-color-white desktop:h-[72px] flex h-[64px] items-center justify-center', classes?.header)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('flex items-center justify-between gap-5', classes?.wrapper)}>
          <a
            href={logoPath}
            aria-label='logo'
            target='_blank'
            rel='noreferrer'
            className={cn(
              'desktop:[&_svg]:h-[32px] desktop:[&_svg]:w-[192px] flex items-center justify-center [&_svg]:w-[132px]',
              classes?.logo
            )}
          >
            {brandLogos[logoType]}
          </a>
          {renderContentVariant(props)}
        </div>
      </ResponsiveContainer>
    </header>
  )
}
