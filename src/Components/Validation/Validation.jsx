import React from 'react';
import DataService from '../Utils/DataService';
import PropTypes from 'prop-types';

const Validation = (props) => {
  // trigger the dataService for storing the validate data
  let trigger = true;

  // destructring props
  const {
    name,
    email,
    gender,
    education,
    password,
    repassword,
    runner,
    formData,
  } = props;

  // validation check
  if (runner) {
    if (name && email && gender && education && password && repassword) {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        trigger = false;
        alert('Email is incorrect!');
      } else if (
        !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(
          password
        )
      ) {
        trigger = false;
        alert('Please choose a strong password!');
      } else if (repassword !== password) {
        trigger = false;
        alert("Password's are not matched!");
      }
    }
  }
  return (
    <div>
      {/* call the localStorage dataService to store the data */}
      {trigger ? <DataService formData={formData} /> : ''}
    </div>
  );
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
  formData: PropTypes.object,
};

export default Validation;
