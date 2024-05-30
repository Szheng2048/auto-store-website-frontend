import React, { Component } from 'react'
import Axios from "../utils/Axios"
import "./Profile.css"

import {isAlphanumeric,isEmail} from 'validator'

export class Profile extends Component {
    constructor(props){
        super(props);
    }
    state = {
        username:"",
        email:"",
        editEmail:"",
        editUsername:"",
        isLoaded:false,
        canEdit:false,
    }

    async componentDidUpdate(prevProps){
        if(this.props.user && !prevProps.user){
          const user = await Axios.get(`/users/get-user-by-id/${this.props.user.id}`)
          this.setState({
            isLoaded:true,
            username:user.data.payload.username,
            email: user.data.payload.email
          })
        }
    }
    componentDidMount(){
      if(this.props.user){
        this.setState({
          isLoaded:true,
          username:this.props.user.username,
          email:this.props.user.email
        })
      }
    }
    handleOnChange=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
    }
    handleOnSubmit=async(event)=>{
      event.preventDefault()
      try {
        if(isAlphanumeric(username) && isEmail(editEmail)){

        }
      } catch (error) {
        console.log(error)
      }
    }
  render() {
    return (
      <div>
        {this.state.isLoaded?
        (<div className="update-container">
            <h3>Profile</h3>
            {/* <div>
                <p>Username:{this.props.user.username}</p>
                <p>Email:{this.props.user.email}</p>
            </div> */}
            <div>
              {this.state.canEdit?
              (<div>
                <label htmlFor="editUsername">Username: </label>
                <input type="text" name="editUsername" value={this.state.editUsername} onChange={this.handleOnChange}/>
                <label htmlFor="editEmail">Email: </label>
                <input type="text" name="editEmail" value={this.state.editEmail} onChange={this.handleOnChange}/>
              </div>):
              (<div>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
              </div>)
              }
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