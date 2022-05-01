import React from "react";
import "../Mac.css";


function ProductContent(props){
    const content = props.content;

    return(
        <p className="typography-eyebrow-elevated hero-copy">{content}</p>
    );
}

export default ProductContent;