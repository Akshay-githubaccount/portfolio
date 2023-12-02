import React from 'react'
import "./navBar.css"
import HeartEmoji from'./HeartEmoji.png';

const Navbar = ()=>{
    return(
        <div className='n-wrapper'>
            <div className='n-left'>
            <div className="n-name">AKSHAY RANA</div>
           <img  className="emoji"src={HeartEmoji} alt='hook'></img>
            </div>
            <div className='n-right'>
            <div className='n-list'>
                <ul>
                
<li>HOME</li>
<li>SERVICES</li>
<li>EXPERINCE</li>
<li>PORTFOLIO</li>
                </ul>
                </div>
          <button className='button n-button'>Contact</button>
            </div>
        </div>
    )
}
export default Navbar