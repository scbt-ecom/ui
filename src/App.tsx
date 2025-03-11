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
            title: 'РКО',
            children: [
              {
                title: 'Расчетный счет',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Счет для ИП',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Счет для ЮЛ',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Счет участника торгов',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Тарифные планы РКО',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Регистрация бизнеса',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              },
              {
                title: 'Сервисы для бизнеса',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Интернет-банк',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Бизнес-карты',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Зарплатный проект',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Электронная подпись',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'ВЭД',
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
            title: 'Кредиты',
            children: [
              {
                title: 'Для развития бизнеса',
                link: {
                  href: 'https://www.google.com/'
                },
                children: [
                  {
                    title: 'Легкий кредит',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Овердрафт',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Кредитная линия',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Лизинг',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Факторинг',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Участие в госконтрактах и тендерах',
                link: {
                  href: 'https://www.google.com/'
                },
                children: [
                  {
                    title: 'Банковские гарантии',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Кредит на исполнение контракта',
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
            title: 'Эквайринг',
            link: {
              href: 'https://www.google.com/'
            },
            children: [
              {
                title: 'Прием платежей',
                link: {
                  href: 'https://google.com'
                },
                children: [
                  {
                    title: 'Торговый эквайринг',
                    link: {
                      href: 'https://google.com'
                    },
                    children: []
                  },
                  {
                    title: 'Интернет-эквайринг',
                    link: {
                      href: 'https://google.com'
                    },
                    children: []
                  },
                  {
                    title: 'Платежи по QR-коду',
                    link: {
                      href: 'https://google.com'
                    },
                    children: []
                  },
                  {
                    title: 'Прием платежей NFC',
                    link: {
                      href: 'https://google.com'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Прием платежей',
                link: {
                  href: 'https://google.com'
                },
                children: [
                  {
                    title: 'Онлайн-кассы',
                    link: {
                      href: 'https://google.com'
                    },
                    children: []
                  },
                  {
                    title: 'Обратный эквайринг',
                    link: {
                      href: 'https://google.com'
                    },
                    children: []
                  },
                  {
                    title: 'Для ресторанов',
                    link: {
                      href: 'https://google.com'
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
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Акции',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Программа лояльности',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Специальное предложение по сертификату ЭП',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Для партнеров',
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
            title: 'Предложения',
            link: {
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Сервисы для бизнеса',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Электронная подпись',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Консалтинг ВЭД',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Выставление счетов',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Совкомопора',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Тендерное сопровождение',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Сотрудничество',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Стать партнером Халвы',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Стать фриселлером',
                    link: {
                      href: 'https://google.com/'
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
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Льготное кредитование',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Легкий кредит',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредитная линия',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредит на оборотные средства',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Инвестиционный кредит',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              },
              {
                title: 'Кредитные продукты',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Тендерное кредитование',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Кредит на исполнение контракта',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  }
                ]
              },
              {
                title: 'Другие виды финансирования',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Факторинг',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Лизинг',
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
            title: 'Банковские гарантии',
            children: [
              {
                title: 'Банковские гарантии',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Банковские гарантии на исполнение контракта',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Банковские гарантии на участие в закупках',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Банковские гарантии на возврат аванса',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Банковские гарантии на исполнение обязательств в гарантийный период',
                    children: [],
                    link: {
                      href: 'https://www.google.com/'
                    }
                  },
                  {
                    title: 'Коммерческая банковская гарантия',
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
            title: 'РКО',
            link: {
              href: 'https://www.google.com/'
            },
            children: [
              {
                title: 'Расчетный счет',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Открытие счета',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Номинальный счет опекуна',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Публичный депозитный счет нотариуса',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Счет должника (банкрота)',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Расчетный счет НКО',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Банковское обслуживание',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Банк-клиент',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Корпоративная карта',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Инкассация',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Торговый эквайринг',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Интернет-эквайринг',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Выгодные платежи по QR',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Обратный эквайринг',
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
            title: 'Зарплатный проект',
            link: {
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Зарплатный проект',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Зарплатная карта для сотрудников',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Премиальная карта',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Продукты на специальных условиях',
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
                title: 'Компаниям',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'ДМС',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Страхование сотрудников от несчастных случаев',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Грузоперевозки и транспорт',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Страхование грузов и ответственности транспортных операторов',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Страхование автотранспорта',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Имущество',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Страхование залогов',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Страхование имущества',
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
            title: 'Размещение средств',
            link: {
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'Размещение средств',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Депозиты',
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
            title: 'ВЭД',
            link: {
              href: 'https://google.com/'
            },
            children: [
              {
                title: 'ВЭД',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Валютный контроль',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Таможенная карта',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Конверсия валюты',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Хеджирование рисков',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  },
                  {
                    title: 'Персональный консультант комплаенс/ВЭД',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: []
                  }
                ]
              },
              {
                title: 'Предложения',
                link: {
                  href: 'https://google.com/'
                },
                children: [
                  {
                    title: 'Предложения',
                    link: {
                      href: 'https://google.com/'
                    },
                    children: [
                      {
                        title: 'Электронная подпись',
                        link: {
                          href: 'https://google.com'
                        },
                        children: []
                      },
                      {
                        title: 'Совкомопора',
                        link: {
                          href: 'https://google.com'
                        },
                        children: []
                      },
                      {
                        title: 'Тендерное сопровождение',
                        link: {
                          href: 'https://google.com'
                        },
                        children: []
                      },
                      {
                        title: 'Комплексное предложение для ресторанов',
                        link: {
                          href: 'https://google.com'
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
        <div className='h-10 w-full' />
        <div className='h-screen w-full bg-color-primary-default' />
      </ResponsiveContainer>
    </div>
  )
}
