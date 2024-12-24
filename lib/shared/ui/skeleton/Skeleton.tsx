import { cn } from '$/shared/utils'

export interface ISkeletonProps {
  className?: string
}

export const Skeleton = ({ className }: ISkeletonProps) => {
  return <div className={cn('skeleton-apply h-full w-full', className)}></div>
}
