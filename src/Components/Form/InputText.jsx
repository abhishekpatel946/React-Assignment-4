import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './form-scss/form-component.scss';

const InputText = (props) => {
  // destructring props
  const { type, value, name, placeholder, onChange } = props;

  return (
    <TextField
      label={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      // required
    />
  );
};

// typechecking with propTypes
InputText.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
