type AnyProps = Record<string, any>

export const mergeProps = (slotProps: AnyProps, childProps: AnyProps) => {
  const override = { ...childProps }

  for (const prop in childProps) {
    const slotPropValue = slotProps[prop]
    const childPropValue = childProps[prop]

    // check if is handler
    if (/^on[A-Z]/.test(prop)) {
      if (slotPropValue && childPropValue) {
        override[prop] = (...args: unknown[]) => {
          slotPropValue(...args)
          childPropValue(...args)
        }
      }
    } else if (slotPropValue) {
      override[prop] = slotPropValue
    } else if (prop === 'style') {
      override[prop] = { ...slotPropValue, ...childPropValue }
    } else if (prop === 'className') {
      override[prop] = [slotPropValue, childPropValue].filter(Boolean).join(' ')
    }
  }

  return { ...slotProps, ...override }
}
