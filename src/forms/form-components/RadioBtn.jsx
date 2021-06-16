import React from 'react';
import PropTypes from 'prop-types';

const RadioBtn = (props) => {
  // destructring props
  const { onChange, className, options } = props;

  return (
    <div className='radio-button'>
      {options.map((item) => (
        <span key={item.title} className='radio-text'>
          <input
            key={item.title}
            className={className}
            type='radio'
            value={item.title}
            name={item.id}
            onChange={onChange}
            // required
          />
          {item.title}
        </span>
      ))}
    </div>
  );
};
// typechecking with propTypes
RadioBtn.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.array,
};

export default RadioBtn;
