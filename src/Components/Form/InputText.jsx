import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './form-scss/form-component.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const InputText = (props) => {
  // destructring props
  const { type, value, name, placeholder, onChange } = props;
  const classes = useStyles();
  return (
    <TextField
      label={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      required
    />
  );
};

// typechecking with propTypes
InputText.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
