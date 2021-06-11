import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  // typechecking with propTypes
  Error.propTypes = {
    msg: PropTypes.string,
  };

  // destructring props
  const { msg } = props;

  console.log(props);

  return <div>{alert({ msg })}</div>;
};

export default Error;
