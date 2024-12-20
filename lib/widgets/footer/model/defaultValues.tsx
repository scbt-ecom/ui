import type { IFooterNavLinks, IFooterPhones, IFooterSocialLinks } from './types'

export const defaultCopyright = (
  <>
    © 2004-2024, ПАО «Совкомбанк». Все права защищены. <br className='mobile:hidden' /> Генеральная лицензия Банка России №963 от
    5 декабря 2014 г.
  </>
)

export const defaultPhones: IFooterPhones[] = [
  { phone: '8 800 100-00-06', text: 'Звонок по России (бесплатно)' },
  { phone: '+7 (495) 988 00 00', text: 'Для звонков из-за рубежа (платно)' }
]

export const defaultSocialsLinks: IFooterSocialLinks[] = [
  { iconName: 'social/vk', href: 'https://vk.com/sovcombank' },
  { iconName: 'social/telegram', href: 'https://t.me/sovcombankofficial' },
  { iconName: 'social/classmates', href: 'https://ok.ru/paosovcombank' }
]

export const defaultNavigationLinks: IFooterNavLinks[] = [
  {
    groupLabel: 'Совкомбанк',
    links: [
      { text: 'О банке', href: '/' },
      { text: 'Реквизиты и лицензии', href: '/' },
      { text: 'Пресс-центр', href: '/' },
      { text: 'Удостоверяющий центр ПАО «Совкомбанк»', href: '/' },
      { text: 'Работа у нас', href: '/' },
      { text: 'Контакты', href: '/' },
      { text: 'Раскрытие информации', href: '/' },
      { text: 'Страница раскрытия информации в Интерфакс', href: '/' },
      { text: 'Реализация залогового имущества', href: '/' },
      { text: 'Клиентам и партнерам', href: '/' },
      { text: 'Биометрия', href: '/' },
      { text: 'Стандарты безопасности', href: '/' },
      { text: 'Информация о процентных ставках по договорам банковского вклада с физическими лицами', href: '/' },
      { text: 'ООО «Совком Финанс»', href: '/' },
      { text: 'Безопасность', href: '/' }
    ]
  },
  {
    groupLabel: 'Сервисы',
    links: [
      { text: 'Подарочная карта «Халва»', href: '/' },
      { text: 'Страховые продукты', href: '/' },
      { text: 'МультиЮрист', href: '/' },
      { text: 'Единая социальная карта «Уралочка»', href: '/' },
      { text: 'Единая Карта Жителя Мурманской области', href: '/' },
      { text: 'Безопасные расчёты', href: '/' },
      { text: 'Улучшение кредитной истории', href: '/' },
      { text: 'Дистанционные сервисы Совкомбанка', href: '/' },
      { text: 'Программы реструктуризации долга', href: '/' }
    ]
  },
  {
    groupLabel: 'Услуги банка',
    links: [
      { text: 'Карты', href: '/' },
      { text: 'Кредиты', href: '/' },
      { text: 'Кредиты наличными', href: '/' },
      { text: 'Ипотека', href: '/' },
      { text: 'Автокредиты', href: '/' },
      { text: 'Кредитный калькулятор', href: '/' },
      { text: 'Вклады', href: '/' },
      { text: 'Инвестиции', href: '/' },
      { text: 'Платежи', href: '/' },
      { text: 'Сервисы', href: '/' },
      { text: 'Малому бизнесу и ИП', href: '/' },
      { text: 'Корпоративным клиентам', href: '/' },
      { text: 'CIB', href: '/' },
      { text: 'Драгоценные металлы в слитках', href: '/' },
      { text: 'Счета в драгоценных металлах', href: '/' }
    ]
  },
  {
    groupLabel: 'Клиентам других банков',
    links: [
      { text: 'Держателям карт рассрочки Банка Хоум Кредит', href: '/' },
      { text: 'ПАО КБ «Восточный»', href: '/' },
      { text: 'Держателям карт «Совесть»', href: '/' },
      { text: 'АО «Нордеа Банк»', href: '/' },
      { text: 'ЗАО «ДжиИ Мани банк»', href: '/' },
      { text: 'АО «Меткомбанк»', href: '/' },
      { text: 'АКБ «РосЕвроБанк» (АО)', href: '/' },
      { text: 'ПАО «Татфондбанк»', href: '/' },
      { text: 'АО АКБ «Экспресс-Волга»', href: '/' },
      { text: 'АО «ВКАБАНК»', href: '/' },
      { text: 'ООО «ОНЕЙ БАНК»', href: '/' },
      { text: 'АО «Евразийский»', href: '/' },
      { text: 'АО «НФК»', href: '/' },
      { text: 'ООО «РТС-Капитал»', href: '/' },
      { text: 'ООО «ИК Септем Капитал»', href: '/' },
      { text: 'Помощь', href: '/' },
      { text: 'Офисы и банкоматы', href: '/' }
    ]
  }
]
