import React from 'react';

function Joke(props) {
    const styles = {
        display: !props.question && "none", // Conditional styling
        padding: 20,
        backgroundColor: "#f44336", // red
        marginBottom: 15
    }

    return (
       <div>
            <h4 style={styles}>Question: {props.question}</h4>
            <h4>Answer: {props.punchline}</h4>
       </div>
    )
}

export default Joke;