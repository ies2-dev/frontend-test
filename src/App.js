import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FilmList from './screens/filmsList/FilmListContainer'
import FilmDetails from './screens/filmDetails/FilmDetailsContainer'


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/details/:id">
            <FilmDetails />
          </Route>
          <Route path="/">
            <FilmList />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
