/*
Hosted at https://www.nitesout.us/

Entirety of development and design is done by the NitesOut team.

This is the Home page of the NitesOut Entertainment website. Users can scroll down to see the
features of the app, and can join the waitlist to be notified when the app is released in their city.
The waitlist is implemented using Firebase. Use the contact information on the website to reach out to
the team.

Peaking under the hood? We are always looking for new experienced developers to join our team. Contact
us using the information on the website for opportunities.
*/

import {React, useState, useEffect, useRef} from 'react'

// all css imports
import './css/Home.css' // main css file
import './css/Navbar.css'
import './css/MockUp.css'
import './css/Features.css'
import './css/Waitlist.css'

// icon imports, visit https://react-icons.github.io/react-icons/ for more
import { MdOutlineLocalFireDepartment, MdPlace, MdAccessTime, MdCake, MdLoyalty, MdGroups,
         MdNearMe, MdAssessment, MdSpeakerGroup, MdFingerprint, MdPeople, MdSync } from "react-icons/md"

// component imports, visit src\components for more details
import WhiteTag from './components/WhiteTag'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

// back-end import, Firebase, supports waitlist
import { db } from './Firebase';

// AOS animation library import, animation on scroll
import Aos from 'aos'
import "aos/dist/aos.css";

// Link import, used for routing links to other pages on the website
import { Link } from 'react-router-dom'

