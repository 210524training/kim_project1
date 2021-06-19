import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetPreReims: React.FC<unknown> = (props) => {

  const [preReim, setPreReim] = useState({res:[]});

  function writePreReims() {
    const listItems = (<ul> { JSON.stringify(preReim.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('preReims'));
  }

  const handleGetPreReim = async () => {
    const response = await reimClient.get('employee/super/prereim');
    console.log("the db response is: ", response.data);
    setPreReim({res:response.data.res});
    console.log('writing,', preReim)
    writePreReims();
  }

  return (
    <>
    <div className="container">
        <h3>Pre Approvals</h3>
        <button onClick={ handleGetPreReim } className="btn btn-primary col-sm-2">Fetch Pre Reims</button>
    </div>
    <pre id='preReims'>
    </pre>
    </>
  );
};

export default GetPreReims;
