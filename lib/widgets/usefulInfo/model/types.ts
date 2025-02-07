export type SubEntityDetailsConfig = {
  isAccordion: boolean
  accordionTitle: string
}

export type TableCell = {
  cell: string
  //TODO: ЖДУ НА БЕКЕ cellId: string
}

export type TableRow = {
  row: TableCell[]
  //TODO: ЖДУ НА БЕКЕ rowId: string
}

export type TableHeading = {
  heading: string
  //TODO: ЖДУ НА БЕКЕ headingId: string
}

export type EntityTable = {
  title?: string
  description?: string
  columnsVariant: 'twoCols' | 'threeCols'
  tableVariant: 'separator' | 'filled'
  headings?: TableHeading[]
  rows: TableRow[]
  config?: SubEntityDetailsConfig
}

export type EntityDocuments = {
  iconType: 'documentOutline' | 'documentFilled'
  title?: string
  description?: string
  docs: {
    url: string
    size: string
    label: string
  }[]
  config?: SubEntityDetailsConfig
}

export type EntityHtml = {
  html: string
  config?: SubEntityDetailsConfig
}

export type EntityVariant = 'HTML' | 'TABLE' | 'DOCUMENTS'
export type EntityDetailsVariant = EntityHtml | EntityDocuments | EntityTable

export type Entity<Variant extends EntityVariant = EntityVariant> = {
  variant: Variant
  details: Variant extends 'HTML' ? EntityHtml[] : Variant extends 'TABLE' ? EntityTable[] : EntityDocuments[]
}

export type Contents = {
  entity: Entity
  //TODO: ЖДУ НА БЕКЕ entityId: string
}

export type Tab = {
  tabName: string
  contents: Contents[]
  //TODO: ЖДУ НА БЕКЕ tabId: string
}
