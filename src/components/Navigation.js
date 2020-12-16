import styled from 'styled-components/macro';
import { Link, withRouter } from 'react-router-dom';
import {
  FaRegListAlt,
  FaListAlt,
  FaPlusSquare,
  FaRegPlusSquare,
  FaUser,
  FaRegUser,
} from 'react-icons/fa';

const Navigation = (props) => {
  console.log('props', props);
  return (
    <NavBar>
      <NavLinks>
        <Link to="/DaresPage">
          <li>
            {props.location.pathname === '/DaresPage' ? (
              <FaListAlt size="2em" color="var(--fifth)" />
            ) : (
              <FaRegListAlt size="2em" color="var(--fifth)" />
            )}
          </li>
        </Link>
        <Link to="/CreateDarePage">
          <li>
            {props.location.pathname === '/CreateDarePage' ? (
              <FaPlusSquare size="2em" color="var(--fifth)" />
            ) : (
              <FaRegPlusSquare size="2em" color="var(--fifth)" />
            )}
          </li>
        </Link>
        <Link to="/ProfilePage">
          <li>
            {props.location.pathname === '/ProfilePage' ? (
              <FaUser size="2em" color="var(--fifth)" />
            ) : (
              <FaRegUser size="2em" color="var(--fifth)" />
            )}
          </li>
        </Link>
      </NavLinks>
    </NavBar>
  );
};

export default withRouter(Navigation);

const NavBar = styled.nav`
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
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
  }
  a {
    text-decoration: none;
  }
`;
