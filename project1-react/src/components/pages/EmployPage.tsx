import React, { useContext } from 'react';
import ReimRequest from '../sections/ReimRequest';
import ChangeApproval from '../sections/ChangeApproval';
import GradeSubmission from '../sections/GradeSubmission';
import PreReimApproval from '../sections/PreReimApproval';
import PostReimApproval from '../sections/PostReimApproval';
import GradeApproval from '../sections/GradeApproval';
import GetPreReims from '../sections/GetPreReims';
import GetGradedReim from '../sections/GetGradedReim';
import GetEmployApproval from '../sections/GetEmployApproval';
import UserContext from '../../context/UserContext';

const EmployPage: React.FC<unknown> = (props) => {
  const { role } = useContext(UserContext);
  return (
    <>
      <hr/>
      <div className="row">
        <div className="col-md">
          <ReimRequest/>
        </div>
        <div className="col-md">
          <GradeSubmission/>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-sm">
          <ChangeApproval/>
        </div>
        <div className="col-sm">
          <GetEmployApproval/>
        </div>
      </div>            
        { role !== 'employee' &&
          <>
            <hr/>
            <div className="row">
              <div className="col-sm">
                <PreReimApproval/>
              </div>
              <div className="col-sm">
                <GetPreReims/>
              </div>
            </div>   
            { role === 'benco' &&
              <>
                <hr/>          
                <div className="row">
                  <div className="col-sm">
                    <PostReimApproval/>
                  </div>
                  <div className="col-sm">
                    <GetGradedReim/>
                  </div>
                  <div className="col-sm">
                    <GradeApproval/>
                  </div>
                 </div>   
              </>
            }
          </>
        }
    </>
  );
};

export default EmployPage;