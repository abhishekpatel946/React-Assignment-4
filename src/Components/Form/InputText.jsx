import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const InputText = (props) => {
  // destructring props
  const { type, value, name, placeholder, onChange } = props;

  return (
    <input
      className='input-name'
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
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
