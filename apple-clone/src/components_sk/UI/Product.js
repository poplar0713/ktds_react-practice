import React from "react";

function Product(){
    return(
    <section class="section section-mac-studio section-hero-product" >
		<div class="section-content">
            <div class="product-wrapper mac-studio large-7 large-centered medium-8 small-12">
                <h2>
                    <span class="typography-hero-violator section-hero-product-violator violator-frameless">New</span> 
                    <span class="typography-hero-product-headline hero-eyebrow">Mac Studio</span>
                </h2>
                <p class="typography-eyebrow-elevated hero-copy">창조의 원동력.</p>
                <div class="hero-pricing">
                    <p class="typography-body hero-price has-dynamic-content">
                        <span data-pricing-product="mac-studio" data-product-template="${price.display.from}" data-pricing-loaded="">₩2,690,000부터</span>
                    </p>
                </div>
                <div class="cta-links">
                    <div class="link-container">
                        <p class="typography-hero-product-link hero-product-link">
                            <a href="/kr/shop/goto/buy_mac/mac_studio" data-analytics-title="buy - mac studio" aria-label="Mac Studio 구입하기" class="button button hero-button">구입하기</a>
                        </p>
                    </div>
                    <div class="link-container">
                        <p class="typography-body hero-link">
                            <a href="/kr/mac-studio/" data-analytics-title="learn more about mac studio" aria-label="Mac Studio에 대해 더 알아보기" class="icon-wrapper">
                                <span class="icon-copy">더 알아보기</span>
                                <span class="icon icon-after more"></span>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="large-12 hero-image-wrapper">
                    <figure class="hero-mac-studio-image hero-image"></figure>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Product;