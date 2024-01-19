import {React, useEffect, useState} from 'react'

import Event from '../components/Event';
import Footer from '../components/Footer';

import '../css/Footer.css'
import '../css/Navbar.css'
import '../css/Events.css'
import Navbar from '../components/Navbar';

const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <>
        <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
        <div className='bg-2 fade-in' id = 'background-2'/>

        <Navbar/>
        {/* .loading-bar & .load -> Navbar.css */}
        <div className='loading-bar load-fast'/> 

        <div className='events-page-container'>
            <h1 className='events-page-title' id="team-page-title">Exclusive NitesOut Events</h1>
            <p className='alt-subtitle'>Join us for unforgettable nights with flowing drinks and nonstop music.</p>

            <div className='events-page-content'>
                <p className='timing-title'>Upcoming Events</p>

                {/* HIGHLIGHT EVENT */}
                <a href="https://www.eventbrite.com/e/sooraj-dooba-hain-alice-dc-tickets-784559868687?aff=erelexpmlt" target="_blank">
                <div className='highlight-event'>
                    <div className='highlight-event-tags'>
                        <p>Alice + Cloak&Dagger</p>
                        <p>January 26, 2024</p>
                        <p className='cool-tag'>Tickets Out Now!</p>
                    </div>
                </div>
                </a>

                <p className='timing-title'>Past Events</p>
                <div className='events-grid'>
                    <Event
                        pop = "600/600"
                        thumbnailID="masti"
                        title="Masti Ki Raat"
                        date="Nov. 16, 2023"
                        location="Washington DC, USA"
                        link="https://www.eventbrite.com/e/masti-ki-raat-tickets-749605649677"
                    />
                    <Event
                        pop = "500/500"
                        thumbnailID="fright"
                        title="Fright Nites"
                        date="Oct. 27, 2023"
                        location="Washington DC, USA"
                        link="https://www.eventbrite.com/e/frightnites-phantom-lounge-presented-by-nitesout-tickets-719421929357"
                    />
                    <Event
                        pop = "1000/1000"
                        thumbnailID="dhoom"
                        title="Dhoom Machale"
                        date="Aug. 31, 2023"
                        location="Washington DC, USA"
                        link="https://www.eventbrite.com/e/dhoom-machale-nitesout-x-umd-sasa-x-dhoom-tickets-662130448997"
                    />
                </div>

                <div className='events-grid'>
                    <Event
                        pop = "350/350"
                        thumbnailID="nashe-di"
                        title="Nashe Di Night"
                        date="Mar. 16, 2023"
                        location="Washington DC, USA"
                        link="https://www.eventbrite.com/e/nashe-di-night-tickets-565509593417"
                    />
                    <Event
                        pop = "800/800"
                        thumbnailID="holi"
                        title="Holi Sunburn Festival"
                        date="Mar. 4, 2023"
                        location="Washington DC, USA"
                        link="https://events.sulekha.com/holi-sunburn-festival-dc_event-in_washington-dc_366615"
                    />
                    <Event
                        pop = "200/200"
                        thumbnailID="litesout"
                        title="LitesOut"
                        date="Jan. 26, 2023"
                        location="Washington DC, USA"
                        link="https://www.eventbrite.com/e/litesout-presented-by-nitesout-entertainment-official-app-launch-party-tickets-476783421047"
                    />

                </div>

                <div className='events-grid'>
                    <Event
                        pop = "1000/1000"
                        thumbnailID="fright-night"
                        title="Fright Night At Noto"
                        date="Oct. 27, 2022"
                        location="Philadelphia, PA"
                        link="https://www.eventbrite.com/e/fright-night-at-noto-tickets-428215372707"
                    />
                    <Event
                        pop = "500/500"
                        thumbnailID="bolly-blackout"
                        title="Bollywood Blackout"
                        date="Sep. 9, 2022"
                        location="Washington DC, USA"
                        link="https://discodeewane.ticketleap.com/blackout/details"
                    />
                    <Event
                        pop = "750/750"
                        thumbnailID="spring-spec"
                        title="Spring Spectacular"
                        date="Apr. 7, 2022"
                        location="Philadelphia, PA"
                        link="https://www.eventbrite.com/e/spring-spectacular-at-concourse-tickets-293643635017"
                    />
                </div>


            </div>

        </div>
    
        <Footer/>
        
    </>
  )
}

export default Events