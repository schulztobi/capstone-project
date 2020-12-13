import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <NavLinks>
        <Link to="/DaresPage">
          <li>Dares</li>
        </Link>
        <Link to="/CreateDarePage">
          <li>CreateADare</li>
        </Link>
        <Link to="/ProfilePage">
          <li>Profile</li>
        </Link>
      </NavLinks>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  color: #fff;
  margin-right: 500px;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 0;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    color: var(--silver-main);
    margin: 5px;
  }
  a {
    text-decoration: none;
  }
`;
