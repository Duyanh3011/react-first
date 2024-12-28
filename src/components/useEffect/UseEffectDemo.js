import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';

export default function useEffectDemo() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const handleIncreaseA = () => {
        setCountA(countA+1);
    }
    const handleIncreaseB = () => {
        setCountA(countB+1);
    }
    useEffect(()=>{
        console.log("Khong cos dependency trong A")
    }, [])
  return (
    <div>
      <Container>
        <h1>COunter A {countA}</h1>
        <h1>COunter B {countB}</h1>

        <Button variant='primary' onClick={handleIncreaseA}>Increase Counter A</Button>
        <Button variant='primary' onClick={handleIncreaseB}>Increase Counter B</Button>
      </Container>
    </div>
  )
}
