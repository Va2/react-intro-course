import React from 'react';

function SchoolProduct(props) {
    return (
        <div className="card">
            <h1>{props.product.name}</h1>
            <p className="price">
                {props.product.price.toLocaleString(
                    "fr-BE",
                    {
                        style: "currency",
                        currency: "EUR"
                    })
                }
            </p>
            <p>{props.product.description}</p>
        </div>
    )
}

export default SchoolProduct;