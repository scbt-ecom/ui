import type { CalculatorProps } from '$/widgets'
import type { CalculatorViewProps } from '$/widgets/calculator/CalculatorView'

const firstCalculator: CalculatorViewProps = {
  name: 'individual',
  label: 'Для ИП',
  calculatorInfoConfig: {
    rootValue: {
      formula: 'sum * loanTerm / 3'
    },
    rootDescription: 'Ежемесячный платеж с НДС',
    suffix: 'percent',
    infoList: [
      {
        value: {
          formula: 'sum / loanTerm'
        },
        label: 'Экономия',
        hint: 'С хинтом',
        mode: 'currency'
      },
      {
        value: '15',
        label: 'Общая сумма',
        mode: 'percent'
      },
      {
        value: 'паспорт РФ',
        label: 'Вам понадобится',
        mode: 'text'
      }
    ],
    assistHint: {
      iconName: 'general/shield',
      text: 'Ваш вклад застрахован',
      hint: 'Текст хинта - Ваш вклад застрахован'
    },
    buttonsConfig: [
      {
        children: 'Оставить заявку',
        handlerOptions: {
          handler: 'navigate',
          url: 'https://sovcombank.ru',
          target: '_blank',
          rel: 'noreferrer noopener'
        }
      },
      {
        children: 'Подробнее',
        intent: 'secondary',
        handlerOptions: {
          handler: 'navigate',
          url: 'https://sovcombank.ru',
          target: '_blank',
          rel: 'noreferrer noopener'
        }
      }
    ],
    subtitle: 'Подзаголовок',
    title: 'Заголовок',
    bottomDescription:
      'Расчёт лизинга является предварительным. Для точного определения, пожалуйста, обратитесь к менеджеру в вашем регионе.'
  },
  calculatorFieldsConfig: {
    modalConfig: {
      description: 'Описания модального окна',
      triggerText: 'Открыть модалку',
      contentVariant: 'content2'
    },
    fieldsGroup: {
      selectGroupConfig: {
        fields: [
          {
            type: 'SelectControl',
            args: {
              label: 'Описания селекта 1',
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              name: 'select1',
              options: [
                { value: '2', label: '2 месяца' },
                { value: '3', label: '3 месяца' },
                { value: '6', label: '6 месяцев' },
                { value: '8', label: '8 месяцев' },
                { value: '9', label: '9 месяцев' },
                { value: '12', label: '1 год' },
                { value: '24', label: '2 года' },
                { value: '36', label: '3 года' }
              ]
            }
          },
          {
            type: 'SelectControl',
            args: {
              label: 'Описания селекта 2',
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              name: 'select2',
              options: [
                { value: '2', label: '2 месяца' },
                { value: '3', label: '3 месяца' },
                { value: '6', label: '6 месяцев' },
                { value: '8', label: '8 месяцев' },
                { value: '9', label: '9 месяцев' },
                { value: '12', label: '1 год' },
                { value: '24', label: '2 года' },
                { value: '36', label: '3 года' }
              ]
            }
          }
        ]
      },
      slidersGroupConfig: {
        fields: [
          {
            type: 'SliderControl',
            args: {
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              componentType: 'algorithmic',
              min: 30_000,
              max: 5_000_000,
              suffix: 'currency',
              label: 'Сумма кредита',
              name: 'sum'
            }
          },
          {
            type: 'SliderControl',
            args: {
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              componentType: 'step',
              step: 1,
              suffix: 'year',
              min: 1,
              max: 5,
              label: 'Срок кредита',
              name: 'loanTerm'
            }
          }
        ]
      },
      radioGroupTabConfig: {
        fields: [
          {
            type: 'RadioGroupTabControl',
            args: {
              label: 'Описания радио группы вариант табы',
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              name: 'radioTabs',
              options: [
                { id: '1', value: '2', label: '2 месяца' },
                { id: '2', value: '3', label: '3 месяца' },
                { id: '3', value: '6', label: '6 месяцев' },
                { id: '4', value: '8', label: '8 месяцев' },
                { id: '5', value: '9', label: '9 месяцев' },
                { id: '6', value: '12', label: '1 год' },
                { id: '7', value: '24', label: '2 года' },
                { id: '8', value: '36', label: '3 года' }
              ]
            }
          }
        ]
      },
      checkboxGroupConfig: {
        fields: [
          {
            type: 'CheckboxControl',
            args: {
              children: 'checkbox1',
              validation: {
                type: 'getBooleanSchema',
                args: {}
              },
              name: 'checkbox1'
            }
          },
          {
            type: 'CheckboxControl',
            args: {
              children: 'checkbox2',
              validation: {
                type: 'getBooleanSchema',
                args: {}
              },
              name: 'checkbox2'
            }
          },
          {
            type: 'CheckboxControl',
            args: {
              children: 'checkbox3',
              validation: {
                type: 'getBooleanSchema',
                args: {}
              },
              name: 'checkbox3'
            }
          }
        ]
      },
      radioGroupConfig: {
        fields: [
          {
            type: 'RadioGroupControl',
            args: {
              label: 'Описания радио группы базовый',
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              name: 'radioBase',
              options: [
                { id: '1', value: '1', label: 'Радио 1' },
                { id: '2', value: '2', label: 'Радио 2' },
                { id: '3', value: '3', label: 'Радио 3' }
              ]
            }
          }
        ]
      },
      radioGroupCardConfig: {
        fields: [
          {
            type: 'RadioGroupCardControl',
            args: {
              label: 'Описания радио группы вариант карточки',
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              name: 'radioCards',
              options: [
                {
                  id: '1',
                  value: '1',
                  label: '2 месяца',
                  additionalContent: {
                    value: '21.5 %',
                    text: 'Доп. текст'
                  }
                },
                {
                  id: '2',
                  value: '2',
                  label: '2 месяца',
                  additionalContent: {
                    value: '17 %',
                    text: 'Доп. текст'
                  }
                },
                {
                  id: '3',
                  value: '3',
                  label: '3 месяцев',
                  additionalContent: {
                    value: '17 %',
                    text: 'Доп. текст'
                  }
                },
                {
                  id: '4',
                  value: '4',
                  label: '4 месяца',
                  additionalContent: {
                    value: '21.5 %',
                    text: 'Доп. текст'
                  }
                },
                {
                  id: '5',
                  value: '5',
                  label: '5 месяца',
                  additionalContent: {
                    value: '21.5 %',
                    text: 'Доп. текст'
                  }
                },
                {
                  id: '6',
                  value: '6',
                  label: '6 месяца',
                  additionalContent: {
                    value: '21.5 %',
                    text: 'Доп. текст'
                  }
                },
                {
                  id: '7',
                  value: '7',
                  label: '7 месяца',
                  additionalContent: {
                    value: '21.5 %',
                    text: 'Доп. текст'
                  }
                }
              ]
            }
          }
        ]
      },
      switchGroupConfig: {
        fields: [
          {
            type: 'SwitchControl',
            args: {
              tooltip: 'switch1 tooltip',
              children: 'switch1',
              validation: {
                type: 'getBooleanSchema',
                args: {}
              },
              name: 'switch1'
            }
          },
          {
            type: 'SwitchControl',
            args: {
              tooltip: 'switch1 tooltip',
              children: 'switch2',
              validation: {
                type: 'getBooleanSchema',
                args: {}
              },
              name: 'switch2'
            }
          },
          {
            type: 'SwitchControl',
            args: {
              tooltip: 'switch1 tooltip',
              children: 'switch3',
              validation: {
                type: 'getBooleanSchema',
                args: {}
              },
              name: 'switch3'
            }
          }
        ]
      }
    }
  }
}

