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
              <td>{user.data.name}</td>
              <td>{user.data.email}</td>
              <td>{user.data.dob}</td>
              <td>{user.data.gender}</td>
              <td>{user.data.education}</td>
              <td>{user.data.password}</td>
              <td>{user.data.cpassword}</td>
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
