import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const PassStrengthBar = (props) => {
  // destructring props
  const { password } = props;

  return (
    <div className='password-container'>
      <PasswordStrengthBar className='password-bar' password={password} />
    </div>
  );
};

// typechecking with propTypes
PassStrengthBar.propTypes = {
  password: PropTypes.string,
};

export default PassStrengthBar;
