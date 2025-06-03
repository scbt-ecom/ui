import {
  CalculatedBlock,
  type CalculatedBlockClasses,
  type CalculatedBlockProps,
  type CalculatedInfoBodyProps,
  CalculatorInfoBody,
  type CalculatorInfoBodyClasses,
  CalculatorInfoFooter,
  type CalculatorInfoFooterClasses,
  type CalculatorInfoFooterProps,
  CalculatorInfoHead,
  type CalculatorInfoHeadClasses,
  type CalculatorInfoHeadProps
} from './ui'
import { cn } from '$/shared/utils'

export type CalculatorInfoClasses = {
  wrapper?: string
  calculatedBlock?: CalculatedBlockClasses
  calculatedInfoHead?: CalculatorInfoHeadClasses
  calculatorInfoBody?: CalculatorInfoBodyClasses
  calculatorInfoFooter?: CalculatorInfoFooterClasses
}

export interface CalculatorInfoProps
  extends Omit<CalculatedBlockProps, 'classes'>,
    Omit<CalculatorInfoHeadProps, 'classes'>,
    Omit<CalculatedInfoBodyProps, 'classes'>,
    Omit<CalculatorInfoFooterProps, 'classes'> {
  classes?: CalculatorInfoClasses
}

export const CalculatorInfo = ({
  rootDescription,
  bottomDescription,
  rootValue,
  title,
  subtitle,
  buttonsConfig,
  infoList,
  suffix,
  assistHint,
  classes
}: CalculatorInfoProps) => {
  return (
    <div className={cn('w-[456px] rounded-md bg-color-blue-grey-100 p-8', classes?.wrapper)}>
      <CalculatedBlock
        suffix={suffix}
        rootValue={rootValue}
        rootDescription={rootDescription}
        classes={classes?.calculatedBlock}
      />
      <CalculatorInfoHead title={title} subtitle={subtitle} classes={classes?.calculatedInfoHead} />
      <CalculatorInfoBody infoList={infoList} classes={classes?.calculatorInfoBody} />
      <CalculatorInfoFooter
        assistHint={assistHint}
        buttonsConfig={buttonsConfig}
        bottomDescription={bottomDescription}
        classes={classes?.calculatorInfoFooter}
      />
    </div>
  )
}
