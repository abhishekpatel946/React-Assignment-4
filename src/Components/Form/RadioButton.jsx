import React from 'react';
import '../../SCSS/main.scss';

const RadioButton = (props) => {
  const { name, value, onChange } = props;
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
