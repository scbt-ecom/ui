import React from 'react';
import MaskedField from '../MaskedField';

const PHONE_MASKS = [
  {
    mask: '+{7} (000) 000-00-00',
    lazy: false,
  },
  {
    mask: '{8} (000) 000-00-00',
    lazy: false,
  },
];
const PhoneField = React.memo(props => {
  return (
    <MaskedField
      type="tel"
      mask={PHONE_MASKS}
      dispatch={(appended, dynamicMasked) => {
        const number = (dynamicMasked.value + appended).replace(/\D/g, '');

        if (number) {
          return number.startsWith('7')
            ? dynamicMasked.compiledMasks[0]
            : dynamicMasked.compiledMasks[1];
        }
      }}
      {...props}
    />
  );
});

export default PhoneField;
