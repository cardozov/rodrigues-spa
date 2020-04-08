import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Calendar from './Components/Calendar/Calendar'
import NotFound from './Components/404/404'

const App = () => (
  <main>
    <div>
      <Link to="/">Home </Link>
      <Link to="/calendar">Agenda </Link>
      <Link to="/list">Listagem </Link>
    </div>

    <Switch>
      <Route path="/" component={Calendar} exact/>
      <Route path="/calendar" component={Calendar} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default App
