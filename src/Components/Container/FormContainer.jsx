import React, { useState } from 'react';
import Button from '../Form/Button';
import DatePicker from '../Form/DateOfBirth';
import InputText from '../Form/InputText';
import Label from '../Form/Label';
import RadioButton from '../Form/RadioButton';
import SelectOption from '../Form/SelectOption';

const FormContainer = () => {
  // state for containing data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // change handler for states
  const changeHandler = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
    setConfirmPassword(e.target.value);
  };

  // click handler for validation
  const clickHandler = (e) => {
    console.log(name);
    console.log(e.target.value);

    // reset the state
    setName('');
    setEmail('');
    setDateOfBirth('');
    setGender('');
    setEducation('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <Label className={'Label'} name={'Name'} />
      <InputText
        className={'Input-name'}
        type={'text'}
        name={'Name'}
        placeholder={'Enter your name'}
        onChange={changeHandler}
        value={name}
      />

      <Label className={'Label'} name={'Email'} />
      <InputText
        className={'Input-email'}
        type={'email'}
        name={'Email'}
        placeholder={'Enter your email'}
        onChange={changeHandler}
        value={email}
      />

      <Label className={'Label'} name={'Date Of Birth'} />
      <DatePicker onChange={changeHandler} dateOfBirth={dateOfBirth} />

      <Label className={'Label'} name={'Gender'} />
      <RadioButton onChange={changeHandler} />

      <Label className={'Label'} name={'Profile Pic'} />
      <InputText className={'Input-file'} type={'file'} />

      <Label className={'Label'} name={'Level of Education'} />
      <SelectOption
        name={'select'}
        value={education}
        onChange={changeHandler}
      />

      <Label className={'Label'} name={'Password'} />
      <InputText
        className={'Input-password'}
        type={'password'}
        name={'Password'}
        placeholder={'Enter your password'}
        onChange={changeHandler}
        value={password}
      />

      <Label className={'Label'} name={'Confirm Password'} />
      <InputText
        className={'Input-re-password'}
        type={'password'}
        name={'RePassword'}
        placeholder={'Re enter your password'}
        onChange={changeHandler}
        value={confirmPassword}
      />
      <Button
        className={'Button'}
        type={'submit'}
        name={'Submit'}
        onClick={clickHandler}
      />
      <div style={{ marginBottom: '40px' }}></div>
    </div>
  );
};

export default FormContainer;
