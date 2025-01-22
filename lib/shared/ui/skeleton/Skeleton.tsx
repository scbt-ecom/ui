import { cn } from '$/shared/utils'

export interface SkeletonProps {
  className?: string
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={cn('skeleton-apply h-full w-full', className)}></div>
}
