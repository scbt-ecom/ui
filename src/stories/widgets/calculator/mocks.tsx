import type { CalculatorProps, CalculatorRootProps } from '$/widgets'

const firstCalculator: CalculatorProps = {
  calculatedInfoConfig: {
    rootValue: {
      formula: 'sum * term / 3'
    },
    suffix: 'percent',
    infoList: [
      {
        value: {
          formula: 'sum - term'
        },
        label: 'Экономия',
        hint: 'С хинтом',
        suffix: 'currency'
      },
      {
        value: '15',
        label: 'Общая сумма',
        suffix: 'percent'
      }
    ],
    assistHint: {
      iconName: 'general/shield',
      text: 'Ваш вклад застрахован',
      hint: 'Текст хинта - Ваш вклад застрахован'
    },
    buttonProps: {
      children: 'Оставить заявку'
    },
    subtitle: 'Подзаголовок',
    title: 'Заголовок',
    topDescription: 'Ежемесячный платеж с НДС',
    bottomDescription:
      'Расчёт лизинга является предварительным. Для точного определения, пожалуйста, обратитесь к менеджеру в вашем регионе.'
  },
  rootCalculatorConfig: {
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
              leftText: '30 тыс.',
              rightText: '5 млн.',
              min: 30_000,
              max: 5_000_000,
              variant: 'credit',
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
              variant: 'years',
              name: 'term',
              leftText: '1 год',
              rightText: '5 лет',
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

const secondCalculator: CalculatorProps = {
  calculatedInfoConfig: {
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
        suffix: 'currency'
      },
      {
        value: '15',
        label: 'Общая сумма',
        suffix: 'percent'
      }
    ],
    assistHint: {
      iconName: 'general/shield',
      text: 'Ваш вклад застрахован',
      hint: 'Текст хинта - Ваш вклад застрахован'
    },
    buttonProps: {
      children: 'Оставить заявку'
    },
    subtitle: 'Подзаголовок',
    title: 'Заголовок',
    topDescription: 'Ежемесячный платеж с НДС',
    bottomDescription:
      'Расчёт лизинга является предварительным. Для точного определения, пожалуйста, обратитесь к менеджеру в вашем регионе.'
  },
  rootCalculatorConfig: {
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
              leftText: '30 тыс.',
              rightText: '5 млн.',
              min: 30_000,
              max: 5_000_000,
              variant: 'credit',
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
              variant: 'years',
              name: 'term',
              leftText: '1 год',
              rightText: '5 лет',
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

export const multipleCalculator: CalculatorRootProps = {
  headline: 'Калькулятор лизинга',
  calculatorTabs: [
    { value: 'legal', label: 'Для юридических лиц' },
    { value: 'individual', label: 'Для ИП' }
  ],
  calculators: [firstCalculator, secondCalculator]
}

export const singleCalculator: CalculatorRootProps = {
  headline: 'Калькулятор лизинга',
  calculators: [firstCalculator]
}
