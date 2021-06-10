import React from 'react';

const RadioButton = (props) => {
  return (
    <div className='Radio-button'>
      <input
        type='radio'
        value='Male'
        name='Gender'
        onChange={props.changeHandler}
      />{' '}
      Male
      <input
        type='radio'
        value='Female'
        name='Gender'
        onChange={props.changeHandler}
      />{' '}
      Female
      <input
        type='radio'
        value='Other'
        name='Gender'
        onChange={props.changeHandler}
      />{' '}
      Other
    </div>
  );
};

export default RadioButton;
