import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '../Table/Table';

const DataService = (props) => {
  // destructring props
  const { formData } = props;

  // update the state of localStorage
  useEffect(() => {
    if (formData) {
      localStorage.setItem('userData', JSON.stringify(formData));
    }
  }, [formData]);

  // getter-service
  let resultData = JSON.parse(localStorage.getItem('userData'));
  console.log(resultData);

  return <div>{/* <Table /> */}</div>;
};

// typechecking with propTypes
DataService.propTypes = {
  formData: PropTypes.object,
};

export default DataService;
