import { type ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { BenefitItem, type IBenefitItemClasses, type IBenefitItemProps } from './ui/BenefitItem'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type IBenefitClasses = IBenefitItemClasses & {
  item?: string
  heading?: string
  grid?: string
  container?: string
  section?: string
}

const gridConfig = cva('grid gap-4', {
  variants: {
    intent: {
      twoCards: 'grid-cols-1 mobile:grid-rows-[repeat(2,400px)] desktop:grid-cols-2',
      threeCards: 'grid-cols-1 desktop:grid-cols-2',
      fourCards: 'grid-cols-1 mobile:grid-rows-[400px,1fr,1fr,400px] desktop:grid-cols-3'
    }
  }
})

export interface IBenefitProps extends VariantProps<typeof gridConfig> {
  heading: string | ReactElement
  cards: IBenefitItemProps[]
  classes?: IBenefitClasses
}

export const Benefit = ({ heading, cards, classes, intent }: IBenefitProps) => {
  return (
    <section className={cn('pb-20', classes?.section)}>
      <ResponsiveContainer>
        <Heading className='mb-8' as='h2'>
          {heading}
        </Heading>
        <ul className={cn(gridConfig({ intent }), classes?.grid)}>
          {cards?.map((card) => <BenefitItem intent={intent} key={card.img} classes={classes} {...card} />)}
        </ul>
      </ResponsiveContainer>
    </section>
  )
}
