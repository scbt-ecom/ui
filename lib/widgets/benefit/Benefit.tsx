import { type ReactElement } from 'react'
import { type Content } from './model/types'
import { BenefitItem } from './ui/BenefitItem'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type IBenefitClasses = {
  item?: string
  heading?: string
  grid?: string
  container?: string
  section?: string
}

export interface IBenefitProps {
  heading: string | ReactElement
  content: Content[]
  classes?: IBenefitClasses
}

export const Benefit = ({ heading, content, classes }: IBenefitProps) => {
  return (
    <section className={cn('pb-20', classes?.section)}>
      <ResponsiveContainer>
        <Heading className='mb-8' as='h2'>
          {heading}
        </Heading>
        <ul className='grid grid-cols-1 gap-4 desktop:grid-cols-2'>
          {content?.map((item, index) => <BenefitItem key={item.img} index={index} classes={classes} {...item} />)}
        </ul>
      </ResponsiveContainer>
    </section>
  )
}
