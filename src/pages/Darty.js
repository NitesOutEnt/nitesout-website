import {React, useRef, useState} from 'react'
// back-end import, Firebase, supports waitlist
import { db } from '../Firebase';
import {RxDoubleArrowUp} from 'react-icons/rx'

import '../css/Darty.css'

const Darty = () => {
  
    // reference variable that holds the users email input
    const userEmail = useRef();

    // variables that hold the visibility state of the waitlist and invite popup
    const [invite, setInvite] = useState(false); // ex. setInvite(false) will make it dissapear
    const [waitlist, setWaitlist] = useState(false); // ex. setWaitlist(true) will make it appear

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

    const [drink, setDrink] = useState("");

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
        setTimeout(()=>{
            
            setInvite(true);

            setTimeout(()=>{

                // var rand = Math.floor(Math.random() * 101);
            
                // 30% chance of fireball, 30% chance of sigma, 30% chance of tonic, 10% chance of mojito
                // if (rand <= 30){
                //     document.getElementById("wheel-spin").classList.add("spin-fireball");
                //     setDrink("You won a Phireball !");
                // } else if (rand > 30 && rand <= 55){
                //     document.getElementById("wheel-spin").classList.add("spin-sigma");
                //     setDrink("You won a Sigma Screwdriver !");
                // } else if (rand > 55 && rand <= 85){
                //     document.getElementById("wheel-spin").classList.add("spin-tonic");
                //     setDrink("You won a Theta Tonic !");
                // } else if (rand > 85 && rand < 95){
                //     document.getElementById("wheel-spin").classList.add("spin-sunrise");
                //     setDrink("You won a Tauquila Sunrise !");
                // } else if (rand >= 95){
                //     document.getElementById("wheel-spin").classList.add("spin-mojito");
                //     setDrink("You won a NitesOut Mojito !");
                // }

                setTimeout(()=>{
                    document.getElementById("prize").classList.remove("clear");
                    document.getElementById("prize").classList.add("show");
                }, 3005);

            }, 300);
        }, 305);
    };

    return (
        <>
            <div className='darty-bg fade-in'/>

            {/* invite popup */}
            {invite && (
                <>
                    <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("inv")}} id='blurry-bg-2'/>
                    <div className='popup-container popup-container-enter' id="cool-popup-2">
                        <div className='popup nitesout-card'>
                            <img src={require('../assets/darty/Free Drink.png')} className='popup-title'/>
                            {/* <div className='wheel-spin' id='wheel-spin'>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sigma.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/sunrise.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/mojito.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/tonic.png")}/></div>
                                <div className='item'><img className='item-pic' src={require("../assets/darty/fireball.png")}/></div>
                            </div> */}
                            {/* <RxDoubleArrowUp className='wheel-arrow'/> */}
                            {/* <p className='prize clear' id='prize'>{drink}</p> */}
                            <p>Screenshot and show @ NitesOut bar!</p>
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

            <div className='darty-content'>
                <div className='title fadeInUp'>
                    <img src={require('../assets/darty/Logo.png')} className='darty-logo'/>
                    <p className='darty-location fadeInUp'>COLLEGE PARK, MD</p>
                </div>
                
                <div className='darty-headline fadeInUp'>
                    <p className='org main-org'>NITESOUT</p>
                    <div className='sub-headline'>
                        <p className='org sub-org'>KAPPA ALPHA</p>
                        {/* <p className='org sub-org'>SIGMA NU</p> */}
                        <p className='org sub-org'>THETA CHI</p>
                        {/* <p className='org sub-org'>ATO</p> */}
                    </div>
                </div>

                <div className='darty-info fadeInUp'>
                    <p className='text-1'>
                        COLLEGE PARK'S BIGGEST DARTY • 4615 COLLEGE AVE • SEPT. 16 @ 2PM • IN-HOUSE DJ
                    </p>

                    <hr size="1px" width="80%" color="white"/>  

                    {/* <p className='text-1'>
                        DRINKS MENU • PHIREBALL • THETA TONIC • SIGMA SCREWDRIVER • TAU-QUILA SUNRISE • NITESOUT SPECIALTY MOJITO • NITESOUT PREMIUM SISHA
                    </p> */}
                </div>

                <div className='spin-btn fadeInUp' onClick={()=>{setWaitlist(true)}}>
                    FREE DRINK
                </div>
            
            </div>
        </>
  )
}

export default Darty