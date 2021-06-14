import React from 'react';
import PropTypes from 'prop-types';

const Validation = (props) => {
  // destructring props
  const { name, email, gender, education, password, repassword } = props;

  // validation check
  if (name && email && gender && education && password && repassword) {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Email is incorrect!');
    } else if (
      !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(
        password
      )
    ) {
      alert('Please choose a strong password!');
    } else if (repassword !== password) {
      alert("Password's are not matched!");
    }
  }

  return (
    <div>{/* call the localStorage dataService to store the data */}S</div>
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
