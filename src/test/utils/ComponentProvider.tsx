type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined
}

interface ComponentProviderProps<Props extends {}> {
  title?: string
  Component: React.FC<Props>
  args: Props & DataAttributes
  decorator?: (Component: React.FC<Props>, props: Props & DataAttributes) => React.JSX.Element
  render?: (props: Props) => React.JSX.Element
}

export const ComponentProvider = <Props extends {}>({
  title = 'Тестирование компонента',
  Component,
  args,
  decorator,
  render
}: ComponentProviderProps<Props>) => {
  const component = (() => {
    if (decorator) {
      return decorator(render || Component, args)
    }

    return render ? render(args) : <Component {...args} />
  })()

  return (
    <div className='mx-auto w-full max-w-[600px] py-10'>
      <h2 className='desk-title-bold-l pb-2'>{title}</h2>
      <div>{component}</div>
    </div>
  )
}
