import { forwardRef } from 'react'
import { autoUpdate, flip, offset, useClick, useFloating, useInteractions } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { type DropdownItemOption, DropdownList, type DropdownListProps } from '../../../dropdownList'
import { InputBase, type InputBaseProps } from '../input'
import { useCurrencyControl, useCurrencyFormat } from './hooks'
import { CurrencyIcon } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { Portal } from '$/shared/ui/portal'
import { cn, mergeRefs } from '$/shared/utils'

export type CurrencyValue = {
  value: string
  currency: string | null
}

type InputCurrencyBaseClasses = {
  root?: string
  input?: InputBaseProps['classes']
  dropdownList?: DropdownListProps['classes']
}

export interface InputCurrencyBaseProps extends Omit<InputBaseProps, 'value' | 'onChange' | 'classes'> {
  /**
   * Выбранное значение
   */
  value: CurrencyValue
  /**
   * Функция для изменения значения
   * @param value
   */
  onChange: (value: CurrencyValue) => void
  /**
   * Список валют для выбора
   */
  currencies: DropdownItemOption[]
  /**
   * Дополнительные стили для переопределения
   */
  classes?: InputCurrencyBaseClasses
  /**
   * Включить рендеринг в портале
   * @property {false | HTMLElement} portal document.body
   */
  portal?: false | HTMLElement
}

export const InputCurrencyBase = forwardRef<HTMLInputElement, InputCurrencyBaseProps>(
  ({ classes, value, onChange, currencies, portal = document.body, attachmentProps, ...props }, ref) => {
    const { currency, onCurrencyChange, onInputChange, open, setOpen } = useCurrencyControl({ currencies, value, onChange })

    const { refs, floatingStyles, context } = useFloating({
      middleware: [
        flip({
          boundary: 'clippingAncestors',
          crossAxis: false
        }),
        offset(4)
      ],
      whileElementsMounted: autoUpdate,
      open,
      onOpenChange: setOpen
    })

    const click = useClick(context, {
      ignoreMouse: true,
      keyboardHandlers: true,
      stickIfOpen: true
    })

    const { getReferenceProps, getFloatingProps } = useInteractions([click])

    useClickOutside(refs.floating, () => setOpen(false))

    const formatRef = useCurrencyFormat(value.value)

    return (
      <div
        {...getReferenceProps({
          ref: refs.setReference,
          className: cn('relative w-full', classes?.root)
        })}
      >
        <InputBase
          ref={mergeRefs(ref, formatRef)}
          {...props}
          autoComplete='off'
          inputMode='decimal'
          value={value.value}
          onChange={onInputChange}
          classes={classes?.input}
          attachmentProps={{
            classes: {
              icon: 'flex items-center gap-2 w-max'
            },
            icon: <CurrencyIcon currency={currency} open={open} />,
            onClickIcon: () => setOpen((prev) => !prev),
            ...attachmentProps
          }}
        />
        <Portal root={portal}>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                {...getFloatingProps({
                  ref: refs.setFloating,
                  className: cn('z-[1000]'),
                  style: {
                    ...floatingStyles,
                    width: refs.reference.current?.getBoundingClientRect().width
                  }
                })}
              >
                <DropdownList
                  target={formatRef}
                  options={currencies}
                  value={currency}
                  onPick={onCurrencyChange}
                  classes={classes?.dropdownList}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Portal>
      </div>
    )
  }
)
