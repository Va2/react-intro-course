import React from 'react';

function Joke(props) {
    return (
       <div>
            <h4 style={{display: props.question ? "block" : "none"}}>Question: {props.question}?</h4>
            <h4>Answer: {props.punchline}</h4>
       </div>
    )
}

export default Joke;