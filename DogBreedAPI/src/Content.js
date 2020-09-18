import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import DropdownSearch from './Dropdown';
function Content() {

    useEffect(() => {
        // Update the document title using the browser API
        getBreeds();
    }, []);

    const [breeds, setBreeds] = useState([]);
    const [breedsLoaded, setBreedsLoaded] = useState(false);
    const getBreeds = async () => {
        let data = await fetch("https://dog.ceo/api/breeds/list/all");
        let breedsData = await data.json();
        let breedsList = [];
        for (let parentBreed in breedsData["message"]) {
            let breedData = breedsData["message"][parentBreed];
            if (breedData.length > 0) {
                for (let childBreed of breedData) {
                    breedsList.push(childBreed + " " + parentBreed);
                }
            } else {
                breedsList.push(parentBreed);
            }
        }
        setBreeds(breedsList);
        setBreedsLoaded(true);
    }
    return (
        <div>
            {
                breedsLoaded && <DropdownSearch breedsList={breeds} />
            }
            {/* <ul className="dog-breeds">
                {breeds.map(breed => (
                    <Link to={`/content/${breed}`}>
                        <li className="dog-breed" key={breed}>{breed}</li>
                    </Link>
                ))}
            </ul> */}
        </div>
    );
}

export default Content;