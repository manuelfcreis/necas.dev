import React from 'react';
import '../stylesheets/experience.css'

const Experience = (props) => {
  return (
    <div className='experience'>
      <div className='dates'>{props.dates}</div>
      <div className='body'>{props.children}</div>
    </div>
  )
}

export default Experience
