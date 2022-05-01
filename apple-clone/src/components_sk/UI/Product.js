import React from "react";
import "../Mac.css";
import ProductButton from "./ProductButton";
import ProductContent from "./ProductContent";
import ProductHead from "./ProductHead";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

function Product(props){
    const barName = props.barName;
    const name = props.name;
    const price = props.price;
    const content = props.content;
    const isNew = props.isNew;

    return(
        <section className={"section section-" + barName + " section-hero-product"} >
            <div className="section-content">
                <div className={"product-wrapper " + barName + " large-7 large-centered medium-8 small-12"}>

                    <ProductHead name={name} isNew={isNew}></ProductHead>
                    <ProductContent content={content}></ProductContent>
                    <ProductPrice barName={barName} price={price}></ProductPrice>
                    <ProductButton barName={barName}></ProductButton>
                    <ProductImage barName={barName}></ProductImage>

                </div>
            </div>
        </section>
    );
}

export default Product;