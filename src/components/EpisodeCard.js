import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import youTubeLogo from '../images/youTube.png';
import Paper from '@material-ui/core/Paper';
import arrow from '../images/right-arrow-sketch.png';

const EpisodeCard = (props) => {

    const { title, link, image, watchNowImage, description } = props;
    const [colourImage, setColour] = useState(true);
    const showDesktopImage = () => {
        if (colourImage){
            return image;
        } else {
            return watchNowImage;
        }
    }

    const showYoutube = () => {
        if (isMobile) {
            return (
                <div className="watchNow">
                    <h3 className="BangersFont mobile-tablet-only"> Watch Now&nbsp;</h3>
                    <img src= {arrow} alt="arrow pointing to the right"/>
                    <span>&nbsp;</span>
                    <a href={link}>
                        <img src={youTubeLogo} alt="youtube"/>
                    </a>
                </div>
            )
        }
    }

    const showImage = () => {
        if (!isMobile) {
            return (
                <a href={link}
                onMouseEnter={() => setColour(false)}
                onMouseLeave={() => setColour(true)}>
                <img className="EpisodeImage" src={showDesktopImage()} alt="clamshot"/>
            </a>
            )
        } else {
            return (
                <img className="EpisodeImage" src={ image } alt="clamshot"/>
            )
        }
    }
    return (
        <Paper elevation={2} className="EpisodeCard">
            { showImage() }
            <h1 className="BangersFont centerText">{title}</h1>
            { showYoutube()}
            <p className="CardDescription">{description}</p>
        </Paper>
    )
}

export default EpisodeCard;