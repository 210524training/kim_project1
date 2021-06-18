import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import reimClient from '../../remote/reim.client';
import UserContext from '../../context/UserContext';

type Props = {
}
const Nav: React.FC<Props> = (props) => {

  const {setAuthenticated, setUser, setRole } = useContext(UserContext);

  const handleLogout = async () => {
      const response = await reimClient.get('/logout');
      sessionStorage.clear();
      setAuthenticated(false);
      setUser('');
      setRole('');
      console.log(response.data);
      }
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div id="nav" className="container-fluid">
        <NavLink className="navbar-brand" to="/">Reimbursement</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee">Work-Page</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
