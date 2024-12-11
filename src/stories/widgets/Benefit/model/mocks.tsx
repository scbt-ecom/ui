import clock from './assets/clock.avif'
import clockLarge from './assets/clock_large.png'
import percentMob from './assets/percentMob.avif'
import { type IBenefitProps } from '$/widgets'

export const mockBenefitDataFourCards: IBenefitProps = {
  intent: 'fourCards',
  heading: (
    <>
      Преимущества <br /> потребительского кредита
    </>
  ),
  cards: [
    {
      title: 'Удобное внесение платежей',
      description: (
        <>
          Отсрочка платежа и возможность досрочного погашения через мобильное приложении <br className='desktop:hidden' />{' '}
          «ХАЛВА-Совкомбанк»
        </>
      ),
      img: percentMob,
      mobileImg: true,
      cardColor: 'bg-banner-skyblue-100'
    },
    {
      title: 'Честные условия',
      description: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным',
      mobileImg: false
    },
    {
      title: 'Честные условия',
      description: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным',
      mobileImg: false
    },
    {
      title: 'Минимум документов',
      description: <>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</>,
      img: clockLarge,
      mobileImg: false,
      withButton: true,
      buttonText: 'Оформить заявку'
    }
  ]
}

export const mockBenefitDataThreeCards: IBenefitProps = {
  intent: 'threeCards',
  heading: (
    <>
      Преимущества <br /> потребительского кредита
    </>
  ),
  cards: [
    {
      title: 'Удобное внесение платежей',
      description: (
        <>
          Отсрочка платежа и возможность досрочного погашения через мобильное приложении <br className='desktop:hidden' />{' '}
          «ХАЛВА-Совкомбанк»
        </>
      ),
      img: percentMob,
      mobileImg: true,
      withButton: true,
      buttonText: 'Оформить заявку',
      cardColor: 'bg-banner-skyblue-100'
    },
    {
      title: 'Честные условия',
      description: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным',
      mobileImg: false
    },
    {
      title: 'Минимум документов',
      description: <>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</>,
      img: clock,
      mobileImg: false,
      withButton: true,
      buttonText: 'Оформить заявку'
    }
  ]
}

export const mockBenefitDataTwoCards: IBenefitProps = {
  intent: 'twoCards',
  heading: (
    <>
      Преимущества <br /> потребительского кредита
    </>
  ),
  cards: [
    {
      title: 'Удобное внесение платежей',
      description: <>Отсрочка платежа и возможность досрочного погашения</>,
      img: percentMob,
      mobileImg: true,
      cardColor: 'bg-banner-skyblue-100'
    },
    {
      title: 'Минимум документов',
      description: <>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</>,
      img: clock,
      mobileImg: false
    }
  ]
}
