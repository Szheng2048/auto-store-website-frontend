import React, { Component } from 'react'
import "./Home.css"
import ReactPlayer from 'react-player'
import carLogo from "../../assets/carLogo.jpg"

export class Home extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <div className="mainFrame">
          <img src={carLogo} alt="" />
        </div>
        <div className='mainImg'>
          Garzonio's Workshop
        </div>
        <div className='navigation'>
          <div>SERVICE</div>
          <div>HOW TO GET TO US</div>
          <div>WESTERN TENNESSEE</div>

        </div>
        <div>
          <div className='sideNavBar'>

          </div>
          <div className='description'>
            <h1>Repair service located locally at Dyersburg, TN</h1>
            <h2>Full-Service shop offering anything you might need including Oil Changes, Brakes, Alignments, Starters, Alternators, Shocks, Struts and Tire Services</h2>
            <p>Garzonio's Garage is the best place for your automotive services. We provide timely and affordable services. When problems arise from check engine lights or some weird sounds, please come out to see us.</p>
            <div className='videos'>
              <div id="videoOne" className='video'><ReactPlayer url=""/></div>
              <div className='videoDescription'></div>
              <div id="videoTwo" className='video'><ReactPlayer url=""/></div>
              <div className='videoDescription'></div>
              <div id="videoThree" className='video'><ReactPlayer url=""/></div>
              <div className='videoDescription'></div>
              <div id="videoFour" className='video'><ReactPlayer url=""/></div>
              <div className='videoDescription'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home