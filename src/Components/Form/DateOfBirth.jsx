import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import './form-scss/form-component.scss';

const DateOfBirth = (props) => {
  // typechecking with propTypes
  DateOfBirth.propTypes = {
    className: PropTypes.string,
  };

  // destructring props
  const { dateOfBirth, onChange } = props;
  return (
    <DatePicker
      className='Input-name Date-picker'
      selected={dateOfBirth}
      // value={dateOfBirth}
      onChange={onChange}
    />
  );
};

export default DateOfBirth;
