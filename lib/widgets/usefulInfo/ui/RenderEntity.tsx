import { type Entity, isDocuments, isHtml, isTable } from '../model'
import { Documents, Html, Table } from './subEntities'

export interface RenderEntityProps {
  entity: Entity
}

const renderEntity = (entity: Entity) => {
  switch (true) {
    case isHtml(entity):
      return entity.details?.map((htmlDetails, index) => <Html key={index} {...htmlDetails} />)

    case isDocuments(entity):
      return entity.details?.map((documentsDetails, index) => <Documents key={index} {...documentsDetails} />)

    case isTable(entity):
      return entity.details?.map((tableDetails, index) => <Table key={index} {...tableDetails} />)

    default:
      return null
  }
}

export const RenderEntity = ({ entity }: RenderEntityProps) => {
  return <div className='flex flex-col gap-6'>{renderEntity(entity)}</div>
}
