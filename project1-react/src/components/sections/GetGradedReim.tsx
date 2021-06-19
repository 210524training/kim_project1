import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetGradedReims: React.FC<unknown> = (props) => {

  const [gradedReim, setGradedReim] = useState({res:[]});

  function writeGradedReims() {
    const listItems = (<ul> { JSON.stringify(gradedReim.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('gradedReims'));
  }

  const handleGetGradedReim = async () => {
    const response = await reimClient.get('employee/benco/reim/graded');
    console.log("the db response is: ", response.data);
    setGradedReim({res:response.data.res});
    console.log('writing,', gradedReim)
    writeGradedReims();
  }

  return (
    <>
    <div className="myForms">
        <h3>Graded Reimbursements</h3>
        <br/>
        <button onClick={ handleGetGradedReim } className="btn btn-primary">Fetch Graded Reims</button>
        <br/><br/>
        <pre id='gradedReims'>
        </pre>
    </div>

    </>
  );
};

export default GetGradedReims;
