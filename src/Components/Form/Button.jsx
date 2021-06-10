import React from 'react';
import '../../SCSS/main.scss';

const Button = (props) => {
  const { type, className, onClick, name } = props;
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
