import React from 'react';

function CurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize: 17, // px default
        width: "100%", // px, em, %, ... "STRING"
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <h4 style={styles}>Good {timeOfDay}!</h4>
    )
}

export default CurrentTime;