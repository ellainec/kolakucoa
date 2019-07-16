import React, { Component } from 'react';
import header from './images/header.jpg';
import './App.css';
import CastMember from './components/CastMember';
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
                        link="https://www.google.com"
                        image={Ep1Thumbnail}
                        watchNowImage={Ep1WatchNow}
                        description="Marine biologist in-training Ellaine travels to Kolakucoa,
                        eager to meet the island's famed talking animals.  Some of them are 
                        more welcoming than others."
                    />

                    <EpisodeCard
                        title="Episode 2 - Whalefare Wednesday"
                        link="https://www.google.com"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div id="Cast" className="container">
                    <h1 className="header BangersFont">Cast &amp; Crew</h1>
                    <div id="Cast-Inner">
                        <CastMember
                            image={headshot}
                            name="Kyle"
                            title="Producer, writer, animator, Kyle"
                        />
                        <CastMember
                            image={headshot}
                            name="Brandon"
                            title="Producer, writer, Mike"
                        />
                        <CastMember
                            image={headshot}
                            name="Ellaine"
                            title="Producer, writer"
                        />
                        <CastMember
                            image={headshot}
                            name="Julie"
                            title="Ellaine"
                        />
                        <CastMember
                            image={headshot}
                            name="Joel"
                            title="Damian"
                        />
                        <CastMember
                            image={headshot}
                            name="Hans"
                            title="Starfish, Po, Clarence"
                        />
                        <CastMember
                            image={headshot}
                            name="Panthea"
                            title="Celeste"
                        />
                        <CastMember
                            image={headshot}
                            name="Olena"
                            title="Olga"
                        />
                        <CastMember
                            image={headshot}
                            name="Stevie"
                            title="Muscular seal at club"
                        />
                        <CastMember
                            image={headshot}
                            name="Stephanie"
                            title="Excited seal at club"
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