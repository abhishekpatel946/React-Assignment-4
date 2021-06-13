import React from 'react';
import PropTypes from 'prop-types';
import './table-style.scss';

const Table = (props) => {
  // destructring props
  const { formData, resultData } = props;

  console.log(`formData => `, formData);
  console.log(`resultData => `, resultData);

  return (
    <div className='table-container'>
      <table className='table'>
        {Object.entries(formData).map(([name, value]) => (
          <div>
            <tr>
              <th>{name}</th>
            </tr>
            <tr>
              <td>{value.toString()}</td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  );
};

// typechecking with propTypes
Table.propTypes = {
  formData: PropTypes.object,
  resultData: PropTypes.object,
};

export default Table;
