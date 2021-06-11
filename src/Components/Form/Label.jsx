import React from 'react';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const Label = (props) => {
  // destructring props
  const { name, className } = props;

  return <h3 className={className}>{name}</h3>;
};

// typechecking with propTypes
Label.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
