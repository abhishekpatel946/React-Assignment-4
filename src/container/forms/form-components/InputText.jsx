import React from 'react';
import PropTypes from 'prop-types';

export const InputText = (props) => {
  // destructring props
  const { type, value, name, placeholder, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
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
