import type { Column, InterLinkingRoot } from '$/widgets/interLinking/model/types'

const mockColumns: Column[] = [
  {
    column: [
      {
        groupLabel: 'Калькулятор',
        links: [
          {
            label: 'Досрочное погашение',
            path: 'https://sovcombank.ru/apply/credit/kalkulyator-dosrochnogo-pogasheniya-kredita/'
          },
          {
            label: 'Калькулятор онлайн',
            path: 'https://sovcombank.ru/apply/credit/kalkulyator-kredita/'
          },
          {
            label: 'Калькулятор со страховкой',
            path: 'https://sovcombank.ru/apply/credit/kalkulyator-so-strahovkoj/'
          }
        ]
      },
      {
        groupLabel: 'Потребительский кредит',
        links: [
          {
            label: 'По паспорту',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-kartu-po-pasportu/'
          },
          {
            label: 'На карту',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-kartu/'
          },
          {
            label: 'Низкая ставка',
            path: 'https://sovcombank.ru/apply/credit/kredit-s-nizkoj-procentnoj-stavkoj/'
          },
          {
            label: 'Со страхованием',
            path: 'https://sovcombank.ru/apply/credit/kredit-so-strahovkoj/'
          },
          {
            label: 'Онлайн-заявка',
            path: 'https://sovcombank.ru/apply/credit/onlajn-zayavka-na-kredit-nalichnymi/'
          },
          {
            label: 'Предпринимателям',
            path: 'https://sovcombank.ru/credits/cash/individualnim-predprinimatelyam'
          }
        ]
      },
      {
        groupLabel: 'Особые условия',
        links: [
          {
            label: 'Без кредитной истории',
            path: 'https://sovcombank.ru/apply/credit/bez-kreditnoj-istorii/'
          },
          {
            label: 'Экспресс-кредит',
            path: 'https://sovcombank.ru/apply/credit/bystryj-kredit-nalichnymi/'
          },
          {
            label: 'Через Госуслуги',
            path: 'https://sovcombank.ru/apply/credit/cherez-gosuslugi/'
          },
          {
            label: 'Без визита в банк',
            path: 'https://sovcombank.ru/apply/credit/kredit-bez-poseshcheniya-banka/'
          },
          {
            label: 'Без 2-НДФЛ',
            path: 'https://sovcombank.ru/apply/credit/kredit-bez-spravki-2-NDFL/'
          },
          {
            label: 'Без страхования',
            path: 'https://sovcombank.ru/apply/credit/kredit-bez-strahovki/'
          },
          {
            label: 'Безработным',
            path: 'https://sovcombank.ru/apply/credit/kredit-bezrabotnym/'
          },
          {
            label: 'Без отказа',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-kartu-bez-otkaza/'
          },
          {
            label: 'Без справок',
            path: 'https://sovcombank.ru/apply/credit/kredit-nalichnymi-bez-spravok-i-poruchiteley/'
          },
          {
            label: 'В день обращения',
            path: 'https://sovcombank.ru/apply/credit/kredit-nalichnymi-v-den-obrashcheniya/'
          },
          {
            label: 'По 2 документам',
            path: 'https://sovcombank.ru/apply/credit/kredit-po-dvum-dokumentam/'
          },
          {
            label: 'Для самозанятых',
            path: 'https://sovcombank.ru/apply/credit/kredity-dlya-samozanyatyh/'
          },
          {
            label: 'Реструктуризация',
            path: 'https://sovcombank.ru/apply/credit/restruktucrizaciya-kredita/'
          },
          {
            label: 'Социальный',
            path: 'https://sovcombank.ru/apply/credit/socialnyj/'
          }
        ]
      }
    ]
  },
  {
    column: [
      {
        groupLabel: 'По возрасту',
        links: [
          {
            label: 'От 20 лет',
            path: 'https://sovcombank.ru/apply/credit/kredit-s-20-let/'
          },
          {
            label: 'Пенсионерам',
            path: 'https://sovcombank.ru/apply/credit/kredit-pensioneram-do-75/'
          },
          {
            label: 'Пенсионерам до 85 лет',
            path: 'https://sovcombank.ru/apply/credit/kredit-pensioneram-do-85-let/'
          }
        ]
      },
      {
        groupLabel: 'Целевой кредит',
        links: [
          {
            label: 'Целевой',
            path: 'https://sovcombank.ru/apply/credit/celevoj-kredit/'
          },
          {
            label: 'На iPhone',
            path: 'https://sovcombank.ru/apply/credit/iphone-v-kredit/'
          },
          {
            label: 'На лечение',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-lechenie/'
          },
          {
            label: 'На отдых',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-otdyh/'
          },
          {
            label: 'На покупку телефона',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-telefon/'
          },
          {
            label: 'На ремонт авто',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-remont-mashiny/'
          },
          {
            label: 'На ремонт',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-remont/'
          },
          {
            label: 'На свадьбу',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-svadbu/'
          },
          {
            label: 'На строительство жилья',
            path: 'https://sovcombank.ru/apply/credit/kredity-na-stroitelstvo-zhilya/'
          },
          {
            label: 'На покупку квартиры',
            path: 'https://sovcombank.ru/apply/credit/na-pokupku-kvartiry/'
          },
          {
            label: 'На образование',
            path: 'https://sovcombank.ru/apply/credit/obrazovatelnyj-kredit/'
          }
        ]
      }
    ]
  },
  {
    column: [
      {
        groupLabel: 'В других городах',
        links: [
          {
            label: 'Белгород',
            path: 'https://sovcombank.ru/apply/credit/city-belgorod/'
          },
          {
            label: 'Волгоград',
            path: 'https://sovcombank.ru/apply/credit/city-volgograd/'
          },
          {
            label: 'Воронеж',
            path: 'https://sovcombank.ru/apply/credit/city-voronezh/'
          },
          {
            label: 'Екатеринбург',
            path: 'https://sovcombank.ru/apply/credit/city-ekaterinburg/'
          },
          {
            label: 'Казань',
            path: 'https://sovcombank.ru/apply/credit/city-kazan/'
          },
          {
            label: 'Калининград',
            path: 'https://sovcombank.ru/apply/credit/city-kaliningrad/'
          },
          {
            label: 'Красноярск',
            path: 'https://sovcombank.ru/apply/credit/city-krasnoyarsk/'
          },
          {
            label: 'Липецк',
            path: 'https://sovcombank.ru/apply/credit/city-lipeck/'
          },
          {
            label: 'Москва',
            path: 'https://sovcombank.ru/apply/credit/city-moskva/'
          },
          {
            label: 'Нижний Новгород',
            path: 'https://sovcombank.ru/apply/credit/city-nizhnij-novgorod/'
          },
          {
            label: 'Новороссийск',
            path: 'https://sovcombank.ru/apply/credit/city-novorossijsk/'
          },
          {
            label: 'Новосибирск',
            path: 'https://sovcombank.ru/apply/credit/city-novosibirsk/'
          },
          {
            label: 'Омск',
            path: 'https://sovcombank.ru/apply/credit/city-omsk/'
          },
          {
            label: 'Орел',
            path: 'https://sovcombank.ru/apply/credit/city-orel/'
          },
          {
            label: 'Пермь',
            path: 'https://sovcombank.ru/apply/credit/city-perm/'
          },
          {
            label: 'Ростов-на-Дону',
            path: 'https://sovcombank.ru/apply/credit/city-rostov-na-donu/'
          },
          {
            label: 'Рязань',
            path: 'https://sovcombank.ru/apply/credit/city-ryazan/'
          },
          {
            label: 'Самара',
            path: 'https://sovcombank.ru/apply/credit/city-samara/'
          },
          {
            label: 'Санкт-Петербург',
            path: 'https://sovcombank.ru/apply/credit/city-spb/'
          },
          {
            label: 'Саратов',
            path: 'https://sovcombank.ru/apply/credit/city-saratov/'
          },
          {
            label: 'Тверь',
            path: 'https://sovcombank.ru/apply/credit/city-tver/'
          },
          {
            label: 'Тольятти',
            path: 'https://sovcombank.ru/apply/credit/city-tolyatti/'
          },
          {
            label: 'Уфа',
            path: 'https://sovcombank.ru/apply/credit/city-ufa/'
          },
          {
            label: 'Челябинск',
            path: 'https://sovcombank.ru/apply/credit/city-chelyabinsk/'
          },
          {
            label: 'Ярославль',
            path: 'https://sovcombank.ru/apply/credit/city-yaroslavl/'
          }
        ]
      },

      {
        groupLabel: 'По сроку',
        links: [
          {
            label: '3 месяца',
            path: 'https://sovcombank.ru/apply/credit/na-3-mesyaca/'
          },
          {
            label: '6 месяцев',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-polgoda/'
          },
          {
            label: '1 год',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-kartu-na-god/'
          },
          {
            label: '2 года',
            path: 'https://sovcombank.ru/apply/credit/na-2-goda/'
          },
          {
            label: '3 года',
            path: 'https://sovcombank.ru/apply/credit/na-3-goda/'
          },
          {
            label: '4 года',
            path: 'https://sovcombank.ru/apply/credit/na-4-goda/'
          },
          {
            label: '5 лет',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-5-let/'
          },
          {
            label: '6 лет',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-6-let/'
          },
          {
            label: '7 лет',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-7-let/'
          },
          {
            label: '8 лет',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-8-let/'
          },
          {
            label: '15 лет',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-15-let/'
          },
          {
            label: 'Долгосрочный',
            path: 'https://sovcombank.ru/apply/credit/dolgosrochnyj-kredit/'
          }
        ]
      }
    ]
  },
  {
    column: [
      {
        groupLabel: 'По сумме',
        links: [
          {
            label: '30 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/30000-rublej/'
          },
          {
            label: '40 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/40000-rublej/'
          },
          {
            label: '50 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-50000-rublej/'
          },
          {
            label: '60 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/60000-rublej/'
          },
          {
            label: '70 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/70000-rublej/'
          },
          {
            label: '80 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-80000/'
          },
          {
            label: 'Кредит на погашение других кредитов',
            path: 'https://sovcombank.ru/apply/credit/na-pogashenie-kreditov/'
          },
          {
            label: '100 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/100000-na-kartu/'
          },
          {
            label: '150 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-150000-rublej/'
          },
          {
            label: '200 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-200000-rublej/'
          },
          {
            label: '250 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-250000-rublej/'
          },
          {
            label: '300 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-300000-rublej/'
          },
          {
            label: '350 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-350000-rublej/'
          },
          {
            label: '400 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-400000-rublej/'
          },
          {
            label: '450 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-450000-rublej/'
          },
          {
            label: '500 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-500-000-rublej-nalichnymi/'
          },
          {
            label: '600 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-600000-rublej/'
          },
          {
            label: '650 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-650000-rublej/'
          },
          {
            label: '700 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/na-700000-rublej/'
          },
          {
            label: '750 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-750000/'
          },
          {
            label: '800 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-800000/'
          },
          {
            label: '900 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-900000/'
          },
          {
            label: '1 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-1-000-000-rublej-nalichnymi/'
          },
          {
            label: '1 500 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-na-1500000-rublej/'
          },
          {
            label: '1 800 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-1800000/'
          },
          {
            label: '2 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-2-000-000-rublej-nalichnymi/'
          },
          {
            label: '2 500 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/2500000-rublej-nalichnymi/'
          },
          {
            label: '3 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-nalichnymi-na-3-000-000-rublej/'
          },
          {
            label: '3 500 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-3500000/'
          },
          {
            label: '4 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-4-000-000-rublej-nalichnymi/'
          },
          {
            label: '4 500 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/4-500-000-rublej-nalichnymi/'
          },
          {
            label: '5 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/kredit-nalichnymi-na-5-000-000-rublej/'
          },
          {
            label: '6 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-6-mln-rublej/'
          },
          {
            label: '7 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-7000000/'
          },
          {
            label: '8 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-8000000/'
          },
          {
            label: '9 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-9000000/'
          },
          {
            label: '10 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-10-mln-rublej/'
          },
          {
            label: '15 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-15000000/'
          },
          {
            label: '16 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-16000000/'
          },
          {
            label: '17 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-17000000/'
          },
          {
            label: '25 000 000 рублей',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-25000000/'
          },
          {
            label: 'На большую сумму',
            path: 'https://sovcombank.ru/apply/credit/pod-zalog/nedvizhimosti/na-bolshuyu-summu/'
          }
        ]
      }
    ]
  }
]

export const MOCK_INTERLINKING_FOUR_COLS: InterLinkingRoot = {
  headline: 'Другие предложения по лизингу',
  config: {
    variant: 'fourCols',
    details: mockColumns
  }
}

export const MOCK_INTERLINKING_THREE_COLS: InterLinkingRoot = {
  headline: 'Другие предложения по лизингу',
  config: {
    variant: 'threeCols',
    details: [mockColumns[0], mockColumns[2], mockColumns[3]]
  }
}

export const MOCK_INTERLINKING_TWO_COLS: InterLinkingRoot = {
  headline: 'Другие предложения по лизингу',
  config: {
    variant: 'twoCols',
    details: [mockColumns[0], mockColumns[2]]
  }
}
