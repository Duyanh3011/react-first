import React from "react";
import i1 from './image/img1.png';
import i2 from './image/img2.png';

export function Profile() {
    return(
        <>
        <img src={i1} width={100} height={100}/>
        </>
    )
}
export function Profile1() {
    return(
        <>
        <img src={i2} width={100} height={100}/>
        </>
    )
}

const Gallery = ()=>{
    return (
        <>
        <h3> Example</h3>
        <Profile/>
        <Profile1/>
        </>
    );
}

export default Gallery