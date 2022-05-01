import React from "react";
import "../Mac.css";


function ProductPrice(props){
    const barName = props.barName;
    const price = props.price;
    
    return(
        <div className="hero-pricing">
            <p className="typography-body hero-price has-dynamic-content">
                <span data-pricing-product={barName}>{price}</span>
            </p>
        </div>
    );
}

export default ProductPrice;