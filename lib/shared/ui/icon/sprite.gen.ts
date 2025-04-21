export interface SpritesMap {
  arrows: 'arrowCircle' | 'arrowDownRight' | 'arrowLink' | 'arrowRight' | 'arrowRotate' | 'arrowScroll'
  brandLogos: 'logoBlack' | 'logoBusiness' | 'logoGray' | 'logoInsurance' | 'logoMain' | 'logoWhite'
  communication: 'phone'
  editor:
    | 'bold'
    | 'heading'
    | 'italic'
    | 'link'
    | 'list'
    | 'palette'
    | 'redo'
    | 'removeFormatting'
    | 'space'
    | 'strikethrough'
    | 'typography'
    | 'underline'
    | 'undo'
  files: 'border' | 'borderError' | 'documentFilled' | 'documentOutline' | 'upload'
  general: 'calendar' | 'check' | 'close' | 'edit' | 'hiddenEye' | 'menu' | 'plus' | 'reorder' | 'shield' | 'showEye'
  info: 'helpCircle' | 'warningCircle'
  logos: 'beeline' | 'megafon' | 'mts'
  social: 'classmates' | 'telegram' | 'vk'
  status: 'badSmile' | 'iconMark' | 'iconRetry' | 'iconUser'
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
      arrowDownRight: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
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
      },
      arrowRotate: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18
      },
      arrowScroll: {
        viewBox: '0 0 14 16',
        width: 14,
        height: 16
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
  communication: {
    filePath: 'communication.svg',
    items: {
      phone: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      }
    }
  },
  editor: {
    filePath: 'editor.svg',
    items: {
      bold: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      heading: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      italic: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      link: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      list: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      palette: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      redo: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      removeFormatting: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      space: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      strikethrough: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      typography: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      underline: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      undo: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
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
      menu: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      plus: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16
      },
      reorder: {
        viewBox: '0 0 12 18',
        width: 12,
        height: 18
      },
      shield: {
        viewBox: '0 0 25 24',
        width: 25,
        height: 24
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
      helpCircle: {
        viewBox: '0 0 12 12',
        width: 12,
        height: 12
      },
      warningCircle: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20
      }
    }
  },
  logos: {
    filePath: 'logos.svg',
    items: {
      beeline: {
        viewBox: '0 0 32 32',
        width: 32,
        height: 32
      },
      megafon: {
        viewBox: '0 0 32 32',
        width: 32,
        height: 32
      },
      mts: {
        viewBox: '0 0 32 32',
        width: 32,
        height: 32
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
  },
  status: {
    filePath: 'status.svg',
    items: {
      badSmile: {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      iconMark: {
        viewBox: '0 0 24 20',
        width: 24,
        height: 20
      },
      iconRetry: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      iconUser: {
        viewBox: '0 0 24 28',
        width: 24,
        height: 28
      }
    }
  }
}
