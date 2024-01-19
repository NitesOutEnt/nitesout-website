import React from 'react'

import {HiTicket} from 'react-icons/hi'

// CSS -> Events.css

const Event = ({pop, title, thumbnailID, date, location, link}) => {
  return (
    <a href={link} target='_blank'>
        <div className='event-card'>

            <div className='population'>
                <HiTicket/>
                <p className='population-text'>{pop}</p>
            </div>

            <div className='event-thumbnail' id = {thumbnailID}/>

            <div className='event-info'>
                <h2 className='event-title'>{title}</h2>
                <p className='event-date'>{date}</p>
                <p className='event-location'>{location}</p>
            </div>

        </div>
    </a>
  )
}

export default Event