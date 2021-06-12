import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMui from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './form-scss/form-component.scss';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Button = (props) => {
  // destructring props
  const { type, onClick, name } = props;
  const classes = useStyles();

  return (
    <ButtonMui
      variant='outlined'
      size='large'
      color='primary'
      className={classes.margin}
      type={type}
      onClick={onClick}>
      {name}
    </ButtonMui>
  );
};

// typechecking with propTypes
Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
