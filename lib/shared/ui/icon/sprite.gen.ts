export interface SpritesMap {
  arrows: 'arrowCircle' | 'arrowLink' | 'arrowRight'
  brandLogos: 'logoBlack' | 'logoBusiness' | 'logoGray' | 'logoInsurance' | 'logoMain' | 'logoWhite'
  files: 'border' | 'borderError' | 'documentFilled' | 'documentOutline' | 'upload'
  general: 'calendar' | 'check' | 'close' | 'edit' | 'hiddenEye' | 'plus' | 'showEye'
  info: 'warningCircle'
  social: 'classmates' | 'telegram' | 'vk'
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
      border: {
        viewBox: '0 0 476 64',
        width: 476,
        height: 64
      },
      borderError: {
        viewBox: '0 0 476 64',
        width: 476,
        height: 64
      },
      documentFilled: {
        viewBox: '0 0 22 28',
        width: 22,
        height: 28
      },
      documentOutline: {
        viewBox: '0 0 22 28',
        width: 22,
        height: 28
      },
      upload: {
        viewBox: '0 0 23 20',
        width: 23,
        height: 20
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
      },
      edit: {
        viewBox: '0 0 19 19',
        width: 19,
        height: 19
      },
      hiddenEye: {
        viewBox: '0 0 20 18',
        width: 20,
        height: 18
      },
      plus: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16
      },
      showEye: {
        viewBox: '0 0 20 14',
        width: 20,
        height: 14
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
  },
  social: {
    filePath: 'social.svg',
    items: {
      classmates: {
        viewBox: '0 0 9 15',
        width: 9,
        height: 15
      },
      telegram: {
        viewBox: '0 0 15 13',
        width: 15,
        height: 13
      },
      vk: {
        viewBox: '0 0 16 9',
        width: 16,
        height: 9
      }
    }
  }
}
