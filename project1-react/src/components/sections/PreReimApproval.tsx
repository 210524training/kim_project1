import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const PreReimApproval: React.FC<unknown> = (props) => {

  const [reimID, setReimID] = useState<string>();
  const [approve, setApprove] = useState<string>();
  const [reason, setReason] = useState<string>();

  const handleReimID = (e: ChangeEvent<HTMLInputElement>) => {
    setReimID(e.target.value);
  };
  const handleApprove = (e: ChangeEvent<HTMLInputElement>) => {
    setApprove(e.target.value);
  };
  const handleReason = (e: ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const handlePreApproval = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.patch('employee/super/prereim', {reimID, approve, reason});
    console.log("the db response is: ", response);
  }

  return (
    <>
    <div className="container">
        <h3>Employee Cancel or approve different amount</h3>
        <form onSubmit={ handlePreApproval }>
          <div className="form-group">
            <label>Reimbursement ID:</label>
            <input className="form-control" onChange={handleReimID}/>
            <label>Approve</label>
            <input type="radio" onChange={handleApprove} value="approved"/>
            <label>Deny</label>
            <input type="radio" onChange={handleApprove} value="rejected"/>
            <label>Reason:</label>
            <input className="form-control" onChange={handleReason}/>
            <input type="submit" className="btn btn-primary col-sm-2" value="Submit"/>
          </div>
      </form>
    </div>
    </>
  );
};

export default PreReimApproval;
