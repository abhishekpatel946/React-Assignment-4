import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../SCSS/main.scss';

const DateOfBirth = (props) => {
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
