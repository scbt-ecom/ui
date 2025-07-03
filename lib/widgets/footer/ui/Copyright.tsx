import { cn } from '$/shared/utils'

export type CopyrightClasses = {
  copyRight?: string
}

interface CopyrightProps {
  text: string
  classes?: CopyrightClasses
}

export const Copyright = ({ text, classes }: CopyrightProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div
      className={cn('desk-body-regular-m text-color-footer [&_>p]:inline', classes?.copyRight)}
      dangerouslySetInnerHTML={{
        __html: `© 2004-${currentYear} ${text}`
      }}
    />
  )
}
