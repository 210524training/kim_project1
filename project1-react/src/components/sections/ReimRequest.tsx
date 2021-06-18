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
    <div className="container">
        <h3>Reimbursement Request</h3>
        <form onSubmit={ handleReimSubmit }>
        <div className="form-group">
          <label>Event Type:</label>
          <input className="form-control" id="eventType" name='eventType' onChange={handleEventType}/>
          <label> Raw Cost:</label>
          <input className="form-control" id="rawCost" name='rawCost' onChange={handleRawCost}/>
          <label>Start Date:</label>
          <input className="form-control" id="startDate" name='startDate' onChange={handleStartDate}/>
          <label>End Date:</label>
          <input className="form-control" id="endDate" name='endDate' onChange={handleEndDate}/>
          <label>Location:</label>
          <input className="form-control" id="location" name='location' onChange={handleLocation}/>
          <label>Description:</label>
          <input className="form-control" id="description" name='description' onChange={handleDescription}/>
          <label>Grading Format:</label>
          <input className="form-control" id="gradingFormat" name='gradingFormat' onChange={handleGradingFormat}/>
          <label>Justification:</label>
          <input className="form-control" id="justification" name='justification' onChange={handleJustification}/>
          <label>Approver Email (optional):</label>
          <input className="form-control" id="approverEmail" name='approverEmail' onChange={handleApproverEmail}/>
          <label>Interested Parties:</label>
          <input className="form-control" id="interestedParties" name='interestedParties'/>
          <input type="submit" className="btn btn-primary col-sm-2" value="Submit"/>
        </div>
      </form>
    </div>
    </>
  );
};

export default ReimRequest;
