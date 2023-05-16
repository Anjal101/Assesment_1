import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <AppBar color=''>
        <Toolbar>
            <Typography variant='h4'>Blog Dashboard</Typography>
            <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}> </Typography>
            <Button><Link to={'/'} style={{color:"blue"}}>Add</Link></Button>
            <Button><Link to={'/a'} style={{color:"blue"}}>Home</Link></Button>
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar