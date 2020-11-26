import DaresPage from './pages/DaresPage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateDarePage from './pages/CreateDarePage';
import HighscorePage from './pages/HighscorePage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/DaresPage" component={DaresPage} />
      <Route path="/CreateDarePage" component={CreateDarePage}/>
      <Route path="/HighscorePage" component={HighscorePage}/>
      <Route path="/ProfilePage" component={ProfilePage}/>
      </Switch>
      <Navigation/>
    </div>
    </Router>
  );
}

export default App;
