import React from 'react'
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { CalendarToday, ViewList } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const SideNav = ({ isOpenned, setIsOpenned }) => (
  <SwipeableDrawer anchor='right' open={isOpenned} onOpen={() => null} onClose={() => setIsOpenned(false)}>
    <List style={{width: '350px'}}>
      <ListItem button component={Link} to="/calendar" onClick={() => setIsOpenned(false)}>
        <ListItemIcon><CalendarToday /></ListItemIcon>
        <ListItemText primary={'Agenda'} />
      </ListItem>
      <Divider />

      <ListItem button component={Link} to="/list" onClick={() => setIsOpenned(false)}>
        <ListItemIcon><ViewList /></ListItemIcon>
        <ListItemText primary={'Listagem'} />
      </ListItem>
      <Divider />
    </List>
  </SwipeableDrawer>
)

export default SideNav