import { getUuid } from '$/shared/utils'
import type { Contents } from '$/widgets/usefulInfo/model'

const twoColsRows = [
  {
    row: [
      { cellId: getUuid(), cell: 'Заемщик' },
      { cellId: getUuid(), cell: 'Физическое лицо, индивидуальный предприниматель, собственник бизнеса' }
    ],
    rowId: getUuid()
  },
  {
    row: [
      { cellId: getUuid(), cell: 'Гражданство' },
      { cellId: getUuid(), cell: 'Российская Федерация' }
    ],
    rowId: getUuid()
  },
  {
    row: [
      { cellId: getUuid(), cell: 'Регистрация' },
      { cellId: getUuid(), cell: 'Постоянная либо временная регистрация на территории РФ' }
    ],
    rowId: getUuid()
  },
  {
    row: [
      { cellId: getUuid(), cell: 'Возраст на момент предоставления кредита ' },
      { cellId: getUuid(), cell: 'Не менее 18 лет*' }
    ],
    rowId: getUuid()
  },
  {
    row: [
      { cellId: getUuid(), cell: 'Возраст на момент возврата кредита по договору' },
      { cellId: getUuid(), cell: '85 лет*' }
    ],
    rowId: getUuid()
  }
]

const threeColsRows = [
  {
    rowId: getUuid(),
    row: [
      { cellId: getUuid(), cell: 'Новостройка' },
      { cellId: getUuid(), cell: 'от 21,493% до 43,196%' },
      { cellId: getUuid(), cell: 'от 14,99%' }
    ]
  },
  {
    rowId: getUuid(),
    row: [
      { cellId: getUuid(), cell: 'Недвижимость на вторичном рынке' },
      { cellId: getUuid(), cell: 'от 21,659% до 44,125%' },
      { cellId: getUuid(), cell: 'от 14,99%' }
    ]
  },
  {
    rowId: getUuid(),
    row: [
      { cellId: getUuid(), cell: 'Дальневосточная ипотека' },
      { cellId: getUuid(), cell: 'от 2,988% до 5,180%' },
      { cellId: getUuid(), cell: 'от 1,99%' }
    ]
  },
  {
    rowId: getUuid(),
    row: [
      { cellId: getUuid(), cell: 'Ипотека с господдержкой для семей с детьми' },
      { cellId: getUuid(), cell: 'от 5,627% до 9,616%' },
      { cellId: getUuid(), cell: 'от 5,99%' }
    ]
  },
  {
    rowId: getUuid(),
    row: [
      { cellId: getUuid(), cell: 'Ипотека для ИТ-специалистов' },
      { cellId: getUuid(), cell: 'от 5,996% до 8,191%' },
      { cellId: getUuid(), cell: 'от 5,996% до 8,191%' }
    ]
  }
]

const twoColsHeadings = [
  { headingId: getUuid(), heading: 'Процентная ставка' },
  { headingId: getUuid(), heading: 'Страхование заемщика' }
]

const threeColsHeadings = [
  { headingId: getUuid(), heading: 'Программа кредитования*' },
  { headingId: getUuid(), heading: 'Полная стоимость кредита' },
  { headingId: getUuid(), heading: 'Ставка' }
]

const description =
  '*Ставки указаны с учетом подключения услуги «Снижение процентной ставки» и применимой ' +
  'Акции с использованием карты Халва, с учетом заключения всех видов договоров страхования: имущественного, личного, титульного.\n' +
  'Подробнее'

export const tableTwoColsFilled: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'twoCols',
        tableVariant: 'filled',
        headings: [
          { heading: 'Процентная ставка', headingId: getUuid() },
          { heading: 'Страхование заемщика', headingId: getUuid() }
        ],
        rows: twoColsRows
      }
    ]
  }
}

export const tableTwoColsFilledWithoutHeadings: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'twoCols',
        tableVariant: 'filled',
        rows: twoColsRows
      }
    ]
  }
}

export const tableThreeColsFilled: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'threeCols',
        tableVariant: 'filled',
        headings: threeColsHeadings,
        rows: threeColsRows
      }
    ]
  }
}

export const tableThreeColsFilledWithoutHeadings: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'threeCols',
        tableVariant: 'filled',
        rows: threeColsRows
      }
    ]
  }
}

export const tableThreeFilledWithTitleDescriptionAndHeadings: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        title: 'Программа',
        description,
        columnsVariant: 'threeCols',
        tableVariant: 'filled',
        headings: threeColsHeadings,
        rows: threeColsRows
      }
    ]
  }
}

export const tableThreeFilledWithTitleDescriptionAndHeadingsWrapInAccordion: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        config: {
          accordionTitle: 'Подробная информация',
          isAccordion: true
        },
        title: 'Программа',
        description,
        columnsVariant: 'threeCols',
        tableVariant: 'filled',
        headings: [
          { heading: 'Программа', headingId: getUuid() },
          { heading: 'ПСК', headingId: getUuid() },
          { heading: 'Ставка', headingId: getUuid() }
        ],
        rows: threeColsRows
      }
    ]
  }
}

export const tableTwoColsSeparator: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'twoCols',
        tableVariant: 'separator',
        headings: twoColsHeadings,
        rows: twoColsRows
      }
    ]
  }
}

export const tableTwoColsSeparatorWithoutHeadings: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'twoCols',
        tableVariant: 'separator',
        rows: twoColsRows
      }
    ]
  }
}

export const tableThreeColsSeparator: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'threeCols',
        tableVariant: 'separator',
        headings: threeColsHeadings,
        rows: threeColsRows
      }
    ]
  }
}

export const tableThreeColsSeparatorWithoutHeadings: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'threeCols',
        tableVariant: 'separator',
        rows: threeColsRows
      }
    ]
  }
}

export const tableThreeColsSeparatorWithTitleDescriptionAndHeadings: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        title: 'Программа',
        description,
        columnsVariant: 'threeCols',
        tableVariant: 'separator',
        headings: threeColsHeadings,
        rows: threeColsRows
      }
    ]
  }
}

export const tableThreeColsSeparatorWithTitleDescriptionAndHeadingsWrapInAccordion: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'TABLE',
    details: [
      {
        config: {
          accordionTitle: 'Подробная информация',
          isAccordion: true
        },
        title: 'Программа',
        description,
        columnsVariant: 'threeCols',
        tableVariant: 'separator',
        headings: threeColsHeadings,
        rows: threeColsRows
      }
    ]
  }
}
