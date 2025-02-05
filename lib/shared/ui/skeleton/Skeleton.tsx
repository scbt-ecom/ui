import type { HTMLAttributes } from 'react'
import { cn } from '$/shared/utils'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={cn('skeleton-apply h-full w-full', className)}></div>
}
