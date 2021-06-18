import React, { useState } from 'react';
import { AddUserForm, EditUserForm } from '../forms';
import { UserTable } from '../tables';
import { addUser, deleteUser, updateUser } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  // initial Form State Data
  const initialFormState = {
    id: null,
    name: '',
    email: '',
    dob: '',
    gender: '',
    education: '',
    password: '',
    cpassword: '',
  };

  // Setting state
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.userReducers.users);

  // CRUD operations
  const addNewUser = (user) => {
    dispatch(addUser(user));
    document.getElementById('addUserFormId').reset();
  };

  const deleteOldUser = (id) => {
    dispatch(deleteUser(id));
  };

  const updateOldUser = (id, updatedUser) => {
    dispatch(updateUser(id, updateUser));
    document.getElementById('editUserFormId').reset();
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      gender: user.gender,
      education: user.education,
      password: user.password,
      cpassword: user.cpassword,
    });
  };

  // Constant table heading
  const thead = [
    'Name',
    'Email',
    'DoB',
    'Gender',
    'Education',
    'Password',
    'CPassword',
  ];
  // Constant Options
  const genderOptions = [
    { id: 'gender', title: 'Male' },
    { id: 'gender', title: 'Female' },
    { id: 'gender', title: 'Other' },
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
    <div className='container'>
      <h1>CRUD App with Form & localStorage</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                currentUser={currentUser}
                updateOldUser={updateOldUser}
                genderOptions={genderOptions}
                educationOption={educationOption}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm
                addNewUser={addNewUser}
                genderOptions={genderOptions}
                educationOption={educationOption}
              />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable
            thead={thead}
            users={!usersList ? [] : usersList}
            editRow={editRow}
            deleteOldUser={deleteOldUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
