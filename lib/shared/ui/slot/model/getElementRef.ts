export const getElementRef = (element: React.ReactElement) => {
  let getter = Object.getOwnPropertyDescriptor(element.props, 'ref')?.get
  let warn = getter && 'isReactWarning' in getter && getter.isReactWarning

  if (warn) {
    return (element as any).ref
  }

  getter = Object.getOwnPropertyDescriptor(element, 'ref')?.get
  warn = getter && 'isReactWarning' in getter && getter.isReactWarning

  if (warn) {
    return (element.props as { ref?: React.Ref<unknown> }).ref
  }

  return (element.props as { ref?: React.Ref<unknown> }).ref || (element as any).ref
}