const secondCalculator: CalculatorViewProps = {
  name: 'legal',
  label: 'Для юридических лиц',
  calculatorInfoConfig: {
    rootValue: {
      formula: 'sum * term / 3 '
    },
    suffix: 'currency',
    infoList: [
      {
        value: {
          formula: 'sum - term'
        },
        label: 'Экономия',
        hint: 'С хинтом',
        mode: 'currency'
      },
      {
        value: '15',
        label: 'Общая сумма',
        mode: 'percent'
      }
    ],
    assistHint: {
      iconName: 'general/shield',
      text: 'Ваш вклад застрахован',
      hint: 'Текст хинта - Ваш вклад застрахован'
    },
    buttonsConfig: [
      {
        children: 'Оставить заявку',
        handlerOptions: {
          handler: 'navigate',
          url: 'https://sovcombank.ru',
          target: '_blank',
          rel: 'noreferrer noopener'
        }
      },
      {
        children: 'Подробнее',
        intent: 'secondary',
        handlerOptions: {
          handler: 'navigate',
          url: 'https://sovcombank.ru',
          target: '_blank',
          rel: 'noreferrer noopener'
        }
      }
    ],
    subtitle: 'Подзаголовок',
    title: 'Заголовок',
    rootDescription: 'Ежемесячный платеж с НДС',
    bottomDescription:
      'Расчёт лизинга является предварительным. Для точного определения, пожалуйста, обратитесь к менеджеру в вашем регионе.'
  },
  calculatorFieldsConfig: {
    modalConfig: {
      description: 'Описания модального окна',
      triggerText: 'Открыть модалку',
      contentVariant: 'content2'
    },
    fieldsGroup: {
      radioGroupTabConfig: {
        fields: [
          {
            type: 'RadioGroupTabControl',
            args: {
              label: 'Описания радио группы вариант табы',
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              name: 'radioTabs',
              options: [
                { id: '1', value: '2', label: '2 месяца' },
                { id: '2', value: '3', label: '3 месяца' },
                { id: '3', value: '6', label: '6 месяцев' },
                { id: '4', value: '8', label: '8 месяцев' },
                { id: '5', value: '9', label: '9 месяцев' },
                { id: '6', value: '12', label: '1 год' },
                { id: '7', value: '24', label: '2 года' },
                { id: '8', value: '36', label: '3 года' }
              ]
            }
          }
        ]
      },
      slidersGroupConfig: {
        fields: [
          {
            type: 'SliderControl',
            args: {
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              componentType: 'algorithmic',
              min: 30_000,
              max: 5_000_000,
              suffix: 'currency',
              label: 'Сумма кредита',
              name: 'sum'
            }
          },
          {
            type: 'SliderControl',
            args: {
              validation: {
                type: 'getStringSchema',
                args: {}
              },
              componentType: 'step',
              step: 1,
              suffix: 'year',
              name: 'term',
              min: 1,
              max: 5,
              label: 'Срок кредита'
            }
          }
        ]
      }
    }
  }
}

