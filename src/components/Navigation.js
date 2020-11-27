import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <NavLinks>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/DaresPage">
          <li>Dares</li>
        </Link>
        <Link to="/CreateDarePage">
          <li>CreateADare</li>
        </Link>
        <Link to="/HighscorePage">
          <li>HighScore</li>
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
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: var(--red-main);
  color: var(--silbver-main);
  margin: 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
