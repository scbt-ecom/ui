import type { Meta, StoryObj } from '@storybook/react'
import { SeoHeader } from '$/widgets'

const meta = {
  title: 'WIDGETS/SeoHeader',
  component: SeoHeader,
  tags: ['autodocs']
} satisfies Meta<typeof SeoHeader>

export default meta

type Story = StoryObj<typeof SeoHeader>

export const Base: Story = {
  args: {
    categories: [
      {
        title: 'Частным лицам',

        children: [
          {
            title: 'Частным лицам',

            children: [
              {
                title: 'Кредиты',

                children: [
                  {
                    title: 'Кредиты',

                    children: [
                      {
                        title: 'Кредиты наличными',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Рефинансирование кредита',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредит на карту',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Пенсионерам',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредитный калькулятор',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Все кредиты',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Кредиты под залог',
                    link: {
                      href: 'https://www.google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Кредит под залог',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредит под залог недвижимости',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредит под залог авто',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Автокредиты',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Автокредиты',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Новые автомобили',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Автомобили с пробегом',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Автокредит пенсионерам',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Онлайн-заявка',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Калькулятор автокредита',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Страхование автомобиля',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Карты',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Карты рассрочки',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Карта халва',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Хalva Premium Card',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Стикер PAY',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Карта МИР-Халва',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Халва-социальная',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Халва для пенсионеров',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Кредитные карты',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Кредитная карта 180 дней без %',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредитная карта 180 дней без % ПЛЮС',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Оформить кредитную карту',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Дебетовые карты',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Дебетовая карта с % на остаток',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Дебетовая карта с кэшбэком',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Ипотека',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Все программы по ипотеке',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Ипотека на вторичное жильё',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Ипотека для семей с детьми',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Ипотека для IT-специалистов',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Ипотека в новостройке',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Рефинансирование ипотеки',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Дальневосточная ипотека',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Ипотечный калькулятор',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Вклады',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Вклады',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Вклад «Удобный» ',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Вклад «Зимняя выгода с Халвой» ',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Калькулятор вкладов',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Под высокий процент',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Для пенсионеров',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'На 3 месяца',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Накопительные счета',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Онлайн-копилка',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'С пополнением и снятием',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'С пополнением',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'С капитализацией',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Для пенсионеров',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Инвестиции',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Брокерское обслуживание',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Брокерский счет',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Мобильное приложение «Совкомбанк Инвестиции» ',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Личный кабинет «Совкомбанк Инвестиции» ',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'ИИС (Индивидуальный инвестиционный \nсчет)',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Облигации',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Паевые инвестиционные фоны',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Инвестиции в драгоценные металлы',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Счета в драгоценных металлах',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Драгоценные металлы в слитках',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Страхование',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Страхование',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Автострахование ОСАГО',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Автострахование КАСКО',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Защита путешественника',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Мультизащита для семьи',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Накопительное страхование',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Пакеты услуг',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Обмен валют',
                link: {
                  href: 'https://www.google.com/',
                  icon: false
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Бизнесу',

        children: [
          {
            title: 'Малому бизнесу и ИП',

            children: [
              {
                title: 'РКО',

                children: [
                  {
                    title: 'Расчетный счет',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Счет для ИП',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Счет для ЮЛ',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Счет участника торгов',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Тарифные планы РКО',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Регистрация бизнеса',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Сервисы для бизнеса',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Интернет-банк',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Бизнес-карты',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Зарплатный проект',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Электронная подпись',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'ВЭД',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Кредиты',

                children: [
                  {
                    title: 'Для развития бизнеса',
                    link: {
                      href: 'https://www.google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Легкий кредит',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Овердрафт',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредитная линия',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Лизинг',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Факторинг',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Участие в госконтрактах и тендерах',
                    link: {
                      href: 'https://www.google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Банковские гарантии',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредит на исполнение контракта',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Эквайринг',
                link: {
                  href: 'https://www.google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Прием платежей',
                    link: {
                      href: 'https://google.com',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Торговый эквайринг',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Интернет-эквайринг',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Платежи по QR-коду',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Прием платежей NFC',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Прием платежей',
                    link: {
                      href: 'https://google.com',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Онлайн-кассы',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Обратный эквайринг',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Для ресторанов',
                        link: {
                          href: 'https://google.com',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Акции',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Акции',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Программа лояльности',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Специальное предложение по сертификату ЭП',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Для партнеров',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Предложения',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Сервисы для бизнеса',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Электронная подпись',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Консалтинг ВЭД',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Выставление счетов',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Совкомопора',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Тендерное сопровождение',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Сотрудничество',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Стать партнером Халвы',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Стать фриселлером',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: 'Корпоративным клиентам',

            children: [
              {
                title: 'Кредиты',

                children: [
                  {
                    title: 'Кредитные продукты',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Льготное кредитование',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Легкий кредит',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредитная линия',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредит на оборотные средства',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Инвестиционный кредит',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Кредитные продукты',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Тендерное кредитование',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Кредит на исполнение контракта',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Другие виды финансирования',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Факторинг',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Лизинг',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Банковские гарантии',

                children: [
                  {
                    title: 'Банковские гарантии',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Банковские гарантии на исполнение контракта',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Банковские гарантии на участие в закупках',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Банковские гарантии на возврат аванса',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Банковские гарантии на исполнение обязательств в гарантийный период',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Коммерческая банковская гарантия',
                        link: {
                          href: 'https://www.google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'РКО',
                link: {
                  href: 'https://www.google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Расчетный счет',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Открытие счета',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Номинальный счет опекуна',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Публичный депозитный счет нотариуса',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Счет должника (банкрота)',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Расчетный счет НКО',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Банковское обслуживание',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Банк-клиент',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Корпоративная карта',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Инкассация',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Торговый эквайринг',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Интернет-эквайринг',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Выгодные платежи по QR',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Обратный эквайринг',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Зарплатный проект',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Зарплатный проект',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Зарплатная карта для сотрудников',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Премиальная карта',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Продукты на специальных условиях',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Страхование',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Компаниям',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'ДМС',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Страхование сотрудников от несчастных случаев',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Грузоперевозки и транспорт',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Страхование грузов и ответственности транспортных операторов',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Страхование автотранспорта',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Имущество',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Страхование залогов',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Страхование имущества',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Размещение средств',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'Размещение средств',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Депозиты',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                title: 'ВЭД',
                link: {
                  href: 'https://google.com/',
                  icon: false
                },
                children: [
                  {
                    title: 'ВЭД',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Валютный контроль',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Таможенная карта',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Конверсия валюты',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Хеджирование рисков',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      },
                      {
                        title: 'Персональный консультант комплаенс/ВЭД',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    title: 'Предложения',
                    link: {
                      href: 'https://google.com/',
                      icon: false
                    },
                    children: [
                      {
                        title: 'Предложения',
                        link: {
                          href: 'https://google.com/',
                          icon: false
                        },
                        children: [
                          {
                            title: 'Электронная подпись',
                            link: {
                              href: 'https://google.com',
                              icon: false
                            },
                            children: []
                          },
                          {
                            title: 'Совкомопора',
                            link: {
                              href: 'https://google.com',
                              icon: false
                            },
                            children: []
                          },
                          {
                            title: 'Тендерное сопровождение',
                            link: {
                              href: 'https://google.com',
                              icon: false
                            },
                            children: []
                          },
                          {
                            title: 'Комплексное предложение для ресторанов',
                            link: {
                              href: 'https://google.com',
                              icon: false
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    phone: '88001001020',
    helpers: [
      {
        title: 'Помощь',
        link: {
          href: 'https://google.com/'
        }
      },
      {
        title: 'Офисы и банкоматы',
        link: {
          href: 'https://google.com/',
          icon: 'arrows/arrowLink'
        }
      }
    ]
  }
}
