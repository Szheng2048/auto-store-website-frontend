import React, { Component } from 'react'
import "./Login.css"
import Axios from "../utils/Axios"
import {jwtDecode} from "jwt-decode"
import {toast} from "react-toastify"
import carLogo from "../../assets/carLogo.jpg"
import { NavLink } from 'react-router-dom'

export class Login extends Component {
    state={
        loginDetail:"",
        password:""
    }

    handleOnChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleOnSubmit = async (event)=>{
        event.preventDefault()
        try {
            console.log("hello")
            
            const response = await Axios.post("/users/sign-in",{
                user:this.state.loginDetail,
                password:this.state.password
            })
            console.log(response)
            const obj = jwtDecode(response.data.payload)
            toast.success(`Hello, ${obj.username}`)
            window.localStorage.setItem("jwt",response.data.payload)
            this.props.handleUserLogin(obj)
        } catch (error) {
            toast.error(error.response.data.payload)
        }
    }
  render() {
    return (
      <div className="container">
        {/* <div className="mainFrame">
            <img src={carLogo} alt="" />
        </div> */}
        <div className="form-text">Login</div>
        <div className="form-div">
            <form className='form' onSubmit={this.handleOnSubmit}>
                <div className="form-group-block">
                    <div className="block-container">
                        <label htmlFor="email">Email or Username</label>
                        <input 
                        type="text"
                        id="loginDetail"
                        placeholder='Email or Username'
                        name="loginDetail"
                        value={this.state.loginDetail}
                        onChange={this.handleOnChange} />
                    </div>
                </div>
                <div className="form-group-block">
                    <div className="block-container">
                        <label htmlFor="password">Password</label>
                        <input type="text" 
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleOnChange}/>
                    </div>
                </div>
                <div className="form-group-block">
                    <div className="block-container">
                        <div className="button-container">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className='redirect'> 
                    Need to Create An Account? <NavLink to="/Sign-Up">Sign Up</NavLink>
                </div>
            </form>
        </div>
      </div>
    )
  }
}

export default Login