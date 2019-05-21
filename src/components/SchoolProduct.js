import React from 'react';

function SchoolProduct(props) {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <p className="price">€ {props.price.toFixed(2)}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default SchoolProduct;