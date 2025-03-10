import { ResponsiveContainer } from '$/shared/ui'
import type { Category, SeoHeaderHelpers } from '$/widgets/seoHeader/model'
import { SeoHeader } from '$/widgets/seoHeader/SeoHeader'

const mockCategories: Category[] = [
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
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Рефинансирование кредита',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредит на карту',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Пенсионерам',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредитный калькулятор',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Все кредиты',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              },
              {
                title: 'Кредиты под залог',
                link: {
                  href: 'https://www.google.com/'
                },
                children: [
                  {
                    title: 'Кредит под залог',
                    link: {
                      href: 'https://www.google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Кредит под залог недвижимости',
                    link: {
                      href: 'https://www.google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Кредит под залог авто',
                    link: {
                      href: 'https://www.google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Автокредиты',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Автокредиты',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Новые автомобили',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Автомобили с пробегом',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Автокредит пенсионерам',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Онлайн-заявка',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Калькулятор автокредита',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Страхование автомобиля',
                    link: {
                      href: 'https://google.com/'
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
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Карты рассрочки',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Карта халва',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Хalva Premium Card',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Стикер PAY',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Карта МИР-Халва',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Халва-социальная',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Халва для пенсионеров',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              },
              {
                title: 'Кредитные карты',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Кредитная карта 180 дней без %',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Кредитная карта 180 дней без % ПЛЮС',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Оформить кредитную карту',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Дебетовые карты',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Дебетовая карта с % на остаток',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Дебетовая карта с кэшбэком',
                    link: {
                      href: 'https://google.com/'
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
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Все программы по ипотеке',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Ипотека на вторичное жильё',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Ипотека для семей с детьми',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Ипотека для IT-специалистов',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Ипотека в новостройке',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Рефинансирование ипотеки',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Дальневосточная ипотека',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Ипотечный калькулятор',
                    link: {
                      href: 'https://google.com/'
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
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Вклады',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Вклад «Удобный» ',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Вклад «Зимняя выгода с Халвой» ',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Калькулятор вкладов',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Под высокий процент',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Для пенсионеров',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'На 3 месяца',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Накопительные счета',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Онлайн-копилка',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'С пополнением и снятием',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'С пополнением',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'С капитализацией',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Для пенсионеров',
                    link: {
                      href: 'https://google.com/'
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
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Брокерское обслуживание',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Брокерский счет',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Мобильное приложение «Совкомбанк Инвестиции» ',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Личный кабинет «Совкомбанк Инвестиции» ',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'ИИС (Индивидуальный инвестиционный \n' + 'счет)',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Облигации',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Паевые инвестиционные фоны',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Инвестиции в драгоценные металлы',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Счета в драгоценных металлах',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Драгоценные металлы в слитках',
                    link: {
                      href: 'https://google.com/'
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
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Страхование',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Автострахование ОСАГО',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Автострахование КАСКО',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Защита путешественника',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Мультизащита для семьи',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Накопительное страхование',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Пакеты услуг',
                    link: {
                      href: 'https://google.com/'
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
              href: 'https://www.google.com/'
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
            title: 'Для бизнеса кредиты',
            children: [
              {
                title: 'Кредиты',
                children: [
                  {
                    title: 'Кредиты наличными',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Рефинансирование кредита',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредит на карту',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Пенсионерам',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредитный калькулятор',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Все кредиты',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              }
            ]
          },
          {
            title: 'Для бизнеса РКО',
            children: [
              {
                title: 'Карта халва',
                children: [],
                link: {
                  href: 'https://www.google.com/'
                }
              }
            ]
          },
          {
            title: 'Для бизнеса депозиты',
            link: {
              href: 'https://www.google.com/'
            },
            children: []
          }
        ]
      },
      {
        title: 'Корпоративным клиентам',
        children: [
          {
            title: 'Клиентам кредиты',
            children: [
              {
                title: 'Кредиты',
                children: [
                  {
                    title: 'Кредиты наличными',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Рефинансирование кредита',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредит на карту',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Пенсионерам',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредитный калькулятор',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Все кредиты',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              }
            ]
          },
          {
            title: 'Клиентам карты',
            children: [
              {
                title: 'Карты рассрочки',
                children: [
                  {
                    title: 'Карта халва',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              }
            ]
          },
          {
            title: 'Обмен валют',
            link: {
              href: 'https://www.google.com/'
            },
            children: []
          }
        ]
      }
    ]
  }
]
const mockHelpers: SeoHeaderHelpers[] = [
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
const mockPhone = '88001001020'

export const App = () => {
  return (
    <div className='my-40 flex flex-col gap-20'>
      <ResponsiveContainer>
        <h2 className='desk-title-bold-s text-color-tetriary'>
          use <span className='desk-title-bold-s text-color-primary-default'> npm run start </span> for run storybook
        </h2>
        <SeoHeader categories={mockCategories} helpers={mockHelpers} phone={mockPhone} />
        <div className='h-screen w-full bg-color-primary-default' />
      </ResponsiveContainer>
    </div>
  )
}
