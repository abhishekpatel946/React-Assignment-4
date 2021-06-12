import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataService = (props) => {
  // destructring props
  const { formData } = props;

  // initial state for localStorage
  const [value, setValue] = useState([]);

  // update the state of localStorage
  useEffect(() => {
    localStorage.setItem(localStorage, value);
  }, [value, setValue]);

  // setter-service
  localStorage.setItem('userData', formData);

  localStorage.setItem('userData', JSON.stringify(formData));
  const resultData = JSON.parse(localStorage.getItem('userData'));

  // getter-service
  localStorage.getItem('userData');

  //remove-service
  localStorage.clear('userData');

  return <div>{resultData}</div>;
};

// typechecking with propTypes
DataService.propTypes = {
  formData: PropTypes.object,
};

export default DataService;
