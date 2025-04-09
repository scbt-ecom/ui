import Card from './Card.png'
import Phone from './Phone.png'
import type { TextStep } from './ui'
import type { ButtonProps, SlideProductCardProps } from '$/shared/ui'

const buttonProps: ButtonProps = {
  intent: 'secondary',
  children: 'Оформить карту'
}

export const productsSlidesMocks: SlideProductCardProps[] = [
  {
    title: 'Первая карточка -  «Халва»',
    description: 'Покупки с кешбэком и рассрочка в несколько кликов',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Вклады',
    description: 'Ставка до 25%, дистанционное управление счётом',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Кредит под залог авто',
    description: 'Умный кешбэк, снятие и переводы без комиссии',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Дебетовая карта',
    description: 'Умный кешбэк, снятие и переводы без комиссии',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Дебетовая карта 2',
    description: 'Умный кешбэк, снятие и переводы без комиссии',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Дебетовая карта 3',
    description: 'Умный кешбэк, снятие и переводы без комиссии',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Дебетовая карта 3',
    description: 'Умный кешбэк, снятие и переводы без комиссии',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  },
  {
    title: 'Дебетовая карта 4',
    description: 'Умный кешбэк, снятие и переводы без комиссии',
    imgProps: {
      alt: 'Card img',
      src: Card
    },
    buttonProps: buttonProps
  }
]

export const slidesWithSteps = [
  {
    imgProps: {
      alt: 'Phone img',
      src: Phone
    }
  },
  {
    imgProps: {
      alt: 'Phone img',
      src: Phone
    }
  },
  {
    imgProps: {
      alt: 'Phone img',
      src: Phone
    }
  },
  {
    imgProps: {
      alt: 'Phone img',
      src: Phone
    }
  }
]

export const textSteps: TextStep[] = [
  { subtitle: 'Откройте  Mir Pay', description: 'Какой то текст' },
  { subtitle: 'Отсканируйте карту или добавьте ее вручную', description: 'Какой то текст' },
  { subtitle: 'Активируйте карту, следуя подсказкам на экране' },
  { subtitle: 'Для оплаты просто разблокируйте смартфон и поднесите его к POS-терминалу' }
]

export const baseArgs = {
  heading: 'Другие предложения',
  slides: productsSlidesMocks
}
