import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const Button = (props) => {
  // typechecking with propTypes
  Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
  };

  // destructring props
  const { type, className, onClick, name } = props;

  return (
    <div>
      <button
        className={className}
        type={type}
        // onClick={onClick}
        onSubmit={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
