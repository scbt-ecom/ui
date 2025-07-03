'use client'

import { cva } from 'class-variance-authority'
import { widgetIds } from '../model'
import { type Details } from './model/types'
import { BenefitItem, type BenefitItemClasses } from './ui/BenefitItem'
import { ResponsiveContainer } from '$/shared/ui'
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
    variant: {
      twoCards: 'grid-cols-1 mobile:grid-rows-[repeat(2,400px)] desktop:grid-cols-2',
      threeCards: 'grid-cols-1 desktop:grid-cols-2',
      fourCards: 'grid-cols-1 mobile:grid-rows-[400px,1fr,1fr,400px] desktop:grid-cols-3'
    }
  }
})

export interface BenefitProps {
  headline: string
  classes?: BenefitClasses
  variant: 'twoCards' | 'threeCards' | 'fourCards'
  details: Details[]
}

export const Benefit = ({ headline, details, variant, classes }: BenefitProps) => {
  return (
    <section id={widgetIds.benefit} data-test-id={widgetIds.benefit} className={cn(classes?.root)}>
      <ResponsiveContainer className={classes?.container}>
        <div
          dangerouslySetInnerHTML={{ __html: headline }}
          className={cn('mob-headline-bold-s mb-8 desktop:desk-headline-bold-m', classes?.heading)}
        />
        <ul className={cn(gridConfig({ variant }), classes?.grid)}>
          {details?.map((card) => <BenefitItem variant={variant} key={card.title} classes={classes?.item} {...card} />)}
        </ul>
      </ResponsiveContainer>
    </section>
  )
}

export default Benefit
