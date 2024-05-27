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
          <div>CONTACT US</div>
          <div><a href="ttps://www.google.com/search?q=24+north+tiption+str+munford+tn&sca_esv=274f1da98f794c68&sxsrf=ADLYWIJkxNCprXitY5Ds03Avc74ImeEKCw%3A1716649703769&ei=5_5RZo_SLti-p84P0tujwAw&ved=0ahUKEwjP4a--iqmGAxVY38kDHdLtCMgQ4dUDCBA&uact=5&oq=24+north+tiption+str+munford+tn&gs_lp=Egxnd3Mtd2l6LXNlcnAiHzI0IG5vcnRoIHRpcHRpb24gc3RyIG11bmZvcmQgdG4yBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGAoYqwJI-CxQswVYjypwA3gAkAEAmAGUAqABkxKqAQUwLjkuNLgBA8gBAPgBAZgCEKAC0RLCAgsQABiwAxiiBBiJBcICCxAAGIAEGLADGKIEwgIFECEYnwXCAgUQIRirApgDAOIDBRIBMSBAiAYBkAYEkgcFMy45LjSgB-F8&sclient=gws-wiz-serp">HOW TO GET TO US</a></div>
          <div>WESTERN TENNESSEE</div>
        </div>
        <div className='splitScreen'>
          <div className='sideNavBar'>
            <div className="navElement">
              <h2>Location</h2>
              <p>243 N Tipton St. Covington, Tennessee</p>
            </div>
            <div className='divider'></div>
            <div className="navElement">
              <p><a href="tel:+9012479086">(901)-247-9086</a> | <a href="https://www.google.com/search?q=24+north+tiption+str+munford+tn&sca_esv=274f1da98f794c68&sxsrf=ADLYWIJkxNCprXitY5Ds03Avc74ImeEKCw%3A1716649703769&ei=5_5RZo_SLti-p84P0tujwAw&ved=0ahUKEwjP4a--iqmGAxVY38kDHdLtCMgQ4dUDCBA&uact=5&oq=24+north+tiption+str+munford+tn&gs_lp=Egxnd3Mtd2l6LXNlcnAiHzI0IG5vcnRoIHRpcHRpb24gc3RyIG11bmZvcmQgdG4yBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGAoYqwJI-CxQswVYjypwA3gAkAEAmAGUAqABkxKqAQUwLjkuNLgBA8gBAPgBAZgCEKAC0RLCAgsQABiwAxiiBBiJBcICCxAAGIAEGLADGKIEwgIFECEYnwXCAgUQIRirApgDAOIDBRIBMSBAiAYBkAYEkgcFMy45LjSgB-F8&sclient=gws-wiz-serp" target="_blank">Get Directions</a></p>
            </div>
            <div className="divider"></div>
            <div className="navElement">
              <h2>Owner</h2>
              <p>Daniel Garzonio | Email Me</p>
            </div>
            <div className='divider'></div>
            <div className="navElement">
              <h2>Hours of Operation</h2>
              <p>Mon - Fri: 7:00am - 6:00pm</p>
              <div className="divider"></div>
            </div>
          </div>
          <div className="splitScreenRightSide">
            <div className='description'>
              <h1>Repair service located locally at Dyersburg, TN</h1>
              <h2>Full-Service shop offering anything you might need including Oil Changes, Brakes, Alignments, Starters, Alternators, Shocks, Struts and Tire Services</h2>
              <p>Garzonio's Garage is the best place for your automotive services. We provide timely and affordable services. When problems arise from check engine lights or some weird sounds, please come out to see us.</p>
              <div className='videos'>
                <div id="videoOne" className='videoContainer'>
                  <div className='videoDescription'>How To Change Your Oil</div>
                  <ReactPlayer
                    className="video"
                    url="https://www.youtube.com/watch?v=O1hF25Cowv8"/>
                </div>
                <div id="videoTwo" className='videoContainer'>
                  <div className='videoDescription'>Changing a Flat Tire</div>
                  <ReactPlayer 
                    className="video"
                    url="https://www.youtube.com/watch?v=Bq5To-ZH160"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home