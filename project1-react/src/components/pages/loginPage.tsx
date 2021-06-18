import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import reimClient from '../../remote/reim.client';
import UserContext from '../../context/UserContext';

const LoginPage: React.FC<unknown> = (props) => {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { setAuthenticated, setRole, setUser } = useContext(UserContext);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.post('/login', {id, password});
    sessionStorage.setItem('user', JSON.stringify(response));
    if (response !== undefined) {
      console.log(response.data);
      setAuthenticated(true);
      setRole(response.data.Role); 
      if(id !== undefined) {
        setUser(id);
      }
    }
  }

  return (
    <>
    <h1>Login Page!</h1>
    <div className="container">
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="usernameInput" className="form-label col-sm-2">Username</label>
        <input name="id" type="text" className="form-control col-sm-2" id="usernameInput" onChange={handleUsernameChange}/>
        <label htmlFor="passwordInput" className="form-label col-sm-2">Password</label>
        <input name="password" type="password" className="form-control col-sm-2" id="passwordInput" onChange={handlePasswordChange}/>
        <input type="submit" className="btn btn-primary col-sm-2" value="Submit"/>
    </form>
    </div>
    </>
  );
};

export default LoginPage;