import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import { MdLock } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";


import '../css/Gallery.css'


const Gallery = () => {


   const [activeGal, setActiveGal] = useState(2);


   useEffect(() => {
       window.scrollTo(0, 0)
   }, [])


   function handleActiveGal(galNum){


       window.scrollTo(0, 0);


       document.getElementById('gal-load').classList.remove('load-gal');
       void document.getElementById('gal-load').offsetWidth;
       document.getElementById('gal-load').classList.add('load-gal');


       if(galNum === 2){
           setActiveGal(2);
           document.getElementById('gal-nav-spring').classList.remove('visible');
           document.getElementById('gal-nav-litesout').classList.remove('visible');
           document.getElementById('gal-nav-dhoom').classList.remove('visible');
           document.getElementById('gal-nav-nashedi').classList.add('visible');
       }
       else if(galNum === 3){
           setActiveGal(3);
           document.getElementById('gal-nav-nashedi').classList.remove('visible');
           document.getElementById('gal-nav-litesout').classList.remove('visible');
           document.getElementById('gal-nav-dhoom').classList.remove('visible');
           document.getElementById('gal-nav-spring').classList.add('visible');
       }
       else if(galNum === 4){
           setActiveGal(4);
           document.getElementById('gal-nav-nashedi').classList.remove('visible');
           document.getElementById('gal-nav-spring').classList.remove('visible');
           document.getElementById('gal-nav-dhoom').classList.remove('visible');
           document.getElementById('gal-nav-litesout').classList.add('visible');
       }
       else if(galNum === 5){
           setActiveGal(5);
           document.getElementById('gal-nav-nashedi').classList.remove('visible');
           document.getElementById('gal-nav-spring').classList.remove('visible');
           document.getElementById('gal-nav-litesout').classList.remove('visible');
           document.getElementById('gal-nav-dhoom').classList.add('visible');
       }
   }


   return (
       <>
           <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
           <div className='bg-2 fade-in' id = 'background-2'/>
      
           <Navbar/>


           {/* .loading-bar & .load -> Navbar.css */}
           <div className='loading-bar load-gal' id='gal-load'/>


           <div className='gal-nav-center'>
               <div className='gal-nav'>
                   <div onClick={()=>{handleActiveGal(2)}}className='gal-nav-btn visible' id='gal-nav-nashedi'/>
                   <div onClick={()=>{handleActiveGal(4)}}className='gal-nav-btn' id='gal-nav-litesout'/>
                   <div onClick={()=>{handleActiveGal(3)}}className='gal-nav-btn' id='gal-nav-spring'/>
                   <div onClick={()=>{handleActiveGal(5)}}className='gal-nav-btn' id='gal-nav-dhoom'/>
               </div>
           </div>


           <div className='gallery-container'>
               {activeGal === 2 && (
                   <>
                       {/* <div className='unlock-container'>
                           <AiOutlineArrowUp className="uparrow-icon"/>
                           <MdLock className="lock-icon"/>
                           <p>Join Our Waitlist to Unlock Nashe Di Night Photos</p>
                       </div> */}
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/nn3.jpg')} className='gal-item' id="gal-1-4"/>
                           <img src={require('../assets/gallery/nn2.jpg')} className='gal-item' id="gal-2-4"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/nn1.jpg')} className='gal-item' id="gal-3-4"/>
                           <img src={require('../assets/gallery/nn4.jpg')} className='gal-item' id="gal-4-4"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/nn5.jpg')} className='gal-item' id="gal-5-4"/>
                           <img src={require('../assets/gallery/nn6.jpg')} className='gal-item' id="gal-6-4"/>
                       </div>
                   </>
               )}
               {activeGal === 4 && (
                   <>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/lo3.jpg')} className='gal-item' id="gal-1-4"/>
                           <img src={require('../assets/gallery/lo2.jpg')} className='gal-item' id="gal-2-4"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/lo1.jpg')} className='gal-item' id="gal-3-4"/>
                           <img src={require('../assets/gallery/lo4.jpg')} className='gal-item' id="gal-4-4"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/lo5.jpg')} className='gal-item' id="gal-5-4"/>
                           <img src={require('../assets/gallery/lo6.jpg')} className='gal-item' id="gal-6-4"/>
                       </div>
                   </>
               )}
               {activeGal === 3 && (
                   <>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/ss1.jpg')} className='gal-item' id="gal-1-3"/>
                           <img src={require('../assets/gallery/ss2.jpg')} className='gal-item' id="gal-2-3"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/ss3.jpg')} className='gal-item' id="gal-3-3"/>
                           <img src={require('../assets/gallery/ss4.jpg')} className='gal-item' id="gal-4-3"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/ss5.jpg')} className='gal-item' id="gal-5-3"/>
                           <img src={require('../assets/gallery/ss6.jpg')} className='gal-item' id="gal-6-3"/>
                       </div>
                   </>
               )}
               {activeGal === 5 && (
                   <>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/dhoom-machale/dm1.jpg')} className='gal-item' id="gal-1-5"/>
                           <img src={require('../assets/gallery/dhoom-machale/dm2.jpg')} className='gal-item' id="gal-2-5"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/dhoom-machale/dm3.jpg')} className='gal-item' id="gal-3-5"/>
                           <img src={require('../assets/gallery/dhoom-machale/dm4.jpg')} className='gal-item' id="gal-4-5"/>
                       </div>
                       <div className='gal-row'>
                           <img src={require('../assets/gallery/dhoom-machale/dm5.jpg')} className='gal-item' id="gal-5-5"/>                       </div>
                   </>
               )}
           <Footer/>
           </div>
       </>
   )
}
export default Gallery