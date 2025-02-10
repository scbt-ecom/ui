import type { Contents } from '$/widgets/usefulInfo/model'

const twoColsRows = [
  { row: [{ cell: 'Заемщик' }, { cell: 'Физическое лицо, индивидуальный предприниматель, собственник бизнеса' }] },
  { row: [{ cell: 'Гражданство' }, { cell: 'Российская Федерация' }] },
  { row: [{ cell: 'Регистрация' }, { cell: 'Постоянная либо временная регистрация на территории РФ' }] },
  { row: [{ cell: 'Возраст на момент предоставления кредита ' }, { cell: 'Не менее 18 лет*' }] },
  { row: [{ cell: 'Возраст на момент возврата кредита по договору' }, { cell: '85 лет*' }] }
]

const threeColsRows = [
  { row: [{ cell: 'Новостройка' }, { cell: 'от 21,493% до 43,196%' }, { cell: 'от 14,99%' }] },
  { row: [{ cell: 'Недвижимость на вторичном рынке' }, { cell: 'от 21,659% до 44,125%' }, { cell: 'от 14,99%' }] },
  { row: [{ cell: 'Дальневосточная ипотека' }, { cell: 'от 2,988% до 5,180%' }, { cell: 'от 1,99%' }] },
  {
    row: [{ cell: 'Ипотека с господдержкой для семей с детьми' }, { cell: 'от 5,627% до 9,616%' }, { cell: 'от 5,99%' }]
  },
  { row: [{ cell: 'Ипотека для ИТ-специалистов' }, { cell: 'от 5,996% до 8,191%' }, { cell: 'от 5,996% до 8,191%' }] }
]

const twoColsHeadings = [{ heading: 'Процентная ставка' }, { heading: 'Страхование заемщика' }]
const threeColsHeadings = [{ heading: 'Программа кредитования*' }, { heading: 'Полная стоимость кредита' }, { heading: 'Ставка' }]
const description =
  '*Ставки указаны с учетом подключения услуги «Снижение процентной ставки» и применимой ' +
  'Акции с использованием карты Халва, с учетом заключения всех видов договоров страхования: имущественного, личного, титульного.\n' +
  'Подробнее'

export const tableTwoColsFilled: Contents = {
  entity: {
    variant: 'TABLE',
    details: [
      {
        columnsVariant: 'twoCols',
        tableVariant: 'filled',
        headings: [{ heading: 'Процентная ставка' }, { heading: 'Страхование заемщика' }],
        rows: twoColsRows
      }
    ]
  }
}

export const tableTwoColsFilledWithoutHeadings: Contents = {
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
        headings: [{ heading: 'Программа' }, { heading: 'ПСК' }, { heading: 'Ставка' }],
        rows: threeColsRows
      }
    ]
  }
}

export const tableTwoColsSeparator: Contents = {
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
