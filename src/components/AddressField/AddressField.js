import React, { useState, useCallback, useEffect, useRef } from "react"

import MUITextField from "@material-ui/core/TextField"
import withSpaceForHelperTxt from "../HOCs/withSpaceForHelperTxt"

import DadataField from "../DadataField"
import Checkbox from "../Checkbox/Checkbox"
import { useStylesAddressDadata, useStylesFlatInfo } from "./styles"

const TextField = withSpaceForHelperTxt(MUITextField)
const addFlatInfoToDadata = (dadataValue, flat, isNoFlat) => ({
  ...dadataValue,
  isNoFlat,
  data: {
    ...dadataValue.data,
    flat,
  },
})

if (process.env.NODE_ENV !== "production") {
  console.error(
    '⚠️ Deprecation component "AddressField". Use the "DadataFields/DadataAddressFlat.js" instead'
  )
}
/**
 * @deprecated use DadataFields/DadataAddressFlat.js instead
 */
const AddressField = React.memo(({ onChange, ...props }) => {
  const addressDadataClasses = useStylesAddressDadata(props.classes.addressDadataClasses)
  const flatInfoClasses = useStylesFlatInfo(props.classes.flatInfoClasses)

  const [addressDadata, setAddressDadata] = useState(null)
  const [flat, setFlat] = useState("")
  const [isNoFlat, setIsNoFlat] = useState(false)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    if (!addressDadata) {
      onChange(null)
      return
    }
    const sendData = addFlatInfoToDadata(addressDadata, flat, isNoFlat)
    onChange(sendData)
    // eslint-disable-next-line
  }, [addressDadata, flat, isNoFlat])

  const handleAddressDadataChange = useCallback((value) => {
    setAddressDadata(value)
  }, [])

  const handleFlatChange = useCallback((e) => {
    const {
      target: { value },
    } = e
    setFlat(value)
  }, [])

  const handleNoFlatChange = useCallback((e) => {
    const {
      target: { checked },
    } = e
    setIsNoFlat(checked)
  }, [])

  const addressDadataErrorProps = {
    error: props.error ? Boolean(props.error.addressDadata) : false,
    helperText: props.helperText.addressDadata,
  }
  const flatErrorProps = {
    error: props.error ? Boolean(props.error.flat) : false,
    helperText: props.helperText.flat,
  }

  return (
    <div>
      <div className={addressDadataClasses.container}>
        <DadataField
          onChange={handleAddressDadataChange}
          type="address"
          label="Адрес"
          dadataOptions={{ to_bound: { value: "house" } }}
          fullWidth
          {...addressDadataErrorProps}
        />
      </div>
      <div className={flatInfoClasses.container}>
        <TextField
          label="Квартира"
          onChange={handleFlatChange}
          value={flat}
          disabled={isNoFlat}
          classes={{
            root: flatInfoClasses.flatField,
          }}
          {...flatErrorProps}
        />
        <Checkbox
          onChange={handleNoFlatChange}
          label="Нет номера квартиры"
          color="primary"
          checked={isNoFlat}
          classes={{ labelClasses: { root: flatInfoClasses.checkbox } }}
        />
      </div>
    </div>
  )
})

AddressField.defaultProps = {
  helperText: { addressDadata: null, flat: null },
  classes: { addressDadataClasses: {}, flatInfoClasses: {} },
}
export default AddressField
