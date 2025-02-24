import { renderContentVariant } from './model/helpers'
import type { HeaderProps } from './model/types'
import { brandLogos, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const Header = ({ logoPath = '/', logoType = 'main', config, classes }: HeaderProps) => {
  return (
    <header
      id='header'
      className={cn('flex h-[64px] items-center justify-center bg-color-white desktop:h-[72px]', classes?.header)}
    >
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('flex items-center justify-between gap-5', classes?.wrapper)}>
          <a
            href={logoPath}
            aria-label='logo'
            target='_blank'
            rel='noreferrer'
            className={cn(
              'flex items-center justify-center [&_svg]:w-[132px] desktop:[&_svg]:h-[32px] desktop:[&_svg]:w-[192px]',
              classes?.logo
            )}
          >
            {brandLogos[logoType]}
          </a>
          {renderContentVariant(config)}
        </div>
      </ResponsiveContainer>
    </header>
  )
}
