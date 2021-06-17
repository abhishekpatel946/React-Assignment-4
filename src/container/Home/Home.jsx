import React, { useState } from 'react';
import { getFromLocalStorage, setIntoLocalStorage } from '../utils/dataService';
import { AddUserForm, EditUserForm } from '../forms';
import { UserTable } from '../tables';

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
  const [users, setUsers] = useState(getFromLocalStorage);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setIntoLocalStorage(user);
    document.getElementById('addUserFormId').reset();
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
    setIntoLocalStorage(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setIntoLocalStorage(
      users.map((user) => (user.id === id ? updatedUser : user))
    );
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
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                genderOptions={genderOptions}
                educationOption={educationOption}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm
                addUser={addUser}
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
            users={!users ? [] : users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
