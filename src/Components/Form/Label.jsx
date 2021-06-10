import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  // typechecking with propTypes
  Label.propTypes = {
    name: PropTypes.string,
  };

  return (
    <div>
      <h3 className={props.classname}>{props.name}</h3>
    </div>
  );
};

export default Label;
