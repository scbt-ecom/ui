import { cva } from 'class-variance-authority'

export const tableConfig = cva('flex flex-col', {
  variants: {
    columnsVariant: {
      twoCols: 'w-full max-w-[656px]',
      threeCols: 'w-full max-w-[768px]'
    }
  }
})

export const headingsConfig = cva('grid mb-2', {
  variants: {
    columnsVariant: {
      twoCols: 'grid-cols-2 desktop:gap-16',
      threeCols: 'grid-cols-3 desktop:gap-12'
    }
  }
})

export const rowsConfig = cva('grid py-4', {
  variants: {
    columnsVariant: {
      twoCols: 'grid-cols-2 desktop:gap-16',
      threeCols: 'grid-cols-3 desktop:gap-12'
    },
    tableVariant: {
      filled: 'odd:bg-color-primary-light-default px-2',
      separator: 'desktop:border-t desktop:border-solid desktop:border-warm-grey-200',
      mutant: ''
    }
  }
})
