import React from 'react';

function CurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    
    const styles = {
        fontSize: 17, // px default
        width: "100%", // px, em, %, ... "STRING"
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }


    return (
        <h4 style={styles}>Good {timeOfDay}!</h4>
    )
}

export default CurrentTime;