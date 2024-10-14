import { type ReactElement } from 'react'
import { cn } from '../utils'

type IProgressBarClasses = {
  wrapper: string
  topContent: string
  bottomContent: string
  progressBar: string
  progress: string
  loader: string
}

export interface IProgressBarProps {
  topContent?: ReactElement
  bottomContent?: ReactElement
  progress: number
  maxPercent?: number
  classes?: Partial<IProgressBarClasses>
}

export const ProgressBar = ({ topContent, bottomContent, progress, maxPercent = 100, classes }: IProgressBarProps) => {
  return (
    <div className={cn('flex flex-col', classes?.wrapper)}>
      {topContent && <div className={cn('mb-2 flex justify-between gap-5', classes?.topContent)}>{topContent}</div>}

      <div className={cn('relative h-2 w-[328xp] rounded-md bg-color-blue-grey-100 desktop:w-[524px]', classes?.progressBar)}>
        <div
          style={{ width: `${progress}%` }}
          className={cn('relative z-[4] h-2 rounded-md bg-color-positive transition-all', classes?.progress)}
        ></div>
        <span
          style={{ maxWidth: `${maxPercent}%` }}
          className={cn(
            'progressBar-apply absolute top-1/2 z-[2] h-full w-full -translate-y-1/2 animate-progress-loader rounded-md',
            classes?.loader
          )}
        ></span>
      </div>

      {bottomContent && <div className={cn('mt-2 flex justify-between gap-5', classes?.bottomContent)}>{bottomContent}</div>}
    </div>
  )
}
