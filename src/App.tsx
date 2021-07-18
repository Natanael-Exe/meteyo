import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Search from './screens/Search';
import Favorites from './screens/Favorites'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Search} exact/>
          <Route path="/favorites" component={Favorites}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
