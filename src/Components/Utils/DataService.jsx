import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '../Table/Table';

const DataService = (props) => {
  // destructring props
  const { formData, runner } = props;

  // update the state of localStorage
  useEffect(() => {
    if (formData && runner) {
      localStorage.setItem('userData', JSON.stringify(formData));
    }
  }, [formData, runner]);

  // getter-service
  const data = localStorage.getItem('userData');
  let resultData;
  if (data && runner) {
    resultData = JSON.parse(localStorage.getItem('userData'));
  }

  return (
    <div>
      <Table resultData={resultData} formData={formData} />
    </div>
  );
};

// typechecking with propTypes
DataService.propTypes = {
  formData: PropTypes.object,
  runner: PropTypes.bool,
};

export default DataService;
