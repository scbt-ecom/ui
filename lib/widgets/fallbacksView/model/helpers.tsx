import { type StatusConfig, type StatusVariant } from './types'
import { Icon } from '$/shared/ui'

export const statusConfig = (): Record<StatusVariant, StatusConfig> => {
  return {
    approve: {
      icon: {
        element: <Icon name='status/iconMark' />,
        bg: 'bg-color-positive-light'
      },
      title: 'Ваша заявка отправлена',
      description: (
        <>
          В ближайшее время с Вами свяжутся <br /> специалисты нашего Банка
        </>
      ),
      button: {
        text: 'Вернуться на главную'
      }
    },
    repeated: {
      icon: {
        element: <Icon name='status/iconUser' />,
        bg: 'bg-color-positive-light'
      },
      title: 'Мы вас узнали',
      description: (
        <>
          Решение по прошлой заявке ещё активно. <br />
          Возвращайтесь к нам позже
        </>
      ),
      button: {
        text: 'Вернуться на главную'
      }
    },
    error: {
      icon: {
        element: <Icon name='status/iconRetry' />,
        bg: 'bg-color-warning-light'
      },
      title: 'Что-то пошло не так',
      description: (
        <>
          Обновите страницу или попробуйте <br /> снова через 5 минут
        </>
      ),
      button: {
        text: 'Обновить страницу'
      }
    },
    reject: {
      icon: {
        element: <Icon name='status/badSmile' />,
        bg: 'bg-color-negative-light'
      },
      title: 'Нам очень жаль',
      description: (
        <>
          К сожалению, сейчас мы не можем <br /> принять вашу заявку
        </>
      ),
      button: {
        text: 'Вернуться на главную'
      }
    }
  }
}
