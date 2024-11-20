import { cva } from 'class-variance-authority'

export const titleConfig = cva('', {
  variants: {
    intent: {
      twoItems: 'mob-headline-bold-s mb-6 desktop:desk-headline-bold-m desktop:mb-12',
      fourItems: 'mob-title-bold-l desktop:desk-title-bold-l  mb-8'
    },
    desktopHidden: {
      true: 'desktop:hidden'
    },
    mobileHidden: {
      true: 'mobile:hidden'
    }
  },
  defaultVariants: {
    intent: 'twoItems'
  }
})

export const listItemConfig = cva('desktop:max-h-[98px]', {
  variants: {
    intent: {
      twoItems: '',
      fourItems: ''
    },
    withButton: {
      true: ''
    }
  },
  compoundVariants: [
    {
      intent: 'twoItems',
      withButton: true,
      class: 'mb-8 desktop:flex'
    },
    {
      intent: 'twoItems',
      withButton: false,
      class: 'desktop:flex'
    },
    {
      intent: 'fourItems',
      withButton: true,
      class: 'desktop:grid grid-rows-2 mb-8 desktop:gap-x-10 desktop:gap-y-4 grid-flow-col'
    },
    {
      intent: 'fourItems',
      withButton: false,
      class: 'desktop:grid grid-rows-2 desktop:gap-x-10 desktop:gap-y-4 grid-flow-col'
    }
  ]
})

export const itemConfig = cva('border-blue-grey-500 pb-6 mobile:mb-6 mobile:border-b mobile:last:pb-0 mobile:last:mb-0', {
  variants: {
    intent: {
      twoItems: 'last:border-none  desktop:ml-8  desktop:border-r desktop:pr-8 desktop:first:ml-0 desktop:last:pr-0 desktop:pb-3',
      fourItems: ' mobile:last:border-none desktop:w-[264px] desktop:odd:border-b desktop:pb-0 desktop:odd:pb-3'
    }
  },
  defaultVariants: {
    intent: 'twoItems'
  }
})

export const containerImgConfig = cva('mobile:mx-auto mobile:mb-8, h-[172px] w-[280px] ', {
  variants: {
    intent: {
      twoItems: 'desktop:h-[232px] desktop:w-[500px]',
      fourItems: ' '
    },
    withButton: {
      true: true,
      false: false
    }
  },
  defaultVariants: {
    intent: 'twoItems'
  },
  compoundVariants: [
    {
      intent: 'fourItems',
      withButton: true,
      class: 'desktop:h-[360px] desktop:w-[500px]'
    },
    {
      intent: 'fourItems',
      withButton: false,
      class: 'desktop:h-[272px] desktop:w-[500px]'
    }
  ]
})
