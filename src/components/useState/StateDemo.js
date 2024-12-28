import React, { useState } from 'react' //rfc
import { Alert, Container, Button } from 'react-bootstrap'

export default function StateDemo() {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () =>{
        setCounter(counter+1);
    }
    const handleDecrease = () =>{
        setCounter(counter-1);
    }
    return (
        <div>
            <Container>
                <Alert variant='primary'>
                    <h2>Counter: {counter}</h2>
                    <Button style={{marginRight: 100}} onClick={handleIncrease} variant='success'>Increase</Button>
                    <Button onClick={handleDecrease} variant='danger'>Decrease</Button>
                </Alert>
            </Container>
        </div>
    )
}
