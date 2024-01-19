import React from 'react'
import '../css/Alert.css'
import {FiAlertCircle} from 'react-icons/fi'

const Alert = ({id, text}) => {
  return (
    <div className='alert' id={id}>
        <FiAlertCircle className='alert-icon'/><span className='alert-text'>{text}</span>
    </div>
  )
}

export default Alert