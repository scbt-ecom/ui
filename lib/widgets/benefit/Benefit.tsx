'use client'

import { type ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { BenefitItem, type BenefitItemClasses, type BenefitItemProps } from './ui/BenefitItem'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type BenefitClasses = {
  root?: string
  container?: string
  item?: BenefitItemClasses
  heading?: string
  grid?: string
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

export interface BenefitProps extends VariantProps<typeof gridConfig> {
  heading: string | ReactElement
  cards: BenefitItemProps[]
  classes?: BenefitClasses
}

export const Benefit = ({ heading, cards, classes, intent }: BenefitProps) => {
  return (
    <section id='benefit' className={cn('pb-20', classes?.root)}>
      <ResponsiveContainer className={classes?.container}>
        <Heading className={cn('mb-8', classes?.heading)} as='h2'>
          {heading}
        </Heading>
        <ul className={cn(gridConfig({ intent }), classes?.grid)}>
          {cards?.map((card) => <BenefitItem intent={intent} key={card.img} classes={classes?.item} {...card} />)}
        </ul>
      </ResponsiveContainer>
    </section>
  )
}
