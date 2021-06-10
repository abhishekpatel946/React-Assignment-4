import React from 'react';
import '../../SCSS/main.scss';

const InputText = (props) => {
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
