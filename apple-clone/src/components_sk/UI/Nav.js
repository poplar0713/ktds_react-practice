import React from "react";
import "../Mac.css";
import NavItem from "./NavItem";

function Nav(props){


    return (
        <nav id="chapternav" className="chapternav with-paddles">
            <div className="chapternav-wrapper">
                <ul className="chapternav-items">

                    <NavItem navItemName="macbook-air" item="MacBook Air"></NavItem>
                    <NavItem navItemName="macbook-pro" item="MacBook Pro"></NavItem>
                    <NavItem navItemName="imac-24" item="iMac 24"></NavItem>
                    <NavItem navItemName="mac-mini" item="Mac mini"></NavItem>
                    <NavItem navItemName="mac-studio" item="Mac Studio" new="Y"></NavItem>
                    <NavItem navItemName="mac-pro" item="Mac Pro"></NavItem>
                    <NavItem navItemName="compare" item="비교하기" hidden={{is:"Y", message:"Mac 모델"}}></NavItem>
                    <NavItem navItemName="displays" item="디스플레이" new="Y"></NavItem>
                    <NavItem navItemName="accessories" item="액세서리" hidden={{is:"Y", message:"Mac 용"}}></NavItem>
                    <NavItem navItemName="macos" item="Monterey"></NavItem>
                    <NavItem navItemName="shop" item="Mac 쇼핑하기"></NavItem>

{/* 
                    <li className="chapternav-item chapternav-item-compare">
                        <a className="chapternav-link" href="/kr/mac/compare/">
                            <figure className="chapternav-icon"></figure>
                            <span className="chapternav-label" >비교하기<span className="visuallyhidden">Mac 모델</span></span> 
                        </a>
					</li>

                    <li className="chapternav-item chapternav-item-accessories">
                        <a className="chapternav-link" href="/kr/shop/goto/mac/accessories">
                            <figure className="chapternav-icon"></figure>
                            <span className="chapternav-label" >액세서리<span className="visuallyhidden">Mac용</span></span> 
                        </a>
                    </li> */}

                </ul>
			</div>
		</nav>
    );
}

export default Nav;