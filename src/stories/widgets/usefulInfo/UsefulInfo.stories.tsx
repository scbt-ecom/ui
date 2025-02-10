import { type Meta, type StoryObj } from '@storybook/react'
import {
  documentsBase,
  documentsFilledIconsWithLinks,
  documentsOutlineIconsWithLinks,
  htmlBase,
  htmlBaseWrapInAccordion,
  htmlWithLinksAndBullets,
  tableThreeColsFilled,
  tableThreeColsFilledWithoutHeadings,
  tableThreeColsSeparator,
  tableThreeColsSeparatorWithoutHeadings,
  tableThreeColsSeparatorWithTitleDescriptionAndHeadings,
  tableThreeColsSeparatorWithTitleDescriptionAndHeadingsWrapInAccordion,
  tableThreeFilledWithTitleDescriptionAndHeadings,
  tableThreeFilledWithTitleDescriptionAndHeadingsWrapInAccordion,
  tableTwoColsFilled,
  tableTwoColsFilledWithoutHeadings,
  tableTwoColsSeparator,
  tableTwoColsSeparatorWithoutHeadings
} from './mocks'
import { UsefulInfo } from '$/widgets'

const meta = {
  title: 'WIDGETS/UsefulInfo',
  component: UsefulInfo,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof UsefulInfo>

export default meta

type Story = StoryObj<typeof UsefulInfo>

export const MultiVariantsOnTab: Story = {
  args: {
    headline: 'Полезная информация',
    tabs: [
      {
        tabName: 'Условия',
        contents: [htmlBase, documentsBase]
      },
      {
        tabName: 'Документы',
        contents: [tableThreeColsFilled, documentsFilledIconsWithLinks]
      },
      {
        tabName: 'Описание',
        contents: [
          tableThreeColsFilledWithoutHeadings,
          tableThreeColsSeparatorWithTitleDescriptionAndHeadings,
          htmlBaseWrapInAccordion
        ]
      }
    ]
  }
}

export const HtmlVariations: Story = {
  args: {
    tabs: [
      {
        tabName: 'HTML базовый',
        contents: [htmlBase]
      },
      {
        tabName: 'HTML базовый обернутый в аккордеон',
        contents: [htmlBaseWrapInAccordion]
      },
      {
        tabName: 'HTML с ссылками и кастомным списком',
        contents: [htmlWithLinksAndBullets]
      }
    ]
  }
}

export const TablesVariations: Story = {
  args: {
    tabs: [
      {
        tabName: 'Таблица закрашенная две колонки',
        contents: [tableTwoColsFilled]
      },
      {
        tabName: 'Таблица закрашенная две колонки без заголовков колонки',
        contents: [tableTwoColsFilledWithoutHeadings]
      },
      {
        tabName: 'Таблица закрашенная три колонки',
        contents: [tableThreeColsFilled]
      },
      {
        tabName: 'Таблица закрашенная три колонки без заголовков колонки',
        contents: [tableThreeColsFilledWithoutHeadings]
      },
      {
        tabName: 'Таблица закрашенная три колонки с заголовком таблицы с заголовками колонок и описанием',
        contents: [tableThreeFilledWithTitleDescriptionAndHeadings]
      },
      {
        tabName: 'Таблица закрашенная три колонки с заголовком таблицы с заголовками колонок и описанием в аккордеоне',
        contents: [tableThreeFilledWithTitleDescriptionAndHeadingsWrapInAccordion]
      },

      {
        tabName: 'Таблица базовая две колонки',
        contents: [tableTwoColsSeparator]
      },
      {
        tabName: 'Таблица базовая две колонки без заголовков колонки',
        contents: [tableTwoColsSeparatorWithoutHeadings]
      },
      {
        tabName: 'Таблица базовая три колонки',
        contents: [tableThreeColsSeparator]
      },
      {
        tabName: 'Таблица базовая три колонки без заголовков колонки',
        contents: [tableThreeColsSeparatorWithoutHeadings]
      },
      {
        tabName: 'Таблица базовая три колонки с заголовком таблицы с заголовками колонок и описанием',
        contents: [tableThreeColsSeparatorWithTitleDescriptionAndHeadings]
      },
      {
        tabName: 'Таблица базовая три колонки с заголовком таблицы с заголовками колонок и описанием в аккордеоне',
        contents: [tableThreeColsSeparatorWithTitleDescriptionAndHeadingsWrapInAccordion]
      }
    ]
  }
}

export const DocumentsVariations: Story = {
  args: {
    tabs: [
      {
        tabName: 'Документы базовые',
        contents: [documentsBase]
      },
      {
        tabName: 'Документы с дополнительными текстом,заголовком и типом иконок outline',
        contents: [documentsOutlineIconsWithLinks]
      },
      {
        tabName: 'Документы с дополнительными текстом,заголовком и типом иконок filled',
        contents: [documentsFilledIconsWithLinks]
      }
    ]
  }
}
