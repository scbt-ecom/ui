import type { EntityHtml } from '../../../model'
import { Accordion } from '$/shared/ui'

export const Html = ({ html, config }: EntityHtml) => {
  const content = <div dangerouslySetInnerHTML={{ __html: html ?? '' }} />

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion label={config?.accordionTitle}>{content}</Accordion>
      ) : (
        content
      )}
    </>
  )
}
