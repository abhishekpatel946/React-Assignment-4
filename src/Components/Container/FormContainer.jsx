import React, { useState } from 'react';
import Button from '../Form/Button';
import DatePicker from '../Form/DateOfBirth';
import Error from '../ErrorPrompt/Error';
import InputText from '../Form/InputText';
import Label from '../Form/Label';
import PassStrengthBar from '../Form/PassStrenghtBar';
import RadioButton from '../Form/RadioButton';
import SelectOption from '../Form/SelectOption';
import './Form-container.scss';

const FormContainer = () => {
  // state for containing data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // change handler for states
  const changeHandlerName = (e) => {
    setName(e.target.value);
  };
  const changeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeHandlerDoB = (e) => {
    setDateOfBirth(e);
  };
  const changeHandlerGender = (e) => {
    setGender(e.target.value);
  };
  const changeHandlerEdu = (e) => {
    setEducation(e.target.value);
  };
  const changeHandlerPass = (e) => {
    setPassword(e.target.value);
  };
  const changeHandlerCpass = (e) => {
    setConfirmPassword(e.target.value);
  };

  // click handler for validation
  const handleSubmit = (e) => {
    // validate the form
    if (!name) {
      <Error msg={'error prompt for Name'} />;
      alert('Name is mandatory!');
    }
    if (!email) {
      alert('Email is mandatory!');
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Email is incorrect!');
    }
    if (!dateOfBirth) {
      alert('DateOfBirth is mandatory!');
    }
    if (!gender) {
      alert('Gender is mandatory!');
    }
    if (!education) {
      alert('Education is mandatory!');
    }
    if (!password) {
      alert('Password is mandatory');
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert('Please choose a strong password!');
    }
    if (!confirmPassword) {
      alert('Confirm-Password is mandatory!');
    } else if (confirmPassword !== password) {
      alert("Password's are not matched!");
    } else {
      alert('Form Validation Successful.');
    }

    // reset the state
    setName('');
    setEmail('');
    setDateOfBirth('');
    setGender('');
    setEducation('');
    setPassword('');
    setConfirmPassword('');

    // form event-prevent-default
    e.preventDafault();
  };

  return (
    <div className='Form-container'>
      <form onSubmit={handleSubmit}>
        <Label name={'Name'} />
        <InputText
          type={'text'}
          name={'Name'}
          placeholder={'Enter your name'}
          onChange={changeHandlerName}
          value={name}
        />

        <Label className={'Label'} name={'Email'} />
        <InputText
          type={'email'}
          name={'Email'}
          placeholder={'Enter your email'}
          onChange={changeHandlerEmail}
          value={email}
        />

        <Label className={'Label'} name={'Date Of Birth'} />
        <DatePicker onChange={changeHandlerDoB} dateOfBirth={dateOfBirth} />

        <Label className={'Label'} />
        <RadioButton
          name={'Gender'}
          value={gender}
          onChange={changeHandlerGender}
        />

        <Label className={'Label'} name={'Profile Pic'} />
        <InputText className={'Input-file'} type={'file'} />

        <Label className={'Label'} name={'Level of Education'} />
        <SelectOption
          name='Education'
          value={education}
          onChange={changeHandlerEdu}
        />

        <Label className={'Label'} name={'Password'} />
        <InputText
          type={'password'}
          name={'Password'}
          placeholder={'Enter your password'}
          onChange={changeHandlerPass}
          value={password}
        />
        <PassStrengthBar password={password} />

        <Label className={'Label'} name={'Confirm Password'} />
        <InputText
          type={'password'}
          name={'RePassword'}
          placeholder={'Re enter your password'}
          onChange={changeHandlerCpass}
          value={confirmPassword}
        />
        <PassStrengthBar password={confirmPassword} />

        <Button className={'Button'} type={'submit'} name={'Submit'} />
      </form>
    </div>
  );
};

export default FormContainer;
