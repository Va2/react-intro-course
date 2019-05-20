import React from 'react';

function MyInfo() {
    const firstName = "John";
    const lastName = "Doe";

    return (
        <div>
            <h4>{`${firstName} ${lastName}`}</h4>
            <p>Junior Web Developer</p>
            <ol>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>React Native</li>
            </ol>
        </div>
    )
}

export default MyInfo;