import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
function NavBar() {

    useEffect(() => {
    }, []);
    const [showSubBar, setShowSubBar] = useState(false);
    const [subNavbar, setSubNavBar] = useState([]);
    const [showNavBar, setShowNavbar] = useState(false);

    const navigation = [
        {
            "text": "Bell",
            "subbar": ["Bell 1", "Bell 2", "Bell 3", "Plus 4", "Messenger 3", "Messenger 3", "Messenger 3"],
            "icon": "BellIcon"
        },
        {
            "text": "Messenger",
            "subbar": ["Messenger 1", "Messenger 2", "Messenger 3"],
            "icon": "MessengerIcon"
        },
        {
            "text": "Plus",
            "subbar": ["Plus 1", "Plus 2", "Plus 3", "Messenger 3"],
            "icon": "PlusIcon"
        },
        {
            "text": "Settings",
            "subbar": ["Cog 1", "Cog 2", "Cog 3"],
            "icon": "CogIcon"
        },
        {
            "text": "Bolt",
            "subbar": ["Bolt 1", "Bolt 2", "Bolt 3"],
            "icon": "BoltIcon"
        }
    ];

    const toggleSubBar = (e, mouseState, navitem) => {
        if (mouseState === "mouseEnter") {
            if (navitem.subbar !== undefined && navitem.subbar.length > 0) {
                setSubNavBar(navitem.subbar);
                setShowSubBar(true);
            } else {
                setSubNavBar('');
            }

        } else {
            setShowSubBar(false);
        }
    };
    return (
        <div>
            <nav className={showNavBar ? "fullNavbar" : "halfNavbar"} onMouseLeave={() => {
                setShowNavbar(false);
                setShowSubBar(false);
            }} onMouseEnter={() => {
                setShowNavbar(true);
            }}>
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="link-icon">
                                <BellIcon />
                            </span>
                            <span className="link-text">
                                Bell
                            </span>
                        </a>
                    </li> */}
                    {/* <NavItem icon="BellIcon" text="Bell" />
                    <NavItem icon="MessengerIcon" text="Messenger" />
                    <NavItem icon="PlusIcon" text="Plus" />
                    <NavItem icon="CogIcon" text="Settings" />
                    <NavItem icon="BoltIcon" text="Bolt" /> */}
                    {navigation.map(navitem => (
                        <div onMouseEnter={(e) => toggleSubBar(e, "mouseEnter", navitem)}
                            onMouseLeave={(e) => toggleSubBar(e, "mouseLeave", navitem)}>
                            <NavItem key={navitem.icon} icon={navitem.icon} text={navitem.text} subbar="false"> </NavItem>
                        </div>
                    ))}
                </ul>
            </nav>
            <nav className={showSubBar ? "sub-navbar" : "sub-navbar-hide"}
                onMouseEnter={() => {
                    setShowNavbar(true);
                    setShowSubBar(true);
                }}
                onMouseLeave={() => {
                    setShowNavbar(false);
                    setShowSubBar(false);

                }}>
                <ul className="sub-navbar-nav">
                    {/* {subNavbar} */}
                    {
                        subNavbar.map(subnavbarItem => (
                            <div>
                                <NavItem key={subnavbarItem} icon={"BellIcon"} text={subnavbarItem} subbar="true"> </NavItem>
                            </div>
                        ))
                    }
                </ul>
            </nav>
        </div >
    );
}

export default NavBar;