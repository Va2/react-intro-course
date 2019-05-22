import React from 'react';

function handleClick() {
    console.log("I was clicked...");
}

function ImageCard() {
    return (
       <div className="card">
            <img onMouseOver={() => console.log("Hovered")
            } src="http://lorempixel.com/250/125/sports" alt="Sport"></img>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
       </div>
    )
}

export default ImageCard;