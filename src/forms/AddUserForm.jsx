import React, { useState } from 'react';
import DatePicker from './form-components/DatePicker';
import InputText from './form-components/InputText';
import RadioBtn from './form-components/RadioBtn';
import Select from './form-components/Select';
import PropTypes from 'prop-types';

const AddUserForm = (props) => {
  // destructring props
  const { addUser, genderOptions, educationOption } = props;
  const [user, setUser] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      id: new Date().getTime(),
      [name]: value,
    });
  };

  return (
    <form
      id='addUserFormId'
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !user.name &&
          !user.email &&
          !user.gender &&
          !user.dob &&
          !user.gender &&
          !user.education &&
          !user.password &&
          !user.cpassword
        )
          return alert('Please fill the field!!!');

        addUser(user);
        setUser(user);
      }}>
      <label>Name</label>
      <InputText
        name={'name'}
        type={'text'}
        placeholder={'Enter the name'}
        value={user.name || ''}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <InputText
        name={'email'}
        type={'email'}
        placeholder={'Enter the email'}
        value={user.email || ''}
        onChange={handleInputChange}
      />

      <label>Date Of Birth</label>
      <DatePicker name='dob' value={user.dob} onChange={handleInputChange} />

      <label>Gender</label>
      <RadioBtn
        name='gender'
        value={user.gender || ''}
        onChange={handleInputChange}
        options={genderOptions}
      />

      <label>Education</label>
      <Select
        name='education'
        value={user.education || ''}
        onChange={handleInputChange}
        options={educationOption}
      />

      <label>Password</label>
      <InputText
        name={'password'}
        type={'password'}
        placeholder={'Enter the password'}
        value={user.password || ''}
        onChange={handleInputChange}
      />

      <label>Confirm Password</label>
      <InputText
        name={'cpassword'}
        type={'password'}
        placeholder={'Enter the confirm password'}
        value={user.cpassword || ''}
        onChange={handleInputChange}
      />

      <button>Add new user</button>
    </form>
  );
};

// typechecking with propTypes
AddUserForm.propTypes = {
  addUser: PropTypes.func,
  genderOptions: PropTypes.array,
  educationOption: PropTypes.array,
};

export default AddUserForm;
