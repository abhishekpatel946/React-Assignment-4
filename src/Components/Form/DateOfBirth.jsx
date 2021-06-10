import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateOfBirth = (props) => {
  // state for the datePicker
  // const [startDate, setStartDate] = useState(new Date());

  return (
    // <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <DatePicker selected={props.dateOfBirth} onChange={props.changeHandler} />
  );
};

export default DateOfBirth;
