import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const UserTable = (props) => {
  const users = useSelector((state) => state.userReducers.users);

  return (
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
        {users && users.length > 0 ? (
          users.map((user) => (
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
                  onClick={() => props.deleteOldUser(user.id)}
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
};
// typechecking with propTypes
UserTable.propTypes = {
  thead: PropTypes.array,
  editRow: PropTypes.func,
  deleteOldUser: PropTypes.func,
};

export default UserTable;
