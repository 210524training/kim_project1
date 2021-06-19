import React from 'react';
import ReimRequest from '../sections/ReimRequest';
import ChangeApproval from '../sections/ChangeApproval';
import GradeSubmission from '../sections/GradeSubmission';
import PreReimApproval from '../sections/PreReimApproval';
import PostReimApproval from '../sections/PostReimApproval';
import GradeApproval from '../sections/GradeApproval';
import GetPreReims from '../sections/GetPreReims';
import GetGradedReim from '../sections/GetGradedReim';

const EmployPage: React.FC<unknown> = (props) => {

  return (
    <>
        <ReimRequest/>
        <ChangeApproval/>
        <GradeSubmission/>
        <hr/>
        <PreReimApproval/>
        <GetPreReims/>
        <hr/>
        <PostReimApproval/>
        <hr/>
        <GetGradedReim/>
        <GradeApproval/>
    </>
  );
};

export default EmployPage;