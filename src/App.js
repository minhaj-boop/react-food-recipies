import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Recepie from './components/Recepie/Recepie';
import Recepies from './components/Recepies/Recepies';

function App() {
  return (
    <div className="">

      <Router>

        <Switch>

          <Route exact path="/">
            <Recepies></Recepies>
          </Route>

          <Route path="/recepies">
            <Recepies></Recepies>
          </Route>

          <Route path="/recepie/:idMeal">
            <Recepie></Recepie>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
