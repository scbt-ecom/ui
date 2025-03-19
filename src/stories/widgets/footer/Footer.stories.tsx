import { type Meta, type StoryObj } from '@storybook/react'
import { defaultNavigationLinks } from './model/defaultValues'
import { Footer } from '$/widgets'

const meta = {
  title: 'WIDGETS/Footer',
  component: Footer,
  tags: ['autodocs']
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

const defaultLigal = `Кредит на бизнес цели, срок 3, 6, 9, 12, 18, 24, 36, 48, 60 мес. Ставка – от 22,9%*. *Точная процентная ставка
        устанавливается по соглашению сторон и определяется исходя из платёжеспособности и кредитоспособности клиента, а также
        иных индивидуальных особенностей клиента. Сумма 100 000 – 50 000 000 руб. Кредит выдается на карту “Халва”, открытый в
        Банке. Банк вправе отказать в предоставлении кредита без объяснения причины, а также запросить дополнительную информацию о
        клиенте. Предварительное одобрение не влечет обязательств Банка по выдаче кредита. В некоторых случаях срок рассмотрения
        заявки может составлять до 3 рабочих дней. Полный электронный документооборот при наличии открытого р/с в ПАО «Совкомбанк»
        и действующей ЭЦП. Условия рекламы действительны на 20.02.2024г.`

export const Base: Story = {
  args: {
    phones: {
      enabled: false
    },
    ligal: {
      enabled: false
    },
    socialsLinks: {
      enabled: false
    },
    siteMap: false,
    copyright: {
      enabled: false
    }
  }
}

export const WithPhone: Story = {
  args: {
    siteMap: false,
    ligal: {
      enabled: false
    },
    socialsLinks: {
      enabled: false
    },
    copyright: {
      enabled: false
    },
    phones: { items: [{ text: 'Звонок по России (бесплатно)', phone: '88001000006' }], enabled: true }
  }
}

export const BaseWithLigal: Story = {
  args: {
    ligal: {
      text: defaultLigal,
      enabled: true
    },
    copyright: {
      enabled: false
    },
    socialsLinks: {
      enabled: false
    },
    siteMap: false,
    phones: {
      enabled: false
    }
  }
}

export const Seo: Story = {
  args: {
    ligal: { text: defaultLigal, enabled: true },
    details: defaultNavigationLinks,
    copyright: {
      enabled: false
    },
    socialsLinks: {
      enabled: false
    },
    siteMap: false,
    phones: {
      enabled: false
    }
  }
}
