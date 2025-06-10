import { CustomLink, type CustomLinkProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type LinksListClasses = {
  list?: string
  customLink?: CustomLinkProps['classes']
}

export interface LinksListProps {
  linksList?: CustomLinkProps[]
  classes?: LinksListClasses
}

export const LinksList = ({ linksList, classes }: LinksListProps) => {
  return (
    <div className={cn('mt-4 flex flex-wrap items-center gap-4 desktop:mt-12 desktop:gap-8', classes?.list)}>
      {linksList?.map((link, index) => (
        <CustomLink key={index} withUnderline size='md' classes={classes?.customLink} {...link} />
      ))}
    </div>
  )
}
