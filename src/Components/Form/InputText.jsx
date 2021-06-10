import React from 'react';

const InputText = (props) => {
  return (
    <div className='InputText'>
      <input
        className={props.className}
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
