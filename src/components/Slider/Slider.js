import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import TextField from '../TextField';
import NumberFormat from 'react-number-format'; //https://github.com/s-yadav/react-number-format

import useStyles from './styles';

const SliderComponent = React.memo(props => {
  const classes = useStyles(props);
  const [value, setValue] = useState(
    props.initialValue || props.value || props.min
  );

  const setValueNCallCb = (value, newValue, cb) => {
    if (value === newValue) {
      return;
    }
    setValue(newValue);
    cb(newValue);
  };

  const handleSliderChange = (event, newValue) => {
    // setValueNCallCb(value, newValue, props.onChange);
    setValue(newValue);
    props.onChange(newValue);
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    if (props.onChangeCommitted) {
      // setValueNCallCb(value, newValue, props.onChangeCommitted);
      setValue(newValue);
      props.onChangeCommitted(newValue);
    }
  };

  const handleInputChange = ({ floatValue }) => {
    if (floatValue !== value) {
      setValue(floatValue);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(floatValue);
      }
      props.onChange(floatValue);
    }
  };

  const handleInputBlur = e => {
    const { min, max } = props;
    let newValue = 0;

    if (value <= min) {
      newValue = min;
    } else if (value >= max) {
      newValue = max;
    }

    if (newValue) {
      setValue(newValue);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(newValue);
      }
      props.onChange(newValue);
    }
  };
  const { sliderProps, inputProps, label, min, max } = props;

  return (
    <div className={classes.container}>
      <NumberFormat
        {...inputProps}
        label={label}
        className={classes.input}
        customInput={TextField}
        thousandSeparator={' '}
        value={value}
        onValueChange={handleInputChange}
        fullWidth
        allowNegative={false}
        decimalScale={0}
        onBlur={handleInputBlur}
        // aria-labelledby="slider"
        InputProps={{
          readOnly: props.discrete,
        }}
      />
      <Slider
        {...sliderProps}
        classes={{
          root: classes.sliderRoot,
          markLabel: classes.sliderMarkLabel,
          mark: classes.sliderMark,
        }}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        // aria-labelledby="slider"
        min={min}
        max={max}
      />
    </div>
  );
});

SliderComponent.defaultProps = {
  onChange: () => null,
};

export default SliderComponent;
