import React from 'react';
import PropTypes from 'prop-types';

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>DoB</th>
        <th>Gender</th>
        <th>Education</th>
        <th>Password</th>
        <th>CPassword</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users && props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
            <td>{user.gender}</td>
            <td>{user.education}</td>
            <td>{user.password}</td>
            <td>{user.cpassword}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className='button muted-button'>
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className='button muted-button'>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

// typechecking with propTypes
UserTable.propTypes = {
  thead: PropTypes.array,
  users: PropTypes.array,
  editRow: PropTypes.func,
  deleteUser: PropTypes.func,
};

export default UserTable;
