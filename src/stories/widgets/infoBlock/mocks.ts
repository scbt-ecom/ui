import desktopImage from './desktop.png'
import mobileImage from './mobile.png'
import type { InfoBlockProps } from '$/widgets'

const buttonsGroup: InfoBlockProps['buttonsGroup'] = [
  {
    children: 'Primary',
    handlerOptions: {
      handler: 'navigate',
      url: 'https://sovcombank.ru',
      target: '_blank',
      rel: 'noreferrer noopener'
    }
  },
  {
    children: 'Secondary',
    intent: 'secondary',
    handlerOptions: {
      handler: 'navigate',
      url: 'https://sovcombank.ru',
      target: '_blank',
      rel: 'noreferrer noopener'
    }
  }
]
const linksList: InfoBlockProps['linksList'] = [
  { icon: 'arrows/arrowRight', children: 'text-1', href: 'https://sovcombank.ru', target: '_blank', rel: 'noreferrer' },
  { icon: 'arrows/arrowRight', children: 'text-2', href: 'https://sovcombank.ru', target: '_blank', rel: 'noreferrer' },
  { icon: 'arrows/arrowRight', children: 'text-3', href: 'https://sovcombank.ru', target: '_blank', rel: 'noreferrer' },
  { icon: 'arrows/arrowRight', children: 'text-4', href: 'https://sovcombank.ru', target: '_blank', rel: 'noreferrer' }
]

const text = {
  heading: 'Title',
  description: 'Description'
}

const imageDesktop: InfoBlockProps['imageDesktop'] = {
  alt: 'image alt',
  src: desktopImage
}

const imageMobile: InfoBlockProps['imageMobile'] = {
  alt: 'image alt',
  src: mobileImage
}

export const fullMocks: InfoBlockProps = {
  imageDesktop,
  imageMobile,
  buttonsGroup,
  linksList,
  ...text
}

export const withoutButtons: InfoBlockProps = {
  imageDesktop,
  imageMobile,
  linksList,
  ...text
}

export const withoutItemList: InfoBlockProps = {
  imageDesktop,
  imageMobile,
  buttonsGroup,
  size: 'sm',
  ...text
}

export const withoutButtonsAndItemList: InfoBlockProps = {
  imageDesktop,
  imageMobile,
  size: 'sm',
  ...text
}
