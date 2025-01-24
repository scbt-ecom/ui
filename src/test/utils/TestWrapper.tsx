import { cn } from '$/shared/utils'

interface TestWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  render: () => React.JSX.Element
}

export const TestWrapper = ({ title = 'Тестирование компонента', render, className, ...props }: TestWrapperProps) => (
  <div {...props} className={cn('mx-auto w-full max-w-[600px] py-10', className)}>
    <h2 className='desk-title-bold-l pb-2'>{title}</h2>
    <div>{render()}</div>
  </div>
)
