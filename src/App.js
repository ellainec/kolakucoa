import React, { Component } from 'react';
import header from './images/header.jpg';
import './App.css';
import CreditSection from './components/CreditSection';
import EpisodeCard from './components/EpisodeCard';
import ContactForm from './components/ContactForm';
import Ep1Thumbnail from './images/CSA.jpg';
import Ep2Thumbnail from './images/WWA.jpg';
import Ep1WatchNow from './images/CSB.jpg';
import Ep2WatchNow from './images/WWB.jpg';
import headshot from './images/placeholder_headshot.jpg';



class App extends Component {

    render() {
        return (
            <div id="App">
                <img id="Logo" src={header} alt="kolakucoa logo" />

                <div id="Episode-Div">
                    <EpisodeCard
                        title="Episode 1 - Clam Shots"
                        link="https://www.youtube.com/channel/UCbvMBP2S1W67PGMppA1i1ZA"
                        image={Ep1Thumbnail}
                        watchNowImage={Ep1WatchNow}
                        description="Marine biologist in-training Ellaine travels to Kolakucoa,
                        eager to meet the island's famed talking animals.  Some of them are 
                        more welcoming than others."
                    />

                    <EpisodeCard
                        title="Episode 2 - Whalefare Wednesday"
                        link="https://www.youtube.com/channel/UCbvMBP2S1W67PGMppA1i1ZA"
                        image={Ep2Thumbnail}
                        watchNowImage={Ep2WatchNow}
                        description="Whales... whales as far as the eye can see.  Can Kyle de-beach a 
                        literal sea of whales while evading his creepy new boss?  Can Ellaine save
                        a helpless starfish from becoming a crow's feast?  Can Mike get out of work?"
                    />  
                </div>

                <div id="About">
                    <h1 className="header BangersFont">About The Show</h1>
                    <p>
                    Kolakucoa is an animated show, created by three young Vancouverites with a bit of the extra spare 
                    time needed to create a cartoon.  After teaming up with some great local talent, we bring you the 
                    result: a young marine biologist travels to the world’s only island where the animals talk back.  
                    Joined by a sassy turtle, a happy-go-lucky lifeguard, and his pugnacious seal sidekick, our 
                    heroine sets out on the adventure of a lifetime.
                    </p>
                </div>

                <div id="Cast" className="container">
                    <h1 className="header BangersFont">Cast &amp; Crew</h1>
                    <div id="Cast-Inner">
                        <CreditSection
                            title ="Produced By"
                            names = {["Kyle Ross", "Ellaine Chan", "Brandon Kohinsky"]}
                        />
                        <CreditSection
                            title ="Written By"
                            names = {["Kyle Ross", "Ellaine Chan", "Brandon Kohinsky"]}
                        />
                        <CreditSection
                            title ="Starring"   
                            names = {[
                                "Kyle Ross", 
                                "Brandon Kohinsky", 
                                "Julie Tao", 
                                "Joel McCarthy", 
                                "Hans Potter", 
                                "Panthea Vatandoost", 
                                "Olena Venidiktova",
                                "Stephanie Cho",
                                "Stevie Jackson"
                            ]}
                        />
                    </div>
                </div>
                
                <div className="container">
                    <h1 className="header BangersFont">Contact Us</h1>
                    <ContactForm/>
                </div>
            </div>
        );
    }
}


export default App;