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
  padding: 0 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 0;
  align-items: center;
  background: transparent;
  backdrop-filter: blur(4px);
  color: #fff;
  overflow: hidden;
  position: sticky;
  bottom: 0;
  border: 1px solid #fff;
  border-radius: 6px;
  height: 50px;
  width: 100%;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  li {
    color: var(--silver-main);
    margin: 5px;
  }
  a {
    text-decoration: none;
  }
`;
