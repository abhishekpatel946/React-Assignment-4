import React, { useReducer, useState, useEffect } from 'react';
import Button from '../Form/Button';
import Container from '@material-ui/core/Container';
import DatePicker from '../Form/DateOfBirth';
import { getter, initialSet, setter } from '../Utils/Data_Service';
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
    id: new Date().getTime(),
    [event.name]: event.value,
  };
};

const FormContainer = () => {
  // state for containing data
  const [formData, setFormData] = useReducer(formReducer, {});
  const [updatedArr, setUpdatedArr] = useState([]);

  // useEffect at once on page-load
  useEffect(() => {
    // getter() service called
    setUpdatedArr(getter('userData'));
  }, []);

  // formData in array format
  let arrayData = [formData];

  // onSubmission validation
  const handleSubmit = (event) => {
    event.preventDefault();

    // setter() service called
    setter('userData', arrayData);
    alert('Data Saved Successfully.');

    // reset the form
    document.getElementById('formId').reset();
    setFormData({
      name: '',
      value: '',
    });
  };

  // onChange handle
  const handleChange = (event) => {
    event.preventDefault();

    setFormData({
      name: !event.target.name ? 'Date' : event.target.name,
      value: event.target.value,
    });
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
          <form onSubmit={handleSubmit} id='formId'>
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

            <Button className={'button'} type={'submit'} name={'Submit'} />
            {/* <Validation
              name={formData.Name}
              email={formData.Email}
              gender={formData.Gender}
              education={formData.Education}
              password={formData.Password}
              repassword={formData.RePassword}
              formData={formData}
            /> */}
          </form>
        </div>
      </Container>
      {/* Table to Display data */}
      <Table
        formData={updatedArr ? updatedArr : initialSet()}
        setFormData={setFormData}
        setUpdatedArr={setUpdatedArr}
        formReducer={formReducer}
      />
    </div>
  );
};

export default FormContainer;
