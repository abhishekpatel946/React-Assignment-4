import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        type={props.type}
        onClick={props.clickHandler}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
