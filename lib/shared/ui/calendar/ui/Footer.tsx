import { type DetailedHTMLProps, type HTMLAttributes, type JSX } from 'react'

type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  render: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element | string
}

export const Footer = ({ render, ...props }: FooterProps) => (
  <div className='flex justify-end border-t-[1px] border-warm-grey-200 pt-2'>{render(props)}</div>
)
