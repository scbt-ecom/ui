import { forwardRef } from 'react'

export const Table = forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>((props, ref) => (
  <table ref={ref} {...props} />
))
Table.displayName = 'Table'

export const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>((props, ref) => (
  <thead ref={ref} {...props} />
))
TableHeader.displayName = 'TableHeader'

export const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>((props, ref) => (
  <tbody ref={ref} {...props} />
))
TableBody.displayName = 'TableBody'

export const TableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>((props, ref) => (
  <tfoot ref={ref} {...props} />
))
TableFooter.displayName = 'TableFooter'

export const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>((props, ref) => (
  <tr ref={ref} {...props} />
))
TableRow.displayName = 'TableRow'

export const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>((props, ref) => (
  <th ref={ref} {...props} />
))
TableHead.displayName = 'TableHead'

export const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>((props, ref) => (
  <td ref={ref} {...props} />
))
TableCell.displayName = 'TableCell'

export const TableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>((props, ref) => (
  <caption ref={ref} {...props} />
))
TableCaption.displayName = 'TableCaption'
