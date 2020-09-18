// function Dropdown() {
//     const [activeMenu, setActiveMenu] = useState("main");

//     function DropdownItem(props) {
//         if (props["rightIcon"] === undefined && props["leftIcon"] === undefined) {
//             return (
//                 <a href="#" className="menu-item">
//                     {props.text}
//                 </a>
//             );
//         } else if (props["leftIcon"] !== undefined && props["rightIcon"] === undefined) {
//             return (
//                 <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//                     <span className="icon-button">{props.leftIcon}</span>
//                     {props.children}
//                 </a>
//             );

//         }
//         return (
//             <a href="#" className="menu-item">
//                 <span className="icon-button">{props.leftIcon}</span>
//                 {props.children}
//                 <span className="icon-right" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>{props.rightIcon}</span>
//             </a>
//         );
//     }

//     return (
//         <div className="dropdown">
//             {/* <Transition
//         in={activeMenu === 'main'}
//         timeout={500}
//         className="menu-primary"> */}
//             <div className="menu">
//                 <DropdownItem leftIcon="🤦‍♂️"><p className="textIcon">My Profile</p></DropdownItem>
//                 <DropdownItem
//                     leftIcon={<CogIcon />}
//                     rightIcon={<ChevronIcon />}
//                     goToMenu="settings">
//                     <p className="textIcon">Settings</p>
//                 </DropdownItem>
//             </div >
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

function DropdownSearch(props) {

    const [searchOptions, setSearchOptions] = useState('');
    const [inputVal, setInputVal] = useState('');
    useEffect(() => {
        console.log("In Dropdown");
        console.log(props);

    }, []);

    const handleInput = (e) => {
        let inputValue = e.target.value;
        if (inputValue === ' ') {
            return;
        }
        setInputVal(inputValue);
        let searchBreedOptions = [];
        for (let breed of props.breedsList) {
            if (breed.includes(inputValue)) {
                searchBreedOptions.push(breed);
            }
        }
        const value = searchBreedOptions.map(breed => {
            let opacityOfSearchOption = 1 - (searchBreedOptions.indexOf(breed) / searchBreedOptions.length);
            if (opacityOfSearchOption < 0.1) {
                opacityOfSearchOption = 0.1;
            }
            let widthOfSearchOption = (1 - (searchBreedOptions.indexOf(breed) / searchBreedOptions.length)) * 400;
            if (widthOfSearchOption < 250) {
                widthOfSearchOption = 250;
            }
            return (
                <Link to={`/content/${breed}`}>
                    <DropdownItem value={breed} key={breed} style={{
                        opacity: "" + opacityOfSearchOption,
                        width: "" + widthOfSearchOption + "px"
                    }} />
                </Link>

            )
        });
        if (inputValue !== "") {
            setSearchOptions(value);
        } else {
            setSearchOptions(' ');
        }
    }

    return (
        <div>
            <div className="unselect-search-box" onClick={() => {
                setSearchOptions(' ');
                setInputVal('');
            }}>
            </div>
            <div className="search-box">
                <input value={inputVal} className="search-input" type="text" placeholder="Dog breed" onChange={(e) => handleInput(e)}></input>
                <a className="search-btn" href="#">
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v1.png" />
                </a>
            </div>
            <div className="search-options">
                {/* <DropdownItem value={props.breedsList[0]} style={{ opacity: "1.0" }} />
                <DropdownItem value={props.breedsList[1]} style={{ opacity: "0.75" }} />
                <DropdownItem value={props.breedsList[0]} style={{ opacity: "0.5" }} />
                <DropdownItem value={props.breedsList[1]} style={{ opacity: "0.25" }} />
                <DropdownItem value={props.breedsList[0]} style={{ opacity: "0.1" }} />
                <DropdownItem value={props.breedsList[1]} style={{ opacity: "0.25" }} />
                <DropdownItem value={props.breedsList[0]} style={{ opacity: "0.1" }} /> */}
                {/* {props.breedsList.map(breed => (
                    <Link to={`/content/${breed}`}>
                        <DropdownItem value={breed} key={breed} style={{ opacity: "0.1" }} />
                    </Link>
                ))} */}
                {searchOptions}
            </div>
        </div >
    );

    function DropdownItem(props) {
        useEffect(() => {
            console.log("In Dropdown item");

        }, []);
        return (

            <div style={props.style} className="dropdown-item">
                <a href="#" > {props.value}
                    {/* <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right"></span> */}
                </a>
            </div>

        );
    }
}

export default DropdownSearch;