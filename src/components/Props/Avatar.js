import React from 'react'
import { Container } from 'react-bootstrap'
import img1 from '../image/img1.png'

export default function Avatar(props) {
    const{name, gender, image} = props
  return (
    <div>
        <Container>
            <h2>Hello, {gender?"Mr":"Ms"} {name}</h2>
            <img src={img1} alt='img' width={150} height={150}/>
        </Container>
    </div>
  )
}
