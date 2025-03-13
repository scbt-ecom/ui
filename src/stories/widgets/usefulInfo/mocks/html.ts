import { getUuid } from '$/shared/utils'
import type { Contents } from '$/widgets/usefulInfo/model'

const htmlContent =
  '<p class="text-dark"><strong class="font-bold">Получение денежных средств</strong></p>\n' +
  '<p class="text-dark"><br />&ndash; Рассмотрим заявку за 5 минут<br />&ndash; Наличными в отделении банка<br />&ndash; Зачисление на карту &laquo;Халва&raquo;</p>\n' +
  '<p class="text-dark"><br /><strong class="font-bold">Как внести платеж или погасить кредит досрочно</strong></p>\n' +
  '<p class="text-dark"><br />&ndash; В офисах или устройствах самообслуживания с помощью карты для внесения платежей по кредиту (идентификационная карта Банка)<br />&ndash; Через Интернет-банк<br />&ndash; Отделения Почты России<br />&ndash; Сторонние организации*</p>\n' +
  '<p class="text-[#5A6E85]"><br />*Взимается комиссия, установленная сторонними организациями</p>'

const htmlFull =
  '<p class="text-dark" data-pm-slice="0 0 []"><strong class="font-bold">Получение денежных средств</strong></p>\n' +
  '<p class="text-dark">&nbsp;</p>\n' +
  '<ul class="list-disc [&amp;&gt;li]:ml-4">\n' +
  '<li>\n' +
  '<p class="text-dark">Рассмотрим заявку за 5 минут</p>\n' +
  '</li>\n' +
  '<li>\n' +
  '<p class="text-dark">Наличными в отделении банка</p>\n' +
  '</li>\n' +
  '<li>\n' +
  '<p class="text-dark">Зачисление на карту &laquo;Халва&raquo;</p>\n' +
  '</li>\n' +
  '</ul>\n' +
  '<p class="text-dark"><br /><strong class="font-bold">Как внести платеж или погасить кредит досрочно</strong></p>\n' +
  '<p class="text-dark">&nbsp;</p>\n' +
  '<ul class="list-disc [&amp;&gt;li]:ml-4">\n' +
  '<li>\n' +
  '<p class="text-dark">В офисах или устройствах самообслуживания с помощью карты для внесения платежей по кредиту (идентификационная карта Банка)</p>\n' +
  '</li>\n' +
  '<li>\n' +
  '<p class="text-dark">Через Интернет-банк</p>\n' +
  '</li>\n' +
  '<li>\n' +
  '<p class="text-dark">Отделения Почты России</p>\n' +
  '</li>\n' +
  '<li>\n' +
  '<p class="text-dark">Сторонние организации*</p>\n' +
  '</li>\n' +
  '</ul>\n' +
  '<p class="text-[#5A6E85]"><br />*Взимается комиссия, установленная сторонними организациями</p>\n' +
  '<p class="text-dark">&nbsp;</p>\n' +
  '<p class="text-dark">&nbsp;</p>\n' +
  '<p class="text-dark">🔥 Обмен валюты в приложении <a class="text-color-primary-default underline underline-offset-4" href="https://halvacard.ru/lk2/?backurl=%2Flk%2Fpayments%2Fconversion%2Fshowcase" target="_blank" rel="noopener noreferrer">&laquo;Халва &mdash; Совкомбанк&raquo;</a>: курс онлайн лучше, чем в отделении*</p>\n' +
  '<p class="text-dark">Следите за нашими курсами наличной валюты в <a class="text-color-primary-default underline underline-offset-4" href="https://t.me/sovcomrates_msk" target="_blank" rel="noopener noreferrer">Telegram</a> 24/7</p>'

export const htmlBase: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'HTML',
    details: [
      {
        html: htmlContent
      }
    ]
  }
}

export const htmlBaseWrapInAccordion: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'HTML',
    details: [
      {
        config: {
          isAccordion: true,
          accordionTitle: 'Требования к заемщику'
        },
        html: htmlContent
      }
    ]
  }
}

export const htmlWithLinksAndBullets: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'HTML',
    details: [
      {
        html: htmlFull
      }
    ]
  }
}
