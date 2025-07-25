import { type Meta, type StoryObj } from '@storybook/react'
import {
  documentsBase,
  documentsFilledIconsWithLinks,
  documentsOutlineIconsWithLinks,
  expertsBase,
  expertsMulti,
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
import { getUuid } from '$/shared/utils'
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
        tabId: getUuid(),
        tabName: 'Условия',
        contents: [htmlBase, documentsBase, expertsBase]
      },
      {
        tabId: getUuid(),
        tabName: 'Документы',
        contents: [tableThreeColsFilled, documentsFilledIconsWithLinks]
      },
      {
        tabId: getUuid(),
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
      { tabId: getUuid(), tabName: 'HTML базовый', contents: [htmlBase] },
      { tabId: getUuid(), tabName: 'HTML базовый обернутый в аккордеон', contents: [htmlBaseWrapInAccordion] },
      { tabId: getUuid(), tabName: 'HTML с ссылками и кастомным списком', contents: [htmlWithLinksAndBullets] }
    ]
  }
}

export const TablesVariations: Story = {
  args: {
    tabs: [
      { tabId: getUuid(), tabName: 'Таблица закрашенная две колонки', contents: [tableTwoColsFilled] },
      {
        tabId: getUuid(),
        tabName: 'Таблица закрашенная две колонки без заголовков колонки',
        contents: [tableTwoColsFilledWithoutHeadings]
      },
      { tabId: getUuid(), tabName: 'Таблица закрашенная три колонки', contents: [tableThreeColsFilled] },
      {
        tabId: getUuid(),
        tabName: 'Таблица закрашенная три колонки без заголовков колонки',
        contents: [tableThreeColsFilledWithoutHeadings]
      },
      {
        tabId: getUuid(),
        tabName: 'Таблица закрашенная три колонки с заголовком таблицы с заголовками колонок и описанием',
        contents: [tableThreeFilledWithTitleDescriptionAndHeadings]
      },
      {
        tabId: getUuid(),
        tabName: 'Таблица закрашенная три колонки с заголовком таблицы с заголовками колонок и описанием в аккордеоне',
        contents: [tableThreeFilledWithTitleDescriptionAndHeadingsWrapInAccordion]
      },

      { tabId: getUuid(), tabName: 'Таблица базовая две колонки', contents: [tableTwoColsSeparator] },
      {
        tabId: getUuid(),
        tabName: 'Таблица базовая две колонки без заголовков колонки',
        contents: [tableTwoColsSeparatorWithoutHeadings]
      },
      { tabId: getUuid(), tabName: 'Таблица базовая три колонки', contents: [tableThreeColsSeparator] },
      {
        tabId: getUuid(),
        tabName: 'Таблица базовая три колонки без заголовков колонки',
        contents: [tableThreeColsSeparatorWithoutHeadings]
      },
      {
        tabId: getUuid(),
        tabName: 'Таблица базовая три колонки с заголовком таблицы с заголовками колонок и описанием',
        contents: [tableThreeColsSeparatorWithTitleDescriptionAndHeadings]
      },
      {
        tabId: getUuid(),
        tabName: 'Таблица базовая три колонки с заголовком таблицы с заголовками колонок и описанием в аккордеоне',
        contents: [tableThreeColsSeparatorWithTitleDescriptionAndHeadingsWrapInAccordion]
      }
    ]
  }
}

export const DocumentsVariations: Story = {
  args: {
    tabs: [
      { tabId: getUuid(), tabName: 'Документы базовые', contents: [documentsBase] },
      {
        tabId: getUuid(),
        tabName: 'Документы с дополнительными текстом,заголовком и типом иконок outline',
        contents: [documentsOutlineIconsWithLinks]
      },
      {
        tabId: getUuid(),
        tabName: 'Документы с дополнительными текстом,заголовком и типом иконок filled',
        contents: [documentsFilledIconsWithLinks]
      }
    ]
  }
}

export const ExpertsVariations: Story = {
  args: {
    tabs: [
      {
        tabId: getUuid(),
        tabName: 'Эксперты базовые',
        contents: [expertsBase]
      },
      {
        tabId: getUuid(),
        tabName: 'Эксперты несколько карточек',
        contents: [expertsMulti]
      }
    ]
  }
}
