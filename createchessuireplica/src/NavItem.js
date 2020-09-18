import React, { useState, useEffect } from 'react';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function NavItem(props) {
    // const icon = (
    //     <span className="link-icon">
    //         <BellIcon />
    //     </span>
    // );

    // return (
    //     <li className="nav-item">
    //         <a href="#" className="nav-link">
    //             {/* <span className="link-icon"> */}
    //             {icon}
    //             {/* </span> */}
    //             <span className="link-text">
    //                 Bell
    //             </span>
    //         </a>
    //     </li>
    // );
    const linkText = (
        <span className={props.subbar === "true" ? "subbar-link-text" : "link-text"}>
            {props.text}
        </span>
    );
    switch (props.icon) {
        case "BellIcon": {
            return (
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span className="link-icon">
                            <BellIcon />
                        </span>
                        {linkText}
                    </a>
                </li>
            )
        }
        case "MessengerIcon": {
            return (
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span className="link-icon">
                            <MessengerIcon />
                        </span>
                        {linkText}
                    </a>
                </li>
            );
        }
        case "PlusIcon": {
            return (
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span className="link-icon">
                            <PlusIcon />
                        </span>
                        {linkText}
                    </a>
                </li>
            );
        }
        case "CogIcon": {
            return (
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span className="link-icon">
                            <CogIcon />
                        </span>
                        {linkText}
                    </a>
                </li>
            );
        }
        default: {
            break;
        }
        case "BoltIcon": {
            return (
                <li className="nav-item" style={{ position: "fixed", top: "90%" }}>
                    <a href="#" className="nav-link">
                        <span className="link-icon">
                            <BoltIcon />
                        </span>
                        {linkText}
                    </a>
                </li>
            )
        }
    }
}

export default NavItem;