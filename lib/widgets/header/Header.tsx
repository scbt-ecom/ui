import { widgetIds } from '../model'
import { renderContentVariant } from './model/helpers'
import type { HeaderProps, HeaderVariantType } from './model/types'
import { brandLogos, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const Header = <Type extends HeaderVariantType>(props: HeaderProps<Type>) => {
  const { logoPath = '/', logoType = 'main', classes } = props

  return (
    <header
      id={widgetIds.header}
      data-test-id={widgetIds.header}
      className={cn('flex h-[64px] items-center justify-center bg-color-white desktop:h-[72px]', classes?.root)}
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
          {renderContentVariant(props)}
        </div>
      </ResponsiveContainer>
    </header>
  )
}

export default Header
