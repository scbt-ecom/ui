import type { Contents } from '$/widgets/usefulInfo/model'

const description =
  '<p class="text-dark" data-pm-slice="1 1 []"><a class="text-color-primary-default underline underline-offset-4" href="https://sovcombank.ru/apply/credit/kredit-na-kartu/" target="_blank" rel="noopener noreferrer"><u>Справка о доходах по форме банка</u></a></p>\n' +
  '<p class="text-dark"><a class="text-color-primary-default underline underline-offset-4" href="https://sovcombank.ru/pages/aktualnyje-pamyatki" target="_blank" rel="noopener noreferrer"><u>Актуальные страховые памятки</u></a></p>'

const docs = [
  {
    url: 'http://localhost:5173/entities/useful-info',
    size: '400',
    label: 'Общая информация по кредитам'
  },
  {
    url: 'http://localhost:5173/entities/useful-info',
    size: '359',
    label: 'Тарифы кредитования для физических лиц'
  },
  {
    url: 'http://localhost:5173/entities/useful-info',
    size: '333',
    label: 'Общие условия рефинансирования'
  }
]

export const documentsBase: Contents = {
  entity: {
    variant: 'DOCUMENTS',
    details: [
      {
        iconType: 'documentOutline',
        docs
      }
    ]
  }
}

export const documentsOutlineIconsWithLinks: Contents = {
  entity: {
    variant: 'DOCUMENTS',
    details: [
      {
        iconType: 'documentOutline',
        title: 'Общая памятка',
        description,
        docs
      }
    ]
  }
}

export const documentsFilledIconsWithLinks: Contents = {
  entity: {
    variant: 'DOCUMENTS',
    details: [
      {
        iconType: 'documentFilled',
        title: 'Общая памятка',
        description,
        docs
      }
    ]
  }
}
