import React from 'react'
import './Intro.css'
import Github from'../../img/github.png';
import Instagram from'../../img/instagram.png';
import Linkedin from'../../img/linkedin.png';
import boy from'../../img/aks.png.png';
import FloatingDiv from '../FloatingDIv/FloatingDiv';
import crown from '../../img/crown.png';


const Intro = () => {
  return (
    <div className="intro">
    <div className="i-left">
    <div className="i-name">
        <span>Hy! I am </span>
        <span>Akshay Rana </span>
        <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work </span>
    </div>
    <button className="button i-button">Hire me</button>
<div className='i-icons'>
    <a href='https://github.com/Akshay-githubaccount/Akshay-rana'>
    <img class="pic" src={Github} width23 alt="Github"></img></a>
    
    <a href='https://instagram.com/akshayrana690?'>
    <img class="pic" src={Instagram} alt="instagram"></img></a>

    <a href="https://www.linkedin.com/in/akshay-rana-94560725a?"><img class="pic" src={Linkedin} alt="Instagram"></img>
    </a>
    </div>
    </div>
    <div className="i-right">
<img className="boy" src={boy} alt='pic' width={400}></img>

<div>
  <FloatingDiv image ={crown} txt1='Web' txt2='Developer'>
  </FloatingDiv>
</div>
<div className='blur' style={{background:"rgb(238 210 255)"}}></div>
  <div className="blur" style={{
    background:'#C1F5FF',
    top:'17rem',
    width:'21rem',
    height:'11rem',
    left:'-9rem'
  }}>
  </div>
    </div>
    </div>
  )
}

export default Intro
