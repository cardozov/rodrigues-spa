import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Typography, CssBaseline } from '@material-ui/core'

import Calendar from './Components/Calendar/Calendar'
import NotFound from './Components/404/404'
import Menu from './Components/Menu/Menu'

const App = () => (
  <Typography component={'span'} variant={'body2'}>
    <CssBaseline />

    <Menu />

    <Switch>
      <Route path="/" component={Calendar} exact/>
      <Route path="/calendar" component={Calendar} />
      <Route component={NotFound} />
    </Switch>
  </Typography>
)

export default App
