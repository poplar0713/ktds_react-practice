import React from "react";
import "../Mac.css";


function ProductButton(props){
    const barName = props.barName;
    
    return(
        <div className="cta-links">
            <div className="link-container">
                <p className="typography-hero-product-link hero-product-link">
                    <a href={"/kr/shop/goto/buy_mac/" + barName} className="button button hero-button">구입하기</a>
                </p>
            </div>
            <div className="link-container">
                <p className="typography-body hero-link">
                    <a href={"/kr/"+ barName +"/"} className="icon-wrapper">
                        <span className="icon-copy">더 알아보기</span>
                        <span className="icon icon-after more"></span>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ProductButton;