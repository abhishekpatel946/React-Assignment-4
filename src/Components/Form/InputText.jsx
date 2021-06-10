import React from 'react';
import '../../SCSS/main.scss';

const InputText = (props) => {
  return (
    <div className='InputText'>
      <input
        className='Input-name'
        type={props.type}
        // value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default InputText;
