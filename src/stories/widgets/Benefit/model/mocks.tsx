import clock from './assets/clock.avif'
import clockLarge from './assets/clock_large.png'
import percentMob from './assets/percentMob.avif'
import { cn } from '$/shared/utils'
import { type BenefitProps } from '$/widgets'

export const mockBenefitDataFourCards: BenefitProps = {
  variant: 'fourCards',
  details: [
    {
      title: 'Удобное внесение платежей',
      subtitle: `<p>
            Отсрочка платежа и возможность досрочного погашения через мобильное приложении <br />
            «ХАЛВА-Совкомбанк»
          </p>`,
      img: <img className={cn('h-[246px] object-cover')} src={percentMob} alt='test' />
    },
    {
      title: 'Честные условия',
      subtitle: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным'
    },
    {
      title: 'Честные условия',
      subtitle: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным'
    },
    {
      title: 'Минимум документов',
      subtitle: `<p>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</p>`,
      img: <img className={cn('h-[246px] object-cover')} src={clockLarge} alt='test' />,
      button: {
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'benefit'
        }
      }
    }
  ],
  headline: `<h2>
      Преимущества <br /> потребительского кредита
    </h2>`
}

export const mockBenefitDataThreeCards: BenefitProps = {
  variant: 'threeCards',
  details: [
    {
      title: 'Удобное внесение платежей',
      subtitle: `<p>
            Отсрочка платежа и возможность досрочного погашения через мобильное приложении 
            «ХАЛВА-Совкомбанк»
          </p>`,
      img: <img className={cn('h-[246px] object-cover')} src={percentMob} alt='test' />,
      button: {
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'benefit'
        }
      }
    },
    {
      title: 'Честные условия',
      subtitle: 'Гарантия отсутствия скрытых комиссий и платежей. Страхование является добровольным'
    },
    {
      title: 'Минимум документов',
      subtitle: `<p>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</p>`,
      img: <img className={cn('h-[246px] object-cover')} src={clock} alt='test' />
    }
  ],
  headline: `<h2>
      Преимущества <br /> потребительского кредита
    </h2>`
}

export const mockBenefitDataTwoCards: BenefitProps = {
  variant: 'twoCards',
  details: [
    {
      title: 'Удобное внесение платежей',
      subtitle: `<p>Отсрочка платежа и возможность досрочного погашения</p>`,
      img: <img className={cn('h-[246px] object-cover')} src={percentMob} alt='test' />
    },
    {
      title: 'Минимум документов',
      subtitle: `<p>Понадобится только паспорт, если сумма кредита до&nbsp;1&nbsp;млн&nbsp;₽</p>`,
      img: <img className={cn('h-[246px] object-cover')} src={clock} alt='test' />
    }
  ],
  headline: `<h2>
      Преимущества <br /> потребительского кредита
    </h2>`
}
