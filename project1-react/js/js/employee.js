/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
const data1 = sessionStorage.getItem('user');
const currentUser1 = JSON.parse(data1);

async function getPreApproval() {
  const response = await fetch('http://localhost:3000/employee/reim/json', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const obj = await response.json();
  document.getElementById('preApprovals').innerHTML += JSON.stringify(obj.res, 2, '\n');
}

async function getReimGraded() {
  const response = await fetch('http://localhost:3000/employee/benco/reim/graded', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const obj = await response.json();
  document.getElementById('reimGraded').innerHTML += JSON.stringify(obj.res, 2, '\n');
}

async function getReimEmployApproval() {
  const response = await fetch('http://localhost:3000/employee/reim/approval', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const obj = await response.json();
  document.getElementById('empApproval').innerHTML += JSON.stringify(obj.res, 2, '\n');
}

async function updateEmpApproval() {
  const reimID = document.getElementById('reimID3');
  const approve = document.getElementById('empApprove');
  const response = await fetch('http://localhost:3000/employee/', {
    body: JSON.stringify({
      reimID: reimID.value,
      approve: approve.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });
  alert(response.toString());
  window.location.href = 'http://localhost:3000/employee';
}

async function postGrade() {
  const reimID = document.getElementById('reimID5');
  const grade = document.getElementById('grade');
  const response = await fetch('http://localhost:3000/employee/grade', {
    body: JSON.stringify({
      reimID: reimID.value,
      grade: grade.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });
  alert(response.toString());
  window.location.href = 'http://localhost:3000/employee/grade';
}

async function preReim() {
  const reimID = document.getElementById('reimID');
  const approve = document.getElementById('approveOrNot');
  const reason = document.getElementById('reason');
  const response = await fetch('http://localhost:3000/employee/prereim/', {
    body: JSON.stringify({
      reimID: reimID.value,
      approve: approve.value,
      reason: reason.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });
  alert(response.toString());
  window.location.href = 'http://localhost:3000/employee';
}

async function postReim() {
  const reimID = document.getElementById('reimID1');
  const approve = document.getElementById('postApprove');
  const reason = document.getElementById('reason1');
  const amount = document.getElementById('finalAmount');
  const response = await fetch('http://localhost:3000/employee/postreim/', {
    body: JSON.stringify({
      reimID: reimID.value,
      approve: approve.value,
      reason: reason.value,
      finalAmount: amount.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });
  alert(response.toString());
  window.location.href = 'http://localhost:3000/employee';
}

async function gredeCheckBenco() {
  const reimID = document.getElementById('reimID2');
  const approve = document.getElementById('gradeCheck');
  const response = await fetch('http://localhost:3000/employee/benco/reim/graded', {
    body: JSON.stringify({
      id: reimID.value,
      approve: approve.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });
  alert(response.toString());
  window.location.href = 'http://localhost:3000/employee';
}
