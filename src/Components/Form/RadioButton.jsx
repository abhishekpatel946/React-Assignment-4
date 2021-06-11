import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const RadioButton = (props) => {
  // typechecking with propTypes
  RadioButton.propTypes = {
    name: PropTypes.string,
  };

  // destructring props
  const { name, onChange } = props;

  return (
    <div className='Radio-button'>
      <input
        className='Radio-input'
        type='radio'
        value='Male'
        name={name}
        onChange={onChange}
      />
      <span className='Radio-text'>Male</span>
      <input
        className='Radio-input'
        type='radio'
        value='Female'
        name={name}
        onChange={onChange}
      />
      <span className='Radio-text'>Female</span>
      <input
        className='Radio-input'
        type='radio'
        value='Others'
        name={name}
        onChange={onChange}
      />
      <span className='Radio-text'>Other</span>
    </div>
  );
};

export default RadioButton;
