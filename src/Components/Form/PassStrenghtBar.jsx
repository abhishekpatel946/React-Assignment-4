import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const PassStrengthBar = (props) => {
  // typechecking with propTypes
  PassStrengthBar.propTypes = {
    password: PropTypes.string,
  };

  // destructring props
  const { password } = props;

  return (
    <div className='Password-container'>
      <PasswordStrengthBar className='Password-bar' password={password} />
    </div>
  );
};

export default PassStrengthBar;
