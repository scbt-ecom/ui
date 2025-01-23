import * as React from 'react'
import { cn } from '$/shared/utils'

type ProgressBarClasses = {
  root?: string
  topContent?: string
  bottomContent?: string
  progressBar?: string
  progress?: string
  loader?: string
}

export interface IProgressBarProps {
  topContent?: React.ReactElement
  bottomContent?: React.ReactElement
  progress: number
  maxPercent?: number
  classes?: ProgressBarClasses
}

export const ProgressBar = ({ topContent, bottomContent, progress, maxPercent = 100, classes }: IProgressBarProps) => {
  return (
    <div className={cn('flex w-full flex-col', classes?.root)}>
      {topContent && <div className={cn('mb-2 flex justify-between gap-5', classes?.topContent)}>{topContent}</div>}

      <div className={cn('bg-color-blue-grey-100 desktop:w-[524px] relative h-2 w-[328xp] rounded-md', classes?.progressBar)}>
        <div
          style={{ width: `${progress}%` }}
          className={cn('bg-color-positive relative z-10 h-2 rounded-md transition-all', classes?.progress)}
        ></div>
        <span
          style={{ maxWidth: `${maxPercent}%` }}
          className={cn(
            'progressBar-apply animate-progress-loader absolute top-1/2 z-1 h-full w-full -translate-y-1/2 rounded-md',
            classes?.loader
          )}
        ></span>
      </div>

      {bottomContent && <div className={cn('mt-2 flex justify-between gap-5', classes?.bottomContent)}>{bottomContent}</div>}
    </div>
  )
}
