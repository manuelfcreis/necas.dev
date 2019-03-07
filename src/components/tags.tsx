import React from 'react';
import '../stylesheets/tags.css';

const Tags = (props) => {
  return (
    <ul className='tags'>
      {props.names.map((tag, index) => {
        console.log(tag)
        return (
          <li key={index} className='tag'>
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

export default Tags
