import React from 'react'

import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

// CSS -> Team.css

const Member = ({picture, name, role, major, ig, li, git, id}) => {
  return (
    <div className='member-card-container' id={id}>
        {picture}
        <h1 className='member-name'>{name}</h1>
        <p className='member-role'>{role}</p>
        <p className='member-major'>{major}</p>
        <div className='member-socials'>
            <a target="_blank" href={ig}><FaInstagram/></a>

            {li != "false" && (
                <a target="_blank" href={li}><FaLinkedin/></a>
            )}
            {git != "false" && (
                <a target="_blank" href={git}><FaGithub/></a>
            )}
        </div>
    </div>
  )
}

export default Member