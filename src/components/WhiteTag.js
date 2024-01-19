import React from 'react'

import '../css/WhiteTag.css'

const WhiteTag = ({id, icon, text}) => {
  return (
    <div className='tag ' id={id}>
        {icon} <p className='tag-text'>{text}</p>
    </div>
  )
}

export default WhiteTag