export const multipleCalculator: CalculatorProps = {
  headline: 'Калькулятор лизинга',
  calculators: [firstCalculator, secondCalculator]
}

export const singleCalculator: CalculatorProps = {
  headline: 'Калькулятор лизинга',
  calculators: [firstCalculator]
}

export const baseCalculator: CalculatorProps = {
  headline: 'Рассчитайте условия по кредиту',
  calculators: [
    {
      name: 'calculatorBase',
      label: 'Для ИП',
      calculatorInfoConfig: {
        assistHint: undefined,
        bottomDescription: 'Предварительный расчет. Не является публичной офертой',
        buttonsConfig: [
          {
            handlerOptions: {
              handler: 'scroll',
              widgetId: 'form'
            },
            children: 'Оформить заявку',
            intent: 'primary',
            size: 'md',
            type: 'button',
            textFormat: 'initial'
          },
          {
            type: 'button',
            textFormat: 'initial',
            handlerOptions: {
              handler: 'scroll',
              widgetId: 'header'
            },
            children: 'Подробнее',
            intent: 'secondary',
            size: 'md'
          }
        ],
        rootValue: {
          formula:
            '(sum * (((14.9) / 100 / (12)) * (1 + ((14.9) / 100 / (12))) ** (term * (12)))) / ((1 + ((14.9) / 100 / (12))) ** (term * (12)) - 1)'
        },
        rootDescription: 'Ежемесячный платеж',
        suffix: 'currency',
        infoList: [
          {
            value: {
              formula: 'sum * term'
            },
            label: 'ПСК',
            mode: 'text',
            hint: 'ПСК',
            withFormula: true,
            color: 'dark'
          },
          {
            value: '14',
            label: 'Ставка',
            mode: 'percent',
            withFormula: false,
            color: 'dark'
          },
          {
            color: 'dark',
            value: 'паспорт РФ',
            label: 'Вам понадобится',
            mode: 'text',
            hint: 'Вам понадобится',
            withFormula: false
          }
        ]
      },
      calculatorFieldsConfig: {
        fieldsGroup: {
          slidersGroupConfig: {
            fields: [
              {
                args: {
                  readOnly: false,
                  min: '30000',
                  max: '5000000',
                  name: 'sum',
                  componentType: 'step',
                  disabled: false,
                  suffix: 'currency',
                  label: 'Сумма кредита',
                  validation: {
                    type: 'getStringSchema',
                    args: {
                      defaultValue: '500000',
                      required: true
                    }
                  }
                },
                type: 'SliderControl'
              },
              {
                type: 'SliderControl',
                args: {
                  validation: {
                    type: 'getStringSchema',
                    args: {
                      defaultValue: '2',
                      required: true
                    }
                  },
                  min: '1',
                  suffix: 'year',
                  disabled: false,
                  name: 'term',
                  label: 'Срок кредита',
                  readOnly: false,
                  componentType: 'step',
                  max: '5'
                }
              }
            ]
          },
          checkboxGroupConfig: {
            fields: []
          }
        }
      }
    }
  ]
}
