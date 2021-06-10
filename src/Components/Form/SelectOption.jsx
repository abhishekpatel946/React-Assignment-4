import React from 'react';
import '../../SCSS/main.scss';

const SelectOptions = (props) => {
  return (
    <div className='Options'>
      <form>
        <select
          className='Input-name'
          name={props.name}
          value={props.education}
          onChange={props.changeHandler}>
          <option className='Option-select-option'>10th Grade</option>
          <option className='Option-select-option'>12th Grade</option>
          <option className='Option-select-option'>Bachelor's Degree</option>
          <option className='Option-select-option'>Master's Degree</option>
          <option className='Option-select-option'>Doctoral Degree</option>
        </select>
      </form>
    </div>
  );
};

export default SelectOptions;
