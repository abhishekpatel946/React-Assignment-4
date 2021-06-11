import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const InputText = (props) => {
  // typechecking with propTypes
  InputText.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
  };

  // destructring props
  const { type, value, name, placeholder, onChange } = props;

  return (
    <div className='InputText'>
      <input
        className='Input-name'
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
