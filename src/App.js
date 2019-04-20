import React, { Component } from 'react';
import header from './images/header_small.jpg';
import './App.css';
import CastMember from './components/CastMember';
import EpisodeCard from './components/EpisodeCard';
import ContactForm from './components/ContactForm';
import Ep1Thumbnail from './images/episode1.jpg';
import Ep2Thumbnail from './images/episode2.jpg';
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
                    <h1 className="header">About The Show</h1>
                    <p>
                        Pet my belly, you know you want to; seize the hand and shred it! love kitty scratches couch bad kitty. 
                        Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat 
                        life attack feet cat not kitten around the door is opening! how exciting oh, it's you, meh, so spend six hours per 
                        day washing, but still have a crusty butthole yet run outside as soon as door open. Meow all night. Thinking 
                        longingly about tuna brine. Give attitude. Meeeeouw shake treat bag i shall purr myself to sleep. Lies down the 
                        fat cat sat on the mat bat away with paws for demand to be let outside at once, and expect owner to wait for me 
                        as i think about it and chill
                    </p>
                </div>

                <div id="Cast" className="container">
                    <h1 className="header">Cast &amp; Crew</h1>
                    <div id="Cast-Inner">
                        <CastMember
                            image={headshot}
                            name="Kyle"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Brandon"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Julie"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Joel"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Hans"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Panthea"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Ellaine"
                            description="This is the best part I've played"
                        />
                        <CastMember
                            image={headshot}
                            name="Olena"
                            description="This is the best part I've played"
                        />
                    </div>
                </div>
                
                <div className="container">
                    <h1 className="header">Contact Us</h1>
                    <ContactForm/>
                </div>
            </div>
        );
    }
}


export default App;