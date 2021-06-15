import React from 'react';
import { remove } from '../Utils/Data_Service';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import './table-style.scss';

const Table = (props) => {
  // destructring props
  const { formData, setFormData } = props;

  // delete item
  const deleteItem = (itemId) => {
    formData.map((item) => {
      if (item.id !== itemId) {
        const remainArr = [item];
        remove('userData', remainArr);
      }
      console.log('Item removed..!');
    });
  };

  // update item
  const updateItem = (itemId) => {
    let newEditItem = formData.find((item) => {
      return item.id === itemId;
    });
    // 1. data sent back to the form
    // 2. update affect only one who match the id
    // 3. store the updated item
    console.log(newEditItem);
    setFormData(newEditItem);
  };

  // check the data
  formData.map((user) => {
    console.log(user.Name);
    console.log(user.Email);
    console.log(user.Date);
    console.log(user.Gender);
    console.log(user.Education);
    console.log(user.Password);
    console.log(user.RePassword);
  });
  // formData.forEach((element) => {
  //   Object.entries(element).map(([key, value]) => {
  //     console.log(key);
  //     console.log(value);
  //   });
  // });

  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Name</th>
            <th style={{ width: '15%' }}>Email</th>
            <th style={{ width: '15%' }}>Date Of Birth</th>
            <th style={{ width: '15%' }}>Gender</th>
            <th style={{ width: '15%' }}>Education</th>
            <th style={{ width: '15%' }}>Password</th>
            <th style={{ width: '15%' }}>Confirm Password</th>
            <th style={{ width: '15%' }}>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {formData &&
            formData.map((user) => {
              <tr key={user.id}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Date}</td>
                <td>{user.Gender}</td>
                <td>{user.Education}</td>
                <td>{user.Password}</td>
                <td>{user.RePassword}</td>
                <EditIcon
                  onClick={() => {
                    updateItem(user.id);
                  }}
                />
                <DeleteIcon
                  onClick={() => {
                    deleteItem(user.id);
                  }}
                />
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
};

// typechecking with propTypes
Table.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};

export default Table;
