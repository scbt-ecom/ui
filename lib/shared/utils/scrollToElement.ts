type TId = 'personal_form' | 'calculator'

export const scrollToElement = (id: TId, behavior: ScrollBehavior = 'smooth') => {
  const element = document.getElementById(id)
  if (!element) {
    console.error('Такого элемента в DOM не существует', id)
    return
  }

  element.scrollIntoView({ behavior, block: 'start' })
}
