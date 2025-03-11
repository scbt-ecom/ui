import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Category, SeoHeaderHelpers } from '../../../model'
import { MenuItem } from './MenuItem'
import { Icon, type SelectItemOption, Uncontrolled } from '$/shared/ui'
import { cn, createPhoneNumber, TypeGuards } from '$/shared/utils'

export type MenuProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  phone: string
}

const getSelectCategories = (categories: Category[]): SelectItemOption[] =>
  categories.map((category) => ({
    value: category.title ?? '',
    label: category.title ?? ''
  }))

export const Menu = ({ categories, helpers, phone }: MenuProps) => {
  const selectCategories = getSelectCategories(categories)

  const [selected, setSelected] = useState<SelectItemOption | SelectItemOption[] | undefined>(selectCategories[0])

  const onCategoryChange = (option?: SelectItemOption | SelectItemOption[]) => {
    if (TypeGuards.isUndefined(option) || TypeGuards.isArray(option)) return

    setSelected(option)
  }

  const selectedSubCategories = useMemo<Category[]>(() => {
    if (TypeGuards.isUndefined(selected) || TypeGuards.isArray(selected)) return []

    return categories.find((category) => category.title === selected.value)?.children ?? []
  }, [selected, categories])

  return (
    <motion.div
      className={cn(
        'absolute left-1/2 top-full w-screen max-w-[636px]',
        '-translate-x-1/2 overflow-x-hidden bg-color-white p-4',
        'flex flex-col items-center justify-center gap-y-4'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Uncontrolled.SelectBase label='Категория' options={selectCategories} value={selected} onChange={onCategoryChange} />
      <div className='flex w-full flex-col items-center justify-center gap-y-1'>
        {selectedSubCategories.map((subCategory) => {
          if (TypeGuards.isArrayEmpty(subCategory.children)) {
            return (
              <div key={subCategory.title} className='w-full px-4 py-2.5'>
                <a href={subCategory.link?.href} className='desk-body-regular-m inline-block w-full'>
                  {subCategory.title}
                </a>
              </div>
            )
          }

          return <MenuItem key={subCategory.title} category={subCategory} />
        })}
      </div>
      <div className='h-[1px] w-full bg-color-blue-grey-200' />
      <div className='flex w-full flex-col items-center justify-center gap-y-1'>
        {helpers.map((helper) => (
          <div key={helper.title} className='w-full px-4 py-2.5'>
            <a href={helper.link?.href} className='flex w-full items-center gap-x-1'>
              {helper.link?.icon && <Icon name={helper.link.icon} className='size-4' />}
              {helper.title}
            </a>
          </div>
        ))}
        <div className='w-full px-4 py-2.5'>
          <a href={`tel:${phone}`} className='flex w-full items-center gap-x-1'>
            <Icon name='communication/phone' className='size-4' />
            {createPhoneNumber(phone)}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
