import { type Dispatch, type SetStateAction, useMemo, useState } from 'react'

export interface UsePaginationProps {
  totalPages: number
  initialPage?: number
}

export interface UsePaginationReturn {
  page: number
  setLast: () => void
  setFirst: () => void
  setPage: Dispatch<SetStateAction<number>>
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export const usePagination = ({ totalPages, initialPage = 0 }: UsePaginationProps): UsePaginationReturn => {
  const [page, setPage] = useState<number>(initialPage)

  const setFirst = () => {
    setPage(0)
  }

  const setLast = () => {
    setPage(totalPages)
  }

  const currentPage = useMemo<number>(() => {
    if (page > totalPages) return page - 1

    return Math.min(page, totalPages)
  }, [page, totalPages])

  return { page: currentPage, totalPages, setPage, setLast, setFirst, hasNext: page < totalPages, hasPrev: page > 0 }
}
