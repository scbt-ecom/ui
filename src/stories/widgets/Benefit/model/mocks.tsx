import clock from './assets/clock.avif'
import percentMob from './assets/percentMob.avif'
import shield from './assets/shield.avif'

export const mockBenefitData = {
  classes: {
    item: 'first:gradient-skyblue'
  },
  heading: (
    <>
      Преимущества <br /> потребительского кредита
    </>
  ),
  content: [
    {
      title: 'Удобное внесение платежей',
      description: (
        <>
          Отсрочка платежа и возможность досрочного погашения через мобильное приложении <br className='desktop:hidden' />{' '}
          «ХАЛВА-Совкомбанк»
        </>
      ),
      img: percentMob,
      mobileImg: true
    },
    {
      title: 'Честные условия',
      description: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным',
      img: shield,
      mobileImg: false
    },
    {
      title: 'Минимум документов',
      description: <>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</>,
      img: clock,
      mobileImg: false
    }
  ]
}
