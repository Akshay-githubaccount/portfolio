import React from 'react'
import './card.css'

const Card = ({heading,title,detail}) => {
  return (
    <div className='card'>
        {/* <img src={emoji}alt='design'></img> */}
        <span>{heading}</span>
        <span>{title}</span>
        <span>{detail}</span>
        <a href='https://github.com/Akshay-githubaccount/Akshay-rana'>
      <button className='c-button'>READMORE</button>
      </a>
    </div>
  )
}
export default Card
