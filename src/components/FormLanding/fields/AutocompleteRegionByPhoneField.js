import React, { useEffect } from "react"
import MaterialAutocompleteField from "../../AutocompleteField"
import { Field } from "../FormContext/Field"
import { autocompleteValidator } from "../validators"

import useStyles from "./styles"
import REGIONS from "../../../enums/regions"

const AutocompleteRegionByPhoneField = React.memo(props => {
  const onChange = (_, value) => {
    props.onChange(value)
  }

  useEffect(() => {
    const getRegionByPhone = phone =>
      fetch(`${props.api_url}/v1/region-detect?phone=${phone}`)
        .then(response => response.json())
        .then(data => data.region)

    if (props.phone && props.phone.length === 11) {
      getRegionByPhone(props.phone).then(data => {
        props.onChange(
          REGIONS.filter(obj => Object.keys(obj).some(key => obj[key].includes(data)))[0]
        )
      })
    }
  }, [props.phone])

  return <MaterialAutocompleteField {...props} onChange={onChange} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "AutocompleteRegionByPhoneField"
WrappedField.defaultProps = {
  component: AutocompleteRegionByPhoneField,
  validate: autocompleteValidator,
  defaultValue: null,
  options: REGIONS,
  validateOnBlur: false,
  fullWidth: true,
  phone: "",
  api_url: "https://api-app.sovcokbank.ru"
}

export default WrappedField
