import React, { useReducer, useState } from 'react';
import Button from '../Form/Button';
import Container from '@material-ui/core/Container';
import DatePicker from '../Form/DateOfBirth';
import InputText from '../Form/InputText';
import Label from '../Form/Label';
import PassStrengthBar from '../Form/PassStrenghtBar';
import RadioButton from '../Form/RadioButton';
import SelectOption from '../Form/SelectOption';
import Table from '../Table/Table';
import Validation from '../Validation/Validation';
import './Form-container.scss';

// reducer to store the formDate when submitting
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const FormContainer = () => {
  // state for containing data
  const [formData, setFormData] = useReducer(formReducer, {});
  const [runner, setRunner] = useState(false);

  // onSubmission validation
  const handleSubmit = (event) => {
    event.preventDafault();
    setTimeout(() => {
      setFormData({
        name: '',
        value: '',
      });
      setRunner(false);
    }, 3000);
  };

  // onChange handle
  const handleChange = (event) => {
    setFormData({
      name: !event.target.name ? 'Date' : event.target.name,
      value: event.target.value,
    });
  };

  // onClick handle
  const handleClick = (event) => {
    setRunner(true);
  };

  // Constant Options
  const genderOptions = [
    { id: 'Gender', title: 'Male' },
    { id: 'Gender', title: 'Female' },
    { id: 'Gender', title: 'Other' },
  ];
  const educationOption = [
    { className: 'options-select-option', grade: 'Choose Grade' },
    { className: 'options-select-option', grade: '10th Grade' },
    { className: 'options-select-option', grade: '12th Grade' },
    { className: 'options-select-option', grade: "Bachelor's Degree" },
    { className: 'options-select-option', grade: "Master's Degree" },
    { className: 'options-select-option', grade: 'Doctoral Degree' },
  ];

  return (
    <div>
      <Container maxWidth='sm'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <Label className={'label'} name={'Name'} />
            <InputText
              type={'text'}
              name={'Name'}
              placeholder={'Enter your name'}
              onChange={handleChange}
            />

            <Label className={'label'} name={'Email'} />
            <InputText
              type={'email'}
              name={'Email'}
              placeholder={'Enter your email'}
              onChange={handleChange}
            />

            <Label className={'label'} name={'Date Of Birth'} />
            <DatePicker name={'DateOfBirth'} onChange={handleChange} />

            <Label className={'label'} />
            <RadioButton
              className={'radio-input'}
              options={genderOptions}
              onChange={handleChange}
            />

            <Label className={'label'} name={'Profile Pic'} />
            <InputText
              name={'Picture'}
              className={'input-file'}
              type={'file'}
            />

            <Label className={'label'} name={'Level of Education'} />
            <SelectOption
              options={educationOption}
              name='Education'
              onChange={handleChange}
            />

            <Label className={'label'} name={'Password'} />
            <InputText
              type={'password'}
              name={'Password'}
              placeholder={'Enter your password'}
              onChange={handleChange}
            />
            <PassStrengthBar password={formData.Password} />

            <Label className={'label'} name={'Confirm Password'} />
            <InputText
              type={'password'}
              name={'RePassword'}
              placeholder={'Re enter your password'}
              onChange={handleChange}
            />
            <PassStrengthBar password={formData.RePassword} />

            <Button
              className={'button'}
              type={'submit'}
              name={'Submit'}
              onClick={handleClick}
            />
            <Validation
              name={formData.Name}
              email={formData.Email}
              gender={formData.Gender}
              education={formData.Education}
              password={formData.Password}
              repassword={formData.RePassword}
              runner={runner}
              formData={formData}
            />
          </form>
        </div>
      </Container>
      {/* Table to Display data */}
      <Table formData={formData} />
    </div>
  );
};

export default FormContainer;
