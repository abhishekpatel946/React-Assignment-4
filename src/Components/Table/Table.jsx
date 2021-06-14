import React from 'react';
import PropTypes from 'prop-types';
import './table-style.scss';

const Table = (props) => {
  // destructring props
  const { formData, resultData, runner } = props;
  console.log(`Table data ==>  ${resultData}`);

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
  runner: PropTypes.bool,
};

export default Table;
