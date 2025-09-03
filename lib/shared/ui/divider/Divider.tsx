import { type Property } from 'csstype'
import { cn } from '$/shared/utils'

type Color = `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | string

export interface DividerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Направление разделителя
   * @default vertical
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * Ширина разделителя. Определяется автоматически в зависимости от `direction`:
   * 1px если `direction: 'vertical'`, 100% если `direction: 'horizontal'`
   */
  width?: Property.Width<string | number>
  /**
   * Высота разделителя. Определяется автоматически в зависимости от `direction`:
   * 100% если `direction: 'vertical'`, 1px если `direction: 'horizontal'`
   */
  height?: Property.Height<string | number>
  /**
   * Цвет разделителя
   */
  color?: Color
}

export const Divider = ({
  direction = 'vertical',
  width = direction === 'vertical' ? '1px' : '100%',
  height = direction === 'vertical' ? '100%' : '1px',
  className,
  color = 'bg-color-dark',
  ...props
}: DividerProps) => {
  const isInlineColor = color?.startsWith('#') || color?.startsWith('rgb')
  return (
    <div
      {...props}
      style={{ width, height, backgroundColor: isInlineColor ? color : undefined }}
      className={cn(
        '',
        {
          [color]: !isInlineColor
        },
        className
      )}
    />
  )
}
