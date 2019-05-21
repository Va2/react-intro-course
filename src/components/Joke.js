import React from 'react';

function Joke(props) {
    return (
       <div>
            <h4>Question: {props.question}?</h4>
            <h4>Answer: {props.punchline}</h4>
       </div>
    )
}

export default Joke;