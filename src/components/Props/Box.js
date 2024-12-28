import React from 'react'
import { Container } from 'react-bootstrap'

export default function Box(props) {
  const{who, age} = props;
  return (
    <div>
      <Container>
        <h3>Hello, {who}! {age && `Age:${age}`} </h3>
        <div style={{background: props.colorBox, width: 200, height: 200}}></div>
      </Container>
    </div>
  )
}
