import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export default function Navigation () {
    return (
    <NavBar>
        <NavLinks>
            <Link to='/'>
             <NavLink>Home</NavLink>
            </Link>
            <Link to='/DaresPage'>
            <NavLink>Dares</NavLink>
            </Link>
            <Link to='/CreateDarePage'>
            <NavLink>CreateADare</NavLink>
            </Link>
            <Link to='/HighscorePage'>
            <NavLink>HighScore</NavLink>
            </Link>
            <Link to='/ProfilePage'>
            <NavLink>Profile</NavLink>
            </Link>
        </NavLinks>
    </NavBar>
    )
}

const NavBar = styled.nav`
display: flex;
justify-content:space-around;
align-items:center;
min-height: 10vh;
background-color: var(--red-main);
color: var(--silbver-main);
margin:0;
width:100%;
position:fixed;
bottom:0;
overflow:hidden;
`

const NavLinks = styled.ul`
display:flex;
justify-content:space-around;
align-items: center;
list-style: none;
margin: 0;
padding:0;
`

const NavLink = styled.li`
color: var(--silver-main);
margin: 5px;
`