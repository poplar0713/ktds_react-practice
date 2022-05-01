import React from "react";
import "../Mac.css";

function NavItem(props){
    const isNew = props.new;
    const hidden = props.hidden;
    return (
        <li className={'chapternav-item ' + 'chapternav-item-'+props.navItemName}>
            <a className='chapternav-link' href={'/kr/'+props.navItemName}>
                <figure className="chapternav-icon"></figure>
                <span className="chapternav-label" >{props.item}
                {/* {hidden.is === "Y" ? <span className="visuallyhidden">{props.hidden.message}</span> : null} */}
                </span>
                {isNew === "Y" ? <span className="chapternav-new">New</span> : null}
                
            </a>
        </li>
    );
}

export default NavItem;