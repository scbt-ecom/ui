import {
  CalculatedBlock,
  type CalculatedBlockProps,
  type CalculatedInfoBodyProps,
  CalculatorInfoBody,
  CalculatorInfoFooter,
  type CalculatorInfoFooterProps,
  CalculatorInfoHead,
  type CalculatorInfoHeadProps
} from './ui'

export interface CalculatorInfoProps
  extends CalculatedBlockProps,
    CalculatorInfoHeadProps,
    CalculatedInfoBodyProps,
    CalculatorInfoFooterProps {}

export const CalculatorInfo = ({
  rootDescription,
  bottomDescription,
  rootValue,
  title,
  subtitle,
  buttonsConfig,
  infoList,
  suffix,
  assistHint
}: CalculatorInfoProps) => {
  return (
    <div className='w-[456px] rounded-md bg-color-blue-grey-100 p-8'>
      <CalculatedBlock suffix={suffix} rootValue={rootValue} rootDescription={rootDescription} />
      <CalculatorInfoHead title={title} subtitle={subtitle} />
      <CalculatorInfoBody infoList={infoList} />
      <CalculatorInfoFooter assistHint={assistHint} buttonsConfig={buttonsConfig} bottomDescription={bottomDescription} />
    </div>
  )
}
