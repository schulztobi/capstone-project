import { Link } from 'react-router-dom';
import logInUser from '../services/loginUser';
import { loadToken } from '../services/tokenStorage';

export default function MainPage() {
  // function verifyUser(){
  //     loadToken()

  //     const { isToken, set}

  //     isToken? : login/register seite
  //     yes => token valid ? : login/register seite
  //     yes => homepage
  // }

  return (
    <>
      <h1>I dare you</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </>
  );
}
