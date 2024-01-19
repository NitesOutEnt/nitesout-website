import {React, useEffect, useState} from 'react'
import Member from '../components/Member';

import Footer from '../components/Footer';

import '../css/Footer.css'
import '../css/Team.css'
import '../css/Navbar.css'
import Navbar from '../components/Navbar';

const Team = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [wlActive, setWlActive] = useState(false);

  return (
    <>
        <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
        <div className='bg-2 fade-in' id = 'background-2'/>
        
        <Navbar/>
        {/* .loading-bar & .load -> Navbar.css */}
        <div className='loading-bar load-fast'/> 

        <div className='events-page-container'>

            <h1 className='events-page-title' id='team-page-title'>Meet the Team</h1>
            <p className='alt-subtitle'>We are a company with diverse backgrounds and focuses- we've come together to revolutionize the experience of night life.</p>

            
            <div className='team-members'>
                <Member
                    picture={<img src={require('../assets/headshots/nimay.png')}/>}
                    name='Nimay Vyas'
                    role='Founder, CEO'
                    major="Computer Science"
                    ig="https://www.instagram.com/nimay01/"
                    li="https://www.linkedin.com/in/nimayv/"
                    git="https://github.com/NimayVyas"
                    id="nimay"
                />
                
                <Member
                    picture={<img src={require('../assets/headshots/rohan.png')}/>}
                    name='Rohan Bhatt'
                    role='Co-Founder, CFO'
                    major="Computer Science"
                    ig="https://www.instagram.com/rohannbhatt/"
                    li="https://www.linkedin.com/in/rohanbhattcs/"
                    git="https://github.com/rohancodescs"
                    id="rohan"
                />
                
                <Member
                    picture={<img src={require('../assets/headshots/jaden.png')}/>}
                    name='Jaden Leonard'
                    role='Co-Founder, Creative Director'
                    major="Computer Science"
                    ig="https://www.instagram.com/leonardjadenn/"
                    li="https://www.linkedin.com/in/leonardjaden/"
                    git="https://github.com/jadenl1"
                    id="jaden"
                />
            </div>
            {/* <div className='team-members'>
                <Member
                    picture={<img src={require('../assets/headshots/akhila.png')}/>}
                    name='Akhila Konuru' role='Public Relations, Media'
                    major="Public Policy"
                    ig="https://www.instagram.com/akhilakonuru/"
                    li="https://www.linkedin.com/in/akhila-konuru-62b9181b5/"
                    git="false"
                    id="nimay"
                />
                
                <Member
                    picture={<img src={require('../assets/headshots/pray.png')}/>}
                    name='Pratham Patel'
                    role='Financial Advisor'
                    major='Business'
                    ig="https://www.instagram.com/theprayp/"
                    li="false"
                    git="false"
                    id="rohan"
                />
                
                <Member
                    picture={<img src={require('../assets/headshots/esha.png')}/>}
                    name='Esha Verma'
                    role='Public Relations'
                    major="Business & Technology Analyst"
                    ig="https://www.instagram.com/eshav.official/"
                    li="https://www.linkedin.com/in/eshaverma1998/"
                    git="false"
                    id="jaden"
                />
            </div> */}
        </div>

        <Footer/>

    </>
  )
}

export default Team