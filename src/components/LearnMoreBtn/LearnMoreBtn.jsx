import React from 'react'
import { Button } from '@mui/material'

const LearnMoreBtn = ({ handleOpen,}) => {
  return (
    <>      
        <Button  onClick={handleOpen}>Learn More</Button>
    </>
  )
}

export default LearnMoreBtn