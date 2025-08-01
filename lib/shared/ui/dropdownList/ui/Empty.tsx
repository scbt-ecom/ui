import { cn } from '$/shared/utils/cn'

interface EmptyListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EmptyList = ({ className, children, ...props }: EmptyListProps) => (
  <div {...props} className={cn('desk-body-regular-l w-full py-4 text-center', className)}>
    {children}
  </div>
)
