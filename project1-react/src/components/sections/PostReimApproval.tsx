import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const PostReimApproval: React.FC<unknown> = (props) => {

  const [reimID, setReimID] = useState<string>();
  const [approve, setApprove] = useState<string>();
  const [reason, setReason] = useState<string>();
  const [finalAmount, setFinalAmount] = useState<string>();

  const handleReimID = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("the value is: ", e.target.value);
    setReimID(e.target.value);
  };
  const handleApprove = (e: ChangeEvent<HTMLInputElement>) => {
    setApprove(e.target.value);
  };
  const handleReason = (e: ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };
  const handleFinalAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setFinalAmount(e.target.value);
  };

  const handlePostApproval = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.patch('employee/super/postreim', {reimID, approve, reason, finalAmount});
    console.log("the db response is: ", response);
  }

  return (
    <>
    <div className="container">
        <h3>Final Approval</h3>
        <form onSubmit={ handlePostApproval }>
          <div className="form-group">
            <label>Reimbursement ID:</label>
            <input className="form-control" onChange={handleReimID}/>
            <label>Approve</label>
            <input type="radio" onChange={handleApprove} value="approved"/>
            <label>Deny</label>
            <input type="radio" onChange={handleApprove} value="rejected"/>
            <label>Reason:</label>
            <input className="form-control" onChange={handleReason}/>
            <label>Final amount:</label>
            <input className="form-control" onChange={handleFinalAmount}/>
            <input type="submit" className="btn btn-primary col-sm-2" value="Submit"/>
          </div>
      </form>
    </div>
    </>
  );
};

export default PostReimApproval;
