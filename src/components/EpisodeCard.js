import React, { useState } from 'react';

const EpisodeCard = (props) => {

    const { title, link, image, watchNowImage, description } = props;
    const [colourImage, setColour] = useState(true);
    const showImage = () => {
        if (colourImage){
            return image;
        } else {
            return watchNowImage;
        }
    }
    return (
        <div className="EpisodeCard">
            <a href={link}
                onMouseEnter={() => setColour(false)}
                onMouseLeave={() => setColour(true)}>
                <img src={showImage()} alt="clamshot"/>
            </a>
                <h1 className="BangersFont centerText">{title}</h1>
                <p className="CardDescription">{description}</p>
            </div>
    )
}

export default EpisodeCard;