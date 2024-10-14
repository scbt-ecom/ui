import { cva, type VariantProps } from 'class-variance-authority'
import { Icon, type TAllowedIcons } from './icon'
import { cn } from '$/shared/utils'

const iconConfig = cva('size-8 transition-colors', {
  variants: {
    intent: {
      outline: 'text-icon-secondary-dark-default group-hover:text-icon-secondary-dark-hover',
      filled: 'text-icon-primary-default group-hover:text-icon-primary-hover'
    }
  },
  defaultVariants: {
    intent: 'outline'
  }
})

type TIconConfig = VariantProps<typeof iconConfig>

const iconVariant: Record<NonNullable<TIconConfig['intent']>, TAllowedIcons> = {
  filled: 'files/documentFilled',
  outline: 'files/documentOutline'
}

export interface IDocumentProps extends TIconConfig {
  text: string
  size: number
  sizeType: 'КБ' | 'МБ'
  href: string
}

export const Document = ({ text, size, sizeType, href, intent = 'outline' }: IDocumentProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      tabIndex={0}
      className={cn(
        'group flex max-w-[288px] cursor-pointer items-center gap-2 rounded-sm p-1 outline outline-2 outline-transparent transition-colors focus-within:outline-primary-focus desktop:max-w-[592px]'
      )}
    >
      <Icon name={iconVariant[intent!]} className={cn(iconConfig({ intent }))} />
      <div className={cn('flex flex-1 flex-col')}>
        <p className={cn('desk-body-medium-l text-color-dark')}>{text}</p>
        <div className={cn('desk-body-regular-m text-color-disabled')}>
          {size} {sizeType}
        </div>
      </div>
    </a>
  )
}
