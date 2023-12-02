import React from 'react'
import'./footer.css'
import Github from'../../img/github.png';
import Instagram from'../../img/instagram.png';
import Linkedin from'../../img/linkedin.png';

const footer = () => {
  return (
    <div className='footer'>
        <hr/>
      <span className="text-body-secondary">© 2023 Creation Year of The Portfolio</span>
      <a href='https://github.com/Akshay-githubaccount/Akshay-rana'>
    <img className="photo" src={Github} width23 alt="Github"></img></a>
    <a href='https://instagram.com/akshayrana690?'>
    <img className="photo" src={Instagram} width23 alt="Instagram"></img></a>
    <a href='https://www.linkedin.com/in/akshay-rana-94560725a?'>
    <img className="photo" src={Linkedin} width23 alt="Linkedin"></img></a>
  
 </div>
  )
}

export default footer
