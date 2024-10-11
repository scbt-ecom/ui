export interface SpritesMap {
  arrows: 'arrowCircle' | 'arrowLink' | 'arrowRight'
  brandLogos: 'logoBlack' | 'logoBusiness' | 'logoGray' | 'logoInsurance' | 'logoMain' | 'logoWhite'
  files: 'documentFilled' | 'documentOutline'
  general: 'calendar' | 'check' | 'close'
  info: 'warningCircle'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  arrows: {
    filePath: 'arrows.svg',
    items: {
      arrowCircle: {
        viewBox: '0 0 32 32',
        width: 32,
        height: 32
      },
      arrowLink: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      arrowRight: {
        viewBox: '0 0 16 17',
        width: 16,
        height: 17
      }
    }
  },
  brandLogos: {
    filePath: 'brandLogos.svg',
    items: {
      logoBlack: {
        viewBox: '0 0 194 32',
        width: 194,
        height: 32
      },
      logoBusiness: {
        viewBox: '0 0 192 32',
        width: 192,
        height: 32
      },
      logoGray: {
        viewBox: '0 0 194 32',
        width: 194,
        height: 32
      },
      logoInsurance: {
        viewBox: '0 0 193 32',
        width: 193,
        height: 32
      },
      logoMain: {
        viewBox: '0 0 192 32',
        width: 192,
        height: 32
      },
      logoWhite: {
        viewBox: '0 0 194 32',
        width: 194,
        height: 32
      }
    }
  },
  files: {
    filePath: 'files.svg',
    items: {
      documentFilled: {
        viewBox: '0 0 22 28',
        width: 22,
        height: 28
      },
      documentOutline: {
        viewBox: '0 0 22 28',
        width: 22,
        height: 28
      }
    }
  },
  general: {
    filePath: 'general.svg',
    items: {
      calendar: {
        viewBox: '0 0 19 20',
        width: 19,
        height: 20
      },
      check: {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800
      },
      close: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      }
    }
  },
  info: {
    filePath: 'info.svg',
    items: {
      warningCircle: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20
      }
    }
  }
}
