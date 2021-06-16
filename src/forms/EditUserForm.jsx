import React, { useState, useEffect } from 'react';
import DatePicker from './form-components/DatePicker';
import InputText from './form-components/InputText';
import PropTypes from 'prop-types';
import RadioBtn from './form-components/RadioBtn';
import Select from './form-components/Select';
import PropType from 'prop-types';

const EditUserForm = (props) => {
  // destructring the props
  const {
    currentUser,
    updateUser,
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
      id: new Date().getTime(),
      [name]: value,
    });
  };

  return (
    <form
      id='editUserFormId'
      onSubmit={(event) => {
        event.preventDefault();
        updateUser(user.id, user);
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
      <DatePicker value={user.dob || ''} onChange={handleInputChange} />
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

      <button>Update user</button>
      <button onClick={() => setEditing(false)} className='button muted-button'>
        Cancel
      </button>
    </form>
  );
};

// type checking props
EditUserForm.propTypes = {
  editing: PropType.bool,
  currentUser: PropTypes.object,
  updateUser: PropTypes.func,
  setEditing: PropTypes.func,
  genderOptions: PropType.array,
  educationOption: PropType.array,
};

export default EditUserForm;
