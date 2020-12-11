import DaresPage from './pages/DaresPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateDarePage from './pages/CreateDarePage';
import HighscorePage from './pages/HighscorePage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import DareCardDetails from './components/DareCardDetails';
import DareCardUpload from './components/DareCardUpload';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/HomePage" exact component={HomePage} />
          <Route path="/DaresPage" exact component={DaresPage} />
          <Route path="/DaresPage/:id" exact component={DareCardDetails} />
          <Route
            path="/DaresPage/DareCardUpload/:id"
            exact
            component={DareCardUpload}
          />
          <Route path="/CreateDarePage" exact component={CreateDarePage} />
          <Route path="/HighscorePage" exact component={HighscorePage} />
          <Route path="/ProfilePage" exact component={ProfilePage} />
        </Switch>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
