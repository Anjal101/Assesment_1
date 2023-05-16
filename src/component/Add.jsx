import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <Typography variant='h2'>Blog form</Typography>
        <br/>
        <TextField id="outlined-basic" label="Blog Name" variant="outlined" />
        <br/><br/>
        <TextField id="outlined-basic" label="Description" variant="outlined" />
        <br/><br/>
        <TextField id="outlined-basic" label="Author Name" variant="outlined" />
        <br/><br/>
        <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Add