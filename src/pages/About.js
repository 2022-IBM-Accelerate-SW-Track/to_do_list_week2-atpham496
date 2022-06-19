import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";  

export default class About extends Component {
  render() {
    return (
      <div>
        
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src= {profile_pic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Anh Thu Pham</div>
        <div className="brief_description">
          <p>Hi there, my name is Anh Thu Pham. I'm an undergraduate software engineering major from San Jose State University. I am also working on a Chinese minor as well.</p>

          <p>My interests are in cybersecurity, programming, and using my creativity to build cool applications.</p> 

          <p>Outside of coursework, my hobbies include listening to K-pop, gaming, and learning new foreign languages.</p>

          <p>I can speak Vietnamese, English, and an intermediate level of Mandarin.</p>   
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}