import { type Config, type FooterPhones, type FooterSocialLinks } from '$/widgets/footer/model/types'

export const defaultCopyright = `
  <p>
    © 2004-2024, ПАО «Совкомбанк». Все права защищены. <br /> Генеральная лицензия Банка России №963 от
    5 декабря 2014 г.
  </p>`

export const defaultPhones: FooterPhones[] = [
  { phone: '88001000006', text: 'Звонок по России (бесплатно)' },
  { phone: '74959880000', text: 'Для звонков из-за рубежа (платно)' }
]

export const defaultSocialsLinks: FooterSocialLinks[] = [
  { iconName: 'social/vk', href: 'https://vk.com/sovcombank' },
  { iconName: 'social/telegram', href: 'https://t.me/sovcombankofficial' },
  { iconName: 'social/classmates', href: 'https://ok.ru/paosovcombank' }
]

export const defaultNavigationLinks: Config['details'] = [
  {
    column: [
      {
        groupLabel: 'Совкомбанк',
        links: [
          { label: 'О банке', path: '/' },
          { label: 'Реквизиты и лицензии', path: '/' },
          { label: 'Пресс-центр', path: '/' },
          { label: 'Удостоверяющий центр ПАО «Совкомбанк»', path: '/' },
          { label: 'Работа у нас', path: '/' },
          { label: 'Контакты', path: '/' },
          { label: 'Раскрытие информации', path: '/' },
          { label: 'Страница раскрытия информации в Интерфакс', path: '/' },
          { label: 'Реализация залогового имущества', path: '/' },
          { label: 'Клиентам и партнерам', path: '/' },
          { label: 'Биометрия', path: '/' },
          { label: 'Стандарты безопасности', path: '/' },
          { label: 'Информация о процентных ставках по договорам банковского вклада с физическими лицами', path: '/' },
          { label: 'ООО «Совком Финанс»', path: '/' },
          { label: 'Безопасность', path: '/' }
        ]
      }
    ]
  },
  {
    column: [
      {
        groupLabel: 'Сервисы',
        links: [
          { label: 'Подарочная карта «Халва»', path: '/' },
          { label: 'Страховые продукты', path: '/' },
          { label: 'МультиЮрист', path: '/' },
          { label: 'Единая социальная карта «Уралочка»', path: '/' },
          { label: 'Единая Карта Жителя Мурманской области', path: '/' },
          { label: 'Безопасные расчёты', path: '/' },
          { label: 'Улучшение кредитной истории', path: '/' },
          { label: 'Дистанционные сервисы Совкомбанка', path: '/' },
          { label: 'Программы реструктуризации долга', path: '/' }
        ]
      }
    ]
  },
  {
    column: [
      {
        groupLabel: 'Услуги банка',
        links: [
          { label: 'Карты', path: '/' },
          { label: 'Кредиты', path: '/' },
          { label: 'Кредиты наличными', path: '/' },
          { label: 'Ипотека', path: '/' },
          { label: 'Автокредиты', path: '/' },
          { label: 'Кредитный калькулятор', path: '/' },
          { label: 'Вклады', path: '/' },
          { label: 'Инвестиции', path: '/' },
          { label: 'Платежи', path: '/' },
          { label: 'Сервисы', path: '/' },
          { label: 'Малому бизнесу и ИП', path: '/' },
          { label: 'Корпоративным клиентам', path: '/' },
          { label: 'CIB', path: '/' },
          { label: 'Драгоценные металлы в слитках', path: '/' },
          { label: 'Счета в драгоценных металлах', path: '/' }
        ]
      }
    ]
  },
  {
    column: [
      {
        groupLabel: 'Клиентам других банков',
        links: [
          { label: 'Держателям карт рассрочки Банка Хоум Кредит', path: '/' },
          { label: 'ПАО КБ «Восточный»', path: '/' },
          { label: 'Держателям карт «Совесть»', path: '/' },
          { label: 'АО «Нордеа Банк»', path: '/' },
          { label: 'ЗАО «ДжиИ Мани банк»', path: '/' },
          { label: 'АО «Меткомбанк»', path: '/' },
          { label: 'АКБ «РосЕвроБанк» (АО)', path: '/' },
          { label: 'ПАО «Татфондбанк»', path: '/' },
          { label: 'АО АКБ «Экспресс-Волга»', path: '/' },
          { label: 'АО «ВКАБАНК»', path: '/' },
          { label: 'ООО «ОНЕЙ БАНК»', path: '/' },
          { label: 'АО «Евразийский»', path: '/' },
          { label: 'АО «НФК»', path: '/' },
          { label: 'ООО «РТС-Капитал»', path: '/' },
          { label: 'ООО «ИК Септем Капитал»', path: '/' },
          { label: 'Помощь', path: '/' },
          { label: 'Офисы и банкоматы', path: '/' }
        ]
      }
    ]
  }
]
