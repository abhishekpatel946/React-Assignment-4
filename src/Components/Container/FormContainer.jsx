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
  const clickHandler = (e) => {
    // validate the form
    if (!name) {
      alert('Name is mandatory!');
    }
    if (!email) {
      alert('Email is mandatory');
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Email is incorrect!');
    }
    if (!dateOfBirth) {
      alert('DateOfBirth is mandatory!');
    } else if (true) {
      // check for date < todays date
      // dob is always correct
      // alert for 18 adult
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
    }

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
          onChange={changeHandlerName}
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
          onChange={changeHandlerEmail}
          value={email}
        />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} name={'Date Of Birth'} />
      </div>
      <div className='container-element'>
        <DatePicker onChange={changeHandlerDoB} dateOfBirth={dateOfBirth} />
      </div>

      <div className='container-heading'>
        <Label className={'Label'} />
      </div>
      <div className='container-element'>
        <RadioButton
          name={'Gender'}
          value={gender}
          onChange={changeHandlerGender}
        />
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
          name='Education'
          value={education}
          onChange={changeHandlerEdu}
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
          onChange={changeHandlerPass}
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
          onChange={changeHandlerCpass}
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
