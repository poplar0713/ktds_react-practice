import React from "react";
import "../Mac.css";


function ProductImage(props){
    const barName = props.barName;

    return(
        <div className="large-12 hero-image-wrapper">
            <figure className={"hero-"+barName+"-image hero-image"}></figure>
        </div>
    );
}

export default ProductImage;