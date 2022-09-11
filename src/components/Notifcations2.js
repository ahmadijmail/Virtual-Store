import React from 'react'
import {Alert} from '@mui/material'
const Notifcations2 = ({type,message}) => {
  return (
    <div>
       <Alert severity={type}>{message}</Alert>
    </div>
  )
}

export default Notifcations2