import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import './table-style.scss';
import resultData from '../Utils/DataService';

const Table = (props) => {
  // destructring props
  const { resultData } = props;

  // delete the item from localStorage
  const deleteClick = (e) => {
    console.log('deleting...', e);
  };

  // update the item from localStorage
  const updateClick = (e) => {
    console.log('updating...', e);
  };

  return (
    <div className='table-container'>
      <table className='table'>
        {Object.entries(resultData).map(([name, value]) => (
          <div>
            <tr>
              <th>{name}</th>
            </tr>
            <tr>
              <td>{value.toString()}</td>
            </tr>
            <EditIcon onClick={(e) => updateClick(e)} />
            <DeleteIcon onClick={(e) => deleteClick(e)} />
          </div>
        ))}
      </table>
    </div>
  );
};

// typechecking with propTypes
Table.propTypes = {
  resultData: PropTypes.object,
};

export default Table;

// userData

// {"Name":"Abhishek Patel","Email":"abhishekpatel946@gmail.com","Date":"2021-06-15","Gender":"Male","Education":"10th Grade","Password":"#Apatel@123","RePassword":"#Apatel@123"}
