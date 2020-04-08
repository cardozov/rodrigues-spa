import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import HideOnScroll from './HideonScroll'
import './Menu.scss'

const Fixed = props => {

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton onClick={props.toggle} edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h5">
            <span className="menu-application-name">Rodrigues</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Fixed