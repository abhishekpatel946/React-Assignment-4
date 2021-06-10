import React, { useState } from 'react';
import Button from '../Form/Button';
import DatePicker from '../Form/DateOfBirth';
import InputText from '../Form/InputText';
import Label from '../Form/Label';
import RadioButton from '../Form/RadioButton';
import SelectOption from '../Form/SelectOption';
import '../../SCSS/main.scss';

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
    <div className='Form-container'>
      <div className='container-heading'>
        <Label name={'Name'} />
      </div>
      <div className='container-element'>
        <InputText
          type={'text'}
          name={'Name'}
          placeholder={'Enter your name'}
          onChange={changeHandler}
          value={name}
        />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Email'} />
      </div>
      <div className='container-element'>
        <InputText
          type={'email'}
          name={'Email'}
          placeholder={'Enter your email'}
          onChange={changeHandler}
          value={email}
        />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Date Of Birth'} />
      </div>
      <div className='container-element'>
        <DatePicker onChange={changeHandler} dateOfBirth={dateOfBirth} />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Gender'} />
      </div>
      <div className='container-element'>
        <RadioButton onChange={changeHandler} />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Profile Pic'} />
      </div>
      <div className='container-element'>
        <InputText className={'Input-file'} type={'file'} />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Level of Education'} />
      </div>
      <div className='container-element'>
        <SelectOption
          name={'select'}
          value={education}
          onChange={changeHandler}
        />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Password'} />
      </div>
      <div className='container-element'>
        <InputText
          type={'password'}
          name={'Password'}
          placeholder={'Enter your password'}
          onChange={changeHandler}
          value={password}
        />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Confirm Password'} />
      </div>
      <div className='container-element'>
        <InputText
          type={'password'}
          name={'RePassword'}
          placeholder={'Re enter your password'}
          onChange={changeHandler}
          value={confirmPassword}
        />
      </div>
      <Button
        className={'Button'}
        type={'submit'}
        name={'Submit'}
        onClick={clickHandler}
      />
    </div>
  );
};

export default FormContainer;
