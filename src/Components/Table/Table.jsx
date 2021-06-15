import React from 'react';
import { setter, remove } from '../Utils/Data_Service';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import './table-style.scss';

const Table = (props) => {
  // destructring props
  const { formData, setFormData, setUpdateArr, formReducer } = props;

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
    // 1. update affect only one who match the id
    let newEditItem = formData.find((item) => {
      return item.id === itemId;
    });

    // 2. data sent back to the form
    for (const key in newEditItem) {
      formReducer({
        ...newEditItem,
        [key]: newEditItem[key],
      });
    }

    // 3. store the updated item
    setFormData(newEditItem);
  };

  // check the data
  // formData &&
  //   formData.map((user) => {
  //     console.log(user.Name);
  //     console.log(user.Email);
  //     console.log(user.Date);
  //     console.log(user.Gender);
  //     console.log(user.Education);
  //     console.log(user.Password);
  //     console.log(user.RePassword);
  //   });
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
                <td style={{ width: '13%' }}>{user.Name}</td>
                <td style={{ width: '13%' }}>{user.Email}</td>
                <td style={{ width: '13%' }}>{user.Date}</td>
                <td style={{ width: '13%' }}>{user.Gender}</td>
                <td style={{ width: '13%' }}>{user.Education}</td>
                <td style={{ width: '13%' }}>{user.Password}</td>
                <td style={{ width: '13%' }}>{user.RePassword}</td>
                <td style={{ width: '13%' }}>
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
                </td>
              </tr>;
            })}
          <tr key={1}>
            <td style={{ width: '13%' }}>Abhishek Patel</td>
            <td style={{ width: '13%' }}>abhishekpatel@gmail.com</td>
            <td style={{ width: '13%' }}>2021-06-15</td>
            <td style={{ width: '13%' }}>Female</td>
            <td style={{ width: '13%' }}>Bachelor's Degree</td>
            <td style={{ width: '13%' }}>Abc@123</td>
            <td style={{ width: '13%' }}>Abc@123</td>
            <td style={{ width: '13%' }}>
              <EditIcon
                className='icons'
                onClick={() => {
                  updateItem(1623736107869);
                }}
              />
              <DeleteIcon
                className='icons'
                onClick={() => {
                  deleteItem(1623736107869);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// typechecking with propTypes
Table.propTypes = {
  formData: PropTypes.array.isRequired,
  setFormData: PropTypes.func,
  setUpdateArr: PropTypes.func,
  formReducer: PropTypes.func,
};

export default Table;
