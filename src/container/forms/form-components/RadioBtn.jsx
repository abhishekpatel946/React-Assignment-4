import React from 'react';
import PropTypes from 'prop-types';

const RadioBtn = (props) => {
  // destructring props
  const { onChange, className, options } = props;

  return (
    <div>
      {options.map((item) => (
        <span key={item.title} style={{ padding: '10px', fontSize: '20px' }}>
          <input
            key={item.title}
            className={className}
            type='radio'
            value={item.title}
            name={item.id}
            onChange={onChange}
            required
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
