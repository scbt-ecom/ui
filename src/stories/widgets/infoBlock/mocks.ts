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

const images: InfoBlockProps['images'] = {
  alt: 'image alt',
  desktop: desktopImage,
  mobile: mobileImage
}

export const fullMocks: InfoBlockProps = {
  images,
  buttonsGroup,
  linksList,
  ...text
}

export const withoutButtons: InfoBlockProps = {
  images,
  linksList,
  ...text
}

export const withoutItemList: InfoBlockProps = {
  images,
  buttonsGroup,
  size: 'sm',
  ...text
}

export const withoutButtonsAndItemList: InfoBlockProps = {
  images,
  size: 'sm',
  ...text
}
