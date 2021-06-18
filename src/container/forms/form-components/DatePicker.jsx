import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export const DatePicker = (props) => {
  // destructring props
  const { value, onChange } = props;
  return (
    <TextField
      id='date'
      type='date'
      format='DD-MM-YYYY'
      onChange={onChange}
      value={value}
      // required
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

// typechecking with propTypes
DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
