import React from 'react';
import PropTypes from 'prop-types';

const SelectOptions = (props) => {
  // destructring props
  const { name, value, onChange, options } = props;

  return (
    <select
      className='input-name'
      name={name}
      value={value}
      onChange={onChange}
      required>
      {options.map((item) => (
        <option key={item.grade} className={item.className}>
          {item.grade}
        </option>
      ))}
    </select>
  );
};

// typechecking with propTypes
SelectOptions.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default SelectOptions;
