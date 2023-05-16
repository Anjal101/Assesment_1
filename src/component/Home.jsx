import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>
        <br/><br/><br/><br/>
        <Typography variant='h3' style={{color:"blue"}}>Axios View</Typography>
        <br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITTLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.title}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>  
        
       
    
   
     
                    
                    
    
    </div>
  )
}

export default Home