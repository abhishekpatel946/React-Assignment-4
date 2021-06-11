import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const Label = (props) => {
  // typechecking with propTypes
  Label.propTypes = {
    name: PropTypes.string,
  };

  return (
    <div>
      <h3 className='Label'>{props.name}</h3>
    </div>
  );
};

export default Label;
