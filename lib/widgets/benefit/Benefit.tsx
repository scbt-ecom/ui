import { type ReactElement } from 'react'
import { type Content } from './model/types'
import { BenefitItem } from './ui/BenefitItem'
import { Heading, ResponsiveContainer } from '$/shared/ui'

export interface IBenefitProps {
  heading: string | ReactElement
  content: Content[]
  classes?: {
    item?: string
  }
}

export const Benefit = ({ heading, content, classes }: IBenefitProps) => {
  return (
    <section className='pb-20'>
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
