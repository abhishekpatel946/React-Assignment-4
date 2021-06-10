import React from 'react';
import '../../SCSS/main.scss';

const RadioButton = (props) => {
  return (
    <div className='Radio-button'>
      <input
        className='Radio-input'
        type='radio'
        value='Male'
        name='Gender'
        onChange={props.changeHandler}
      />
      <span className='Radio-text'>Male</span>
      <input
        className='Radio-input'
        type='radio'
        value='Female'
        name='Gender'
        onChange={props.changeHandler}
      />
      <span className='Radio-text'>Female</span>
      <input
        className='Radio-input'
        type='radio'
        value='Other'
        name='Gender'
        onChange={props.changeHandler}
      />
      <span className='Radio-text'>Other</span>
    </div>
  );
};

export default RadioButton;
