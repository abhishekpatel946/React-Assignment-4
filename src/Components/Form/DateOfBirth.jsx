import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../SCSS/main.scss';

const DateOfBirth = (props) => {
  // state for the datePicker
  // const [startDate, setStartDate] = useState(new Date());

  return (
    // <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <DatePicker
      className='Input-name Date-picker'
      selected={props.dateOfBirth}
      onChange={props.changeHandler}
    />
  );
};

export default DateOfBirth;
