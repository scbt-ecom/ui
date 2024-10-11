import * as React from 'react'
import { Icon } from '../../../icon/Icon'

export const useInputPassword = (onClickIcon?: (...args: unknown[]) => unknown) => {
  const [passportIsVisible, setPassportIsVisible] = React.useState(false)

  const handleShowPassword = () => {
    setPassportIsVisible((prev) => !prev)
    if (onClickIcon) {
      onClickIcon()
    }
  }

  const displayPasswordIcon = React.useCallback(() => {
    switch (passportIsVisible) {
      case true:
        return <Icon name='general/hiddenEye' className='size-5 text-icon-blue-grey-600' />
      case false:
        return <Icon name='general/showEye' className='size-5 text-icon-blue-grey-600' />
      default:
        return <Icon name='general/hiddenEye' className='size-5 text-icon-blue-grey-600' />
    }
  }, [passportIsVisible])

  return { passportIsVisible, handleShowPassword, displayPasswordIcon }
}