const Home = () => {

    // variable that keeps track of the user's window size width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    // listener that constantly updates the window size variables when user changes it
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // useEffect function runs once directly when page loads
    useEffect(() => {
        //  Initializing AnimateOnScroll, tweak this function to change animation duration and delay
        Aos.init({
            once: 'true',
            duration: 1000,
            delay: 200
        });

        //  Scroll to top of page when page loads
        window.scrollTo(0, 0);

        //  Adding event listener to window to update window size variables
        window.addEventListener("resize", updateDimensions);

        //  Removing event listener when component unmounts
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // function to find if any part of an element is in the viewport, returns boolean
    // el is a document element, ex. document.querySelector(".element-class-name")
    function elementInViewport(el) {
        // don't worry about the code here, just know it works- keep it abstract
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
    }

    // variable to check if the user is currently viewing the very top of the page
    const [offLanding, setOffLanding] = useState(false);
    // changes the background once the user scrolls past the landing page
    function changeBGOnScroll(){
        // don't worry about the code, just know it works- keep it abstract
        const bgTrigger1 = document.querySelector(".landing-logo");

        if (!elementInViewport(bgTrigger1)){ // user is off landing page
            document.getElementById('background').classList.remove('fade-in');
            document.getElementById('background').classList.add('fade-away');

            document.getElementById('landing-items').classList.remove('landing-fade-in');
            document.getElementById('landing-items').classList.add('landing-fade-out');

            setOffLanding(true);
        } else { // user is on landing page
            document.getElementById('background').classList.remove('fade-away');
            document.getElementById('background').classList.add('fade-in');

            document.getElementById('landing-items').classList.remove('landing-fade-out');
            document.getElementById('landing-items').classList.add('landing-fade-in');

            setOffLanding(false);
        }
    }

    // running the function everytime the user scrolls to keep track of the user's scroll position
    window.onscroll = function() {
            changeBGOnScroll();
    };

    // reference variable that holds the users email input
    const userEmail = useRef();

    // variables that hold the visibility state of the waitlist and invite popup
    const [invite, setInvite] = useState(false); // ex. setInvite(false) will make it dissapear
    const [waitlist, setWaitlist] = useState(false); // ex. setWaitlist(true) will make it appear

    // saves the user's email and adds it to the back-end waitlist
    const saveAnswer = (event) => {
        event.preventDefault();

        try{
            db.collection("waitlist").add({
                email: userEmail.current.value
            });
        } catch {
            console.log("post error");
        }

        popUpLeave("wl");
        setTimeout(()=>{setInvite(true)}, 305);
    };

    // function that makes the waitlist popup dissapear smoothly
    // popupType is either "wl" for waitlist or "inv" for invite
    function popUpLeave(popupType){

        if(popupType === "wl"){
            document.getElementById("cool-popup").classList.remove("popup-container-enter");
            document.getElementById("cool-popup").classList.add("popup-container-leave");
    
            document.getElementById("blurry-bg").classList.remove("dark-bg-enter");
            document.getElementById("blurry-bg").classList.add("dark-bg-leave");

            setTimeout(()=>{
                setWaitlist(false);
            }, 300);
        }
        if (popupType === "inv"){
            document.getElementById("cool-popup-2").classList.remove("popup-container-enter");
            document.getElementById("cool-popup-2").classList.add("popup-container-leave");
    
            document.getElementById("blurry-bg-2").classList.remove("dark-bg-enter");
            document.getElementById("blurry-bg-2").classList.add("dark-bg-leave");

            setTimeout(()=>{
                setInvite(false);
            }, 300);
        }
    }

  return (
    <html>
    
    {/* background on landing page */}
    <div className='bg fade-in' id = 'background'/>

    {/* background everywhere else, there are 2 backgrounds on top of eachother with one fading in and out over the span of 10 seconds infinitely to give it a animated effect */}
    <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
    <div className='bg-2 fade-in' id = 'background-2'/>

    {/* invite popup */}
    {invite && (
        <>
            <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("inv")}} id='blurry-bg-2'/>
            <div className='popup-container popup-container-enter' id="cool-popup-2">
                <div className='popup gold-card'>
                    <p className='invite-thanks'>You're Invited!</p>
                    <img src={require("./assets/events/NasheDi-txt.png")} alt="litesout" className='invite-img'/>
                    <a href = "https://www.eventbrite.com/e/nashe-di-night-tickets-565509593417" className='get-tickets' target="_blank">
                        Get Tickets
                    </a>
                    <p className='invite-thanks'>Use Code "CantWait" For 20% Off</p>
                </div>
            </div>
        </>
    )}

    {/* waitlist popup */}
    {(waitlist) && (
        <>
            <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("wl")}} id="blurry-bg"/>
            <div className='popup-container popup-container-enter' id="cool-popup">
                <div className='popup nitesout-card'>
                    <p className='popup-text'>Want NitesOut in your city?<br/>Join our waitlist.</p>
                    <form id='nitesout-waitlist' className='popup-inputs' onSubmit={saveAnswer}>
                        <input ref={userEmail} type='email' placeholder='Your Email Address'/>
                        <button type='submit'>Join</button> 
                    </form>
                </div>
            </div>  
        </>
    )}

    {/* holds all different sections on the homepage */}
    <div className = 'pages'>
        
        <Navbar/>

        {/* .loading-bar -> Navbar.css */}
        <div className='loading-bar load-fast'/> 
        
        <Alert id='cookies' text={"By visiting this website, you agree to our use of cookies (they're homemade)."}/>

        {/* .landing -> Home.css */}
        <div className='landing'>
            {/* center text and logo */}
            <div className='landing-content'>
                <img src={require("./assets/NitesOut Crown White.png")} alt="logo" className='landing-logo'/>
                <h1 className='landing-title'>CONNECT TO<br/>YOUR CITY.</h1>
                <h2 className='landing-sub'>Explore your city, your way, with NitesOut. Experience something new or find out what's happening at your favorite club and get exclusive deals.</h2>
                {/* big glowing button */}
                <p className='landing-waitlist' onClick={()=>{setWaitlist(true)}}>Join Waitlist</p>
            </div>

            {/* bar-nodes are the 3 circular images of clubs on landing-page */}
            <div className='bar-node' id='bar-node-1'>
                <img src={require("./assets/bar1-img.png")} alt="bar node" className='bar-img'/>
                {/* 2-3 seperate rings surrounding each bar image */}
                <div className='ring'/>
                <div className='ring' id = "ring-1-2"/>
                <div className='ring' id = "ring-1-3"/>

                {/* WhiteTag are the tags that appear around the bar images */}
                <WhiteTag id='bar-tag-1-1' icon={<MdOutlineLocalFireDepartment/>} text='Hottest Bar Tonight'/>
                <WhiteTag id='bar-tag-1-2' icon={<MdPlace/>} text='0.3 Miles Away'/>
                <WhiteTag id='bar-tag-1-3' icon={<img src={require("./assets/NitesOut Crown Black.png")} className='nites-out-tag-crown'/>} text='NitesOut Event'/>
            </div>

            <div className='bar-node' id='bar-node-2'>
                <img src={require("./assets/bar2-img.png")} alt="bar node" className='bar-img'/>
                <div className='ring'/>
                <div className='ring' id = "ring-1-2"/>
                {/* <div className='ring' id = "ring-1-3"/> */}

                <WhiteTag id='bar-tag-2-1' icon={<MdCake/>} text='18+'/>
                <WhiteTag id='bar-tag-2-2' icon={<MdAccessTime/>} text='Short Line'/>
            </div>

            <div className='bar-node' id='bar-node-3'>
                <img src={require("./assets/bar3-img.png")} alt="bar node" className='bar-img'/>
                <div className='ring'/>
                <div className='ring' id = "ring-1-2"/>
                {/* <div className='ring' id = "ring-1-3"/> */}

                <WhiteTag id='bar-tag-3-1' icon={<MdLoyalty/>} text='50% Off Tickets'/>
                <WhiteTag id='bar-tag-3-2' icon={<MdGroups/>} text='3 Friends Here'/>
            </div>

        </div>

        <div className='under-landing'> {/* under-landing styling -> Home.css */}
            <div className='pages-container'> {/* pages-container styling -> Home.css */}
                
                {width < 900 && (
                    <div className='mockup-page'>
                        <div className='mockup-content'>
                            <h2 className='mockup-title'>Your All In One<br/>Nightlife Companion.</h2>
                            <img src={require('./assets/iphone1.png')} alt="mockup" className='phone' id='phone1'/>

                            <img src={require('./assets/phone-rings.png')} alt='phone-rings' className='phone-rings'/>
                            <img src={require('./assets/phone-rings.png')} alt='phone-rings' className='phone-rings' id='phone-rings-2'/>
                            <img src={require('./assets/phone-rings.png')} alt='phone-rings' className='phone-rings' id='phone-rings-3'/>
                        </div>
                    </div>
                )}
                
                {width > 900 && (
                    <div className='mockup-page' data-aos="fade-up">
                        <div className='mockup-content'>
                            <h2 className='mockup-title'>Your All In One<br/>Nightlife Companion.</h2>
                            <img src={require('./assets/iphone1.png')} alt="mockup" className='phone' id='phone1'/>

                            <img src={require('./assets/phone-rings.png')} alt='phone-rings' className='phone-rings'/>
                            <img src={require('./assets/phone-rings.png')} alt='phone-rings' className='phone-rings' id='phone-rings-2'/>
                            <img src={require('./assets/phone-rings.png')} alt='phone-rings' className='phone-rings' id='phone-rings-3'/>
                        </div>
                    </div>
                )}

                <div className='feat-page'>
                    <div className='big-feat' data-aos="fade-up">
                        <img src={require('./assets/info_phone.png')} alt="mockup" className='big-feat-img' id='phone2'/>
                        <div className='feat-text' id='big-feat-text'>
                            <MdAssessment className='feat-icon big-feat-icon'/>
                            <h1 className='feat-title'>Find Out Before You Go.</h1>
                            <p className='feat-sub'>
                                Check live ratings and projections to see if your favorite club is poppin' before you go.
                            </p>
                        </div>
                    </div>

                    <div className='feat-list' data-aos="fade-up">
                        <div className='feat feat-text'>
                            <MdNearMe className='feat-icon'/>
                            <h1 className='feat-title'>Explore</h1>
                            <p className='feat-sub'>
                                Explore nearby suggestions for bars, clubs, & events that we guarantee you'll love.
                            </p>
                        </div>
                        <div className='feat feat-text'>
                            <Link className="book-us">Book Us</Link>
                            <MdSpeakerGroup className='feat-icon'/>
                            <h1 className='feat-title'>Host</h1>
                            <p className='feat-sub'>
                                Host your public and private events, share and scan tickets directly with the app.
                            </p>
                        </div>
                        <div className='feat feat-text'>
                            <MdLoyalty className='feat-icon'/>
                            <h1 className='feat-title'>Deals</h1>
                            <p className='feat-sub'>
                                Discover nearby deals and earn rewards on food and drinks at your favorite spots.
                            </p>
                        </div>
                    </div>
                    <div className='feat-list' data-aos="fade-up">
                        <div className='feat feat-text long-feat'>
                            <MdFingerprint className='feat-icon'/>
                            <h1 className='feat-title'>Stories</h1>
                            <p className='feat-sub'>
                                Check out any club with their public shared stories. Walk into one to be able to post to the story yourself.
                            </p>
                        </div>
                        <div className='feat feat-text long-feat'>
                            <MdPeople className='feat-icon'/>
                            <h1 className='feat-title'>Friends</h1>
                            <p className='feat-sub'>
                                Stay connected with your friends by adding them to your list. See where they are and easily plan your next night out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    

            <div className='connect-feat' data-aos="fade-up">
                <img src={require('./assets/ashe-phone.png')} alt="mockup" className='connect-img' id='phone-ashe'/>

                <div className='feat-text connect-feat-text'>
                    <MdSync className='feat-icon big-feat-icon connect-icon'/>
                    <h1 className='feat-title'>Connect Like Never Before.</h1>
                    <p className='feat-sub'>
                        Talked with someone but never got their contact? We got your back. Once we detect encounters, both parties receive friend requests, which they can deny or accept.
                    </p>
                    <div className='connect-bottom'>
                        <img src={require('./assets/talk_notif.png')} alt='notif' className='notif-img'/>
                        <img src={require('./assets/isabellaphone.png')} alt='phone' className='phone-notif-img'/>
                    </div>
                </div>

                <img src={require('./assets/jayke-phone.png')} alt="mockup" className='connect-img' id='phone-jayke'/>
            </div>

            {/* .trusts-page -> Features.css */}
            <div className='trusts-page' data-aos="fade-up">
                <h1 className='trusts-title'>Proudly Trusted By</h1>
                <p className='alt-subtitle'>Brands that help drive us forward. Want to join? Contact niteoutentertainment2022@gmail.com.</p>
                <div className='trusts-list'>
                    <div className='trust-group'>
                        <img src={require('./assets/brands/decades-logo.png')} alt="brand" className='trust'/>
                        <p className='brand-name'>Decades, DC</p>
                    </div>
                    <div className='trust-group'>
                        <img src={require('./assets/brands/noto-logo.png')} alt="brand" className='trust'/>
                        <p className='brand-name'>Noto, PA</p>
                    </div>
                    <div className='trust-group'>
                        <img src={require('./assets/brands/roar-logo.png')} alt="brand" className='trust'/>
                        <p className='brand-name'>Roar, PA</p>
                    </div>
                    <div className='trust-group'>
                        <img src={require('./assets/brands/cc-logo.png')} alt="brand" className='trust'/>
                        <p className='brand-name'>Concourse, PA</p>
                    </div>
                    <div className='trust-group'>
                        <img src={require('./assets/brands/bliss-logo.png')} alt="brand" className='trust'/>
                        <p className='brand-name'>Bliss, DC</p>
                    </div>
                    <div className='trust-group'>
                        <img src={require('./assets/brands/sachi-logo.png')} alt="brand" className='trust'/>
                        <p className='brand-name'>Sachi, DC</p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    </div>
    </html>
  )
}

export default Home