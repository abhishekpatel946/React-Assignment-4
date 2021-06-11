import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import './form-scss/form-component.scss';

const DateOfBirth = (props) => {
  // destructring props
  const { dateOfBirth, onChange } = props;
  return (
    <DatePicker
      className='input-name date-picker'
      selected={dateOfBirth}
      onChange={onChange}
    />
  );
};

// typechecking with propTypes
DateOfBirth.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default DateOfBirth;
