import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './form-scss/form-component.scss';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DateOfBirth = (props) => {
  // destructring props
  const { dateOfBirth, onChange, className } = props;
  const classes = useStyles();

  return (
    <TextField
      id='date'
      label='Date of Birth'
      type='date'
      format='DD-MM-YYYY'
      required
      defaultValue={dateOfBirth}
      onChange={onChange}
      className={(classes.textField, className)}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

// typechecking with propTypes
DateOfBirth.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default DateOfBirth;
