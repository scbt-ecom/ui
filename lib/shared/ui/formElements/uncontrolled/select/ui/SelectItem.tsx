import { Fragment } from 'react'
import { components, type OptionProps } from 'react-select'
import { CheckboxBase } from '../../checkbox'
import type { DeepPartial } from '$/shared/types'
import { FieldAttachment } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

export type SelectItemOption = {
  id: string | number
  value: string
  label: string
  additionalText?: string
  disabled?: boolean
  attachment?: {
    left?: DeepPartial<FieldAttachmentProps>
    right?: DeepPartial<FieldAttachmentProps>
  }
}

export type SelectItemClasses = {
  container?: string
  additionalText?: string
}

type SelectItemProps = OptionProps<SelectItemOption> & {
  classes?: SelectItemClasses
}

export const SelectItem = ({
  isSelected,
  label,
  data,
  innerProps,
  innerRef,
  selectProps,
  isFocused,
  classes,
  isMulti,
  ...props
}: SelectItemProps) => {
  const { onChange } = selectProps
  const ContentWrapper = isMulti || data.attachment ? 'div' : Fragment

  const onSelect = () => {
    // eslint-disable-next-line no-console
    console.log('select option clicked')

    onChange(data, {
      action: 'select-option',
      option: data
    })
  }

  return (
    <button type='button' onClick={onSelect} className='w-full text-start'>
      <components.Option
        {...props}
        isMulti={isMulti}
        isFocused={isFocused}
        selectProps={selectProps}
        data={data}
        innerRef={innerRef}
        label={label}
        isSelected={isSelected}
        innerProps={innerProps}
        cx={(_, classNames) =>
          cn(
            'unset-all-apply desk-body-regular-l cursor-pointer rounded-sm px-2 py-4 bg-color-white',
            'text-color-dark hover:bg-color-primary-tr-hover hover:text-color-primary-hover w-full',
            '[&:not(:last-child)]:mb-1 [&>p]:hover:text-color-secondary [&:not(:disabled)]:cursor-pointer',
            {
              '!bg-color-primary-tr-hover !text-color-primary-hover': isSelected || isFocused,
              'pointer-events-none !text-color-disabled': data.disabled,
              '!flex items-center gap-x-4': isMulti || (data.attachment && data.attachment.left)
            },
            classNames,
            classes?.container,
            innerProps.className
          )
        }
      >
        {isMulti ? (
          <CheckboxBase checked={isSelected} disabled={data.disabled} />
        ) : (
          data.attachment && data.attachment.left && <FieldAttachment {...data.attachment.left} />
        )}
        <ContentWrapper>
          {label}
          {data.additionalText && (
            <p className={cn('desk-body-regular-s text-color-tetriary', classes?.additionalText)}>{data.additionalText}</p>
          )}
        </ContentWrapper>
      </components.Option>
    </button>
  )
}
