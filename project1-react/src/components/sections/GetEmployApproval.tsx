import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetEmployApproval: React.FC<unknown> = (props) => {

  const [empApproval, setEmpApproval] = useState({res:[]});

  function writeEmpApproval() {
    const listItems = (<ul> { JSON.stringify(empApproval.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('empApproval'));
  }

  const handleGetEmpApproval = async () => {
    const response = await reimClient.get('employee/reim/approval');
    setEmpApproval({res:response.data.res});
    console.log("the db response is: ", response.data);
    console.log('writing,', empApproval)
    writeEmpApproval();
  }

  return (
    <>
    <div className="container">
        <h3>Approvals to Changes</h3>
        <button onClick={ handleGetEmpApproval } className="btn btn-primary col-sm-2">Fetch My Approvals</button>
    </div>
    <pre id='empApproval'>
    </pre>
    </>
  );
};

export default GetEmployApproval;
