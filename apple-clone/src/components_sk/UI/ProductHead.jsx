import React from "react";
import "../Mac.css";


function ProductHead(props){
    const name = props.name;
    const isNew = props.isNew;
    return(
        <h2>
            {isNew === "Y" ? <span className="typography-hero-violator section-hero-product-violator violator-frameless">New</span> : null}
            <span className="typography-hero-product-headline hero-eyebrow">{name}</span>
        </h2>
    );
}

export default ProductHead;