import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const Button = (props) => {
  // destructring props
  const { type, className, onClick, name } = props;

  return (
    <button className={className} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

// typechecking with propTypes
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
