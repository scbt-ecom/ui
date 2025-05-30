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

      <div className={cn('relative h-2 w-[328xp] rounded-md bg-color-blue-grey-100 desktop:w-[524px]', classes?.progressBar)}>
        <div
          style={{ width: `${progress}%` }}
          className={cn('relative z-10 h-2 rounded-md bg-color-positive transition-all', classes?.progress)}
        ></div>
        <span
          style={{ maxWidth: `${maxPercent}%` }}
          className={cn(
            'progressBar-apply z-1 absolute top-1/2 h-full w-full -translate-y-1/2 animate-progress-loader rounded-md',
            classes?.loader
          )}
        ></span>
      </div>

      {bottomContent && <div className={cn('mt-2 flex justify-between gap-5', classes?.bottomContent)}>{bottomContent}</div>}
    </div>
  )
}
