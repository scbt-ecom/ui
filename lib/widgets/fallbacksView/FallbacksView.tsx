import { cn } from '../../shared/utils'
import { statusConfig, type StatusVariant } from './model'
import { Button, Heading, ResponsiveContainer } from '$/shared/ui'

export interface FallbacksViewProps {
  status: StatusVariant
  navigationFn: (...args: unknown[]) => unknown
}

export const FallbacksView = ({ status, navigationFn }: FallbacksViewProps) => {
  return (
    <div className='flex flex-col'>
      <ResponsiveContainer className='flex flex-col justify-center'>
        <div className='mt-32 flex w-full flex-col items-center gap-8 desktop:gap-12'>
          <span
            className={cn(
              'flex size-16 items-center justify-center rounded-full bg-color-positive-light',
              `${statusConfig()[status].icon.bg}`
            )}
          >
            {statusConfig()[status].icon.element}
          </span>
          <div className='flex flex-col items-center gap-2 text-center desktop:gap-6'>
            <Heading as='h2'>{statusConfig()[status].title}</Heading>
            <p className='desk-body-regular-l text-color-dark'>{statusConfig()[status].description}</p>
          </div>
          <Button size='lg' className='w-full max-w-[328px] desktop:desk-body-regular-l desktop:w-[256px]' onClick={navigationFn}>
            {statusConfig()[status].button.text}
          </Button>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
