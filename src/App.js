import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DaresPage from './pages/DaresPage';
import CreateDarePage from './pages/CreateDareSteps/CreateDarePage';
import ProfilePage from './pages/ProfilePage';
import DareCardDetails from './components/DareCardDetails';
import DareCardUpload from './components/DareCardUpload';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WhomIDaredCardDetails from './components/WhomIDaredCardDetails';
import WhomIDaredCardDownload from './components/WhomIDaredCardDownload';
import './typo.css';
import './App.css';
import WelcomeStepsPage from './pages/WelcomeSteps/WelcomeStepsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={WelcomeStepsPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/DaresPage" exact component={DaresPage} />
        <Route path="/DaresPage/:id" exact component={DareCardDetails} />
        <Route path="/DareDetailsPage" exact component={DareCardDetails} />
        <Route path="/WhomIDared/:id" exact component={WhomIDaredCardDetails} />
        <Route
          path="/WhomIDared/Download/:id"
          exact
          component={WhomIDaredCardDownload}
        />
        <Route
          path="/DaresPage/DareCardUpload/:id"
          exact
          component={DareCardUpload}
        />
        <Route path="/CreateDarePage" exact component={CreateDarePage} />
        <Route path="/ProfilePage" exact component={ProfilePage} />
        <Route path="/WelcomePage" exact component={WelcomeStepsPage} />
      </Switch>
    </Router>
  );
}

export default App;
