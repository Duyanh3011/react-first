import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Box from './Box';

export default function PropsDemo() {
    const [colorBox, setColorBox] = useState('blue');
    const handleChangeRed=()=>{
        setColorBox('red')
    }
    const handleChangeYellow=()=>{
        setColorBox('yellow')
    }
  return (
    <div>
      <Container>
        <Box colorBox ={colorBox} who={"a"} age={"10"}/>
        <Button variant='danger' onClick={handleChangeRed}>Change to Red</Button>
        <Button variant='warning' onClick={handleChangeYellow}>Change to Yellow</Button>
      </Container>
    </div>
  )
}
