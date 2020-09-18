import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
function DogBreed({ match }) {
    useEffect(() => {
        getDogBreedImage();
    }, []);
    const getDogBreedImage = async () => {
        let breedNames = match.params.breedName.split(' ');
        let url;
        if (breedNames.length == 1) {
            url = `https://dog.ceo/api/breed/${match.params.breedName}/images`;
        } else {
            let parentBreed = breedNames[1];
            let childBreed = breedNames[0];
            url = `https://dog.ceo/api/breed/${parentBreed}/${childBreed}/images`;
        }
        const dogData = await fetch(url);
        const dogImageUrlData = await dogData.json();

        setDogImageUrl(dogImageUrlData["message"]);
    }
    const [dogImageUrls, setDogImageUrl] = useState([]);
    const [seeFullScreen, setFullScreen] = useState(false);
    const [fullScreenImgSrc, setFullScreenImgSrc] = useState("");
    const switchToFullScreen = (dogImageUrl) => {
        setFullScreenImgSrc(dogImageUrl);
        setFullScreen(true);
    }
    const backgroundColorData = {
        "notFullScreen": {
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        "fullScreen": {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
    };
    const switchToNotFullScreen = (e) => {
        if (e.target.classList.length > 0) {
            setFullScreen(false);
            setFullScreenImgSrc("");
        }
    }
    return (
        <div>
            <div className="dog-images">
                {dogImageUrls.map(dogImageUrl => (
                    <div className="dog-image-container">
                        <img src={dogImageUrl} className="dog-image" key={dogImageUrl} onClick={((e) => switchToFullScreen(dogImageUrl))}></img>
                    </div>
                ))}
            </div >
            <div className={seeFullScreen ? "fullscreen-image" : "not-fullscreen-image"} onClick={(e) => switchToNotFullScreen(e)}>
                <img src={fullScreenImgSrc}></img>
                <p></p>
            </div >
        </div >
    );
}

export default DogBreed; 