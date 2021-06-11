import React from 'react';
import PropTypes from 'prop-types';

const Validation = (props) => {
  // destructring props
  const { name, email, gender, education, password, repassword, runner } =
    props;

  // validation check
  if (runner) {
    if (!name) {
      alert('Name is mandatory!');
    }
    if (!email) {
      alert('Email is mandatory!');
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Email is incorrect!');
    }
    if (!gender) {
      alert('Gender is mandatory!');
    }
    if (!education) {
      alert('Education is mandatory!');
    }
    if (!password) {
      alert('Password is mandatory');
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert('Please choose a strong password!');
    }
    if (!repassword) {
      alert('Confirm-Password is mandatory!');
    } else if (repassword !== password) {
      alert("Password's are not matched!");
    } else {
      alert('Form Validation Successful.');
    }
  }
  return <div></div>;
};

// typechecking with propTypes
Validation.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  gender: PropTypes.string,
  education: PropTypes.string,
  password: PropTypes.string,
  repassword: PropTypes.string,
  runner: PropTypes.bool,
};

export default Validation;
