import React, { Component } from 'react'
import Axios from "../utils/Axios"
import "./Profile.css"

export class Profile extends Component {
    constructor(props){
        super(props);
    }
    state = {
        firstName:'',
        lastName:"",
        username:"",
        email:"",
        isLoaded:false
    }

    // componentDidUpdate(prevProps){
    //     console.log(prevProps,this.props)
    //     if(this.props && this.props.user.username !== prevProps.username){
    //         this.setState({
    //             isLoaded:true
    //         })
    //     } else {
    //     }
    // }


  render() {
    return (
      <div>
        {console.log(this.props.user)}
        {this.state.isLoaded?
        (<div className="update-container">
            <h3>Profile</h3>
            <div>
                {/* <p>First Name:{this.props.user.firstName}</p>
                <p>Last Name:{this.props.user.lastName}</p> */}
                <p>Username:{this.props.user.username}</p>
                <p>Email:{this.props.user.email}</p>
            </div>
        </div>):
        (<div>
            <div className="loader"></div>
        </div>)}
      </div>
    )
  }
}

export default Profile