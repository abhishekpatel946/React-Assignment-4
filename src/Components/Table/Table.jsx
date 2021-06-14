import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import './table-style.scss';

const Table = (props) => {
  // destructring props
  const { formData } = props;

  // check the data
  // formData.forEach((element) => {
  //   Object.entries(element).map(([name, value]) => console.log(name, value));
  // });

  return (
    <div className='table-container'>
      <table className='table'>
        {formData.forEach((element) => {
          Object.entries(element).map(([name, value]) => (
            <tr>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ));
        })}
        <EditIcon />
        <DeleteIcon />
      </table>
    </div>
  );
};

// typechecking with propTypes
Table.propTypes = {
  formData: PropTypes.object,
};

export default Table;
