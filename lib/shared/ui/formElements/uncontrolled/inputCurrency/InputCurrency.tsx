import { forwardRef } from 'react'
import { autoUpdate, flip, offset, useClick, useFloating, useInteractions } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { type DropdownItemOption, DropdownList } from '../../../dropdownList'
import { InputBase, type InputBaseProps } from '../input'
import { useCurrencyControl, useCurrencyFormat } from './hooks'
import { useClickOutside } from '$/shared/hooks'
import { Icon } from '$/shared/ui'
import { cn, mergeRefs } from '$/shared/utils'

export type CurrencyValue = {
  value: string
  currency: string | null
}

export interface InputCurrencyBaseProps extends Omit<InputBaseProps, 'value' | 'onChange'> {
  value: CurrencyValue
  onChange: (value: CurrencyValue) => void
  currencies: DropdownItemOption[]
}

export const InputCurrencyBase = forwardRef<HTMLInputElement, InputCurrencyBaseProps>(
  ({ classes, value, onChange, currencies, ...props }, ref) => {
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
      keyboardHandlers: true
    })

    const { getReferenceProps, getFloatingProps } = useInteractions([click])

    useClickOutside(refs.floating, () => setOpen(false))

    const formatRef = useCurrencyFormat(value.value)

    return (
      <div
        {...getReferenceProps({
          ref: refs.setReference,
          className: cn('relative w-full')
        })}
      >
        <InputBase
          ref={mergeRefs(ref, formatRef)}
          {...props}
          autoComplete='off'
          inputMode='decimal'
          value={value.value}
          onChange={onInputChange}
          classes={classes}
          attachmentProps={{
            classes: {
              icon: 'flex items-center gap-2 w-max'
            },
            icon: (
              <>
                <div className='h-4 w-[1px] bg-color-blue-grey-500' />
                <div className='desk-body-regular-l flex items-center gap-1 text-color-tetriary'>
                  {currency?.attachment?.left}
                  <span>{currency ? currency.label : 'CUR'}</span>
                  <Icon
                    name='arrows/arrowRight'
                    className={cn('size-6 rotate-90 duration-100', {
                      '-rotate-90': open
                    })}
                  />
                </div>
              </>
            ),
            onClickIcon: () => setOpen((prev) => !prev)
          }}
        />
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
              <DropdownList target={formatRef} options={currencies} value={currency} onPick={onCurrencyChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)
