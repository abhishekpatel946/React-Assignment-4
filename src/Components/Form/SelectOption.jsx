import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const SelectOptions = (props) => {
  // typechecking with propTypes
  SelectOptions.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
  };

  // destructring props
  const { name, value, onChange } = props;

  return (
    <div className='Options'>
      <select
        className='Input-name'
        name={name}
        value={value}
        onChange={onChange}>
        <option className='Option-select-option'>10th Grade</option>
        <option className='Option-select-option'>12th Grade</option>
        <option className='Option-select-option'>Bachelor's Degree</option>
        <option className='Option-select-option'>Master's Degree</option>
        <option className='Option-select-option'>Doctoral Degree</option>
      </select>
    </div>
  );
};

export default SelectOptions;
