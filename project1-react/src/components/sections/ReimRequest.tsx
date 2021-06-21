import React, { ChangeEvent, FormEvent, useState } from 'react';
import reimClient from '../../remote/reim.client';

const ReimRequest: React.FC<unknown> = (props) => {

  const [eventType, setEventType] = useState<string>();
  const [rawCost, setRawCost] = useState<string>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [gradingFormat, setGradingFormat] = useState<string>();
  const [justification, setJustification] = useState<string>();
  const [approverEmail, setApproverEmail] = useState<string>();

  const handleEventType = (e: ChangeEvent<HTMLInputElement>) => {
    setEventType(e.target.value);
  };
  const handleRawCost = (e: ChangeEvent<HTMLInputElement>) => {
    setRawCost(e.target.value);
  };
  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };
  const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleGradingFormat = (e: ChangeEvent<HTMLInputElement>) => {
    setGradingFormat(e.target.value);
  };
  const handleJustification = (e: ChangeEvent<HTMLInputElement>) => {
    setJustification(e.target.value);
  };
  const handleApproverEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setApproverEmail(e.target.value);
  };
    
  const handleReimSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.put('employee/reim', {eventType, rawCost, startDate, endDate, location, description, gradingFormat, justification, approverEmail});
    console.log(response);
  }

  return (
    <>
    <div className="myForms">
        <h3>Reimbursement Request</h3>
        <br/>
        <form onSubmit={ handleReimSubmit }>
          <div className="form-group">
            <div className="row">
              <div className="col-md">
                <label>Event Type:</label>
                <input className="form-control" onChange={handleEventType}/>
              </div>
              <div className="col-md">
                <label> Raw Cost:</label>
                <input className="form-control" onChange={handleRawCost}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <label>Start Date:</label>
                <input className="form-control" onChange={handleStartDate}/>
              </div>
              <div className="col-md">
                <label>End Date:</label>
                <input className="form-control" onChange={handleEndDate}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <label>Location:</label>
                <input className="form-control" onChange={handleLocation}/>
              </div>
              <div className="col-md">
                <label>Grading Format:</label>
                <input className="form-control" onChange={handleGradingFormat}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <label>Approver Email (optional):</label>
                <input className="form-control" onChange={handleApproverEmail}/>
              </div>
              <div className="col-md">
                <label>Interested Parties:</label>
                <input className="form-control"/>
              </div>
            </div>
            <label>Description:</label>
            <input className="form-control" onChange={handleDescription}/>
            <label>Justification:</label>
            <input className="form-control" onChange={handleJustification}/>
            <br/>
            <input type="submit" className="btn btn-primary" value="Submit"/>
          </div>
      </form>
    </div>
    </>
  );
};

export default ReimRequest;
