import type { TableHeading, TableRow } from '../../../../model'

export const transformMobileRows = (rows: TableRow[], headings: TableHeading[]) => {
  return {
    rows: rows?.map(({ row }) => ({
      row: row?.map((cell, index) => ({
        ...cell,
        heading: headings && headings[index]?.heading
      }))
    }))
  }
}
