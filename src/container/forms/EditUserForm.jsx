import React, { useState, useEffect } from 'react';
import { DatePicker, InputText, RadioBtn, Select } from './form-components';
import PropTypes from 'prop-types';
import PasswordStrengthBar from 'react-password-strength-bar';

const EditUserForm = (props) => {
  // destructring the props
  const {
    currentUser,
    updateOldUser,
    setEditing,
    genderOptions,
    educationOption,
  } = props;

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <form
      id='editUserFormId'
      onSubmit={(event) => {
        event.preventDefault();
        updateOldUser(user.id, user);
      }}>
      <label>Name</label>
      <InputText
        name={'name'}
        type={'text'}
        placeholder={'Enter the name'}
        value={user.name}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <InputText
        name={'email'}
        type={'email'}
        placeholder={'Enter the email'}
        value={user.email}
        onChange={handleInputChange}
      />

      <label>Date Of Birth</label>
      <DatePicker name='dob' value={user.dob} onChange={handleInputChange} />

      <label>Gender</label>
      <RadioBtn
        name='gender'
        value={user.gender}
        onChange={handleInputChange}
        options={genderOptions}
      />

      <label>Education</label>
      <Select
        name='education'
        value={user.education}
        onChange={handleInputChange}
        options={educationOption}
      />

      <label>Password</label>
      <InputText
        name={'password'}
        type={'password'}
        placeholder={'Enter the password'}
        value={user.password}
        onChange={handleInputChange}
      />
      <PasswordStrengthBar password={user.password} />

      <label>Confirm Password</label>
      <InputText
        name={'cpassword'}
        type={'password'}
        placeholder={'Enter the confirm password'}
        value={user.cpassword}
        onChange={handleInputChange}
      />
      <PasswordStrengthBar password={user.cpassword} />

      <button>Update user</button>
      <button onClick={() => setEditing(false)} className='button muted-button'>
        Cancel
      </button>
    </form>
  );
};

// type checking props
EditUserForm.propTypes = {
  editing: PropTypes.bool,
  currentUser: PropTypes.object,
  updateOldUser: PropTypes.func,
  setEditing: PropTypes.func,
  genderOptions: PropTypes.array,
  educationOption: PropTypes.array,
};

export default EditUserForm;
