import { Component } from 'react'
import "./SignUp.css"
import Axios from "../utils/Axios"
import {toast} from "react-toastify"
import util from "util"
import { NavLink } from 'react-router-dom'
import carLogo from '../../assets/carLogo.jpg'

import {isAlpha, isAlphanumeric, isEmail, isMobilePhone, isStrongPassword} from 'validator'

export class SignUp extends Component {
    
    state={
        submitIsDisabled: true,
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        firstNameError:"",
        lastNameError:"",
        emailError:"",
        usernameError:"",
        phoneNumberError:"",
        passwordError:"",
        confirmPasswordError:"",
        showError: false,
    }
    handleOnChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
            [`${event.target.name}Error`]:""
        },()=>{if(!isAlpha(this.state.firstName)){
            this.setState({
                firstNameError:"Invalid First Name"
            })
        }
        if(!isAlpha(this.state.lastName)){
            this.setState({
                lastNameError:"Invalid Last Name"
            })
        }
        if(!isEmail(this.state.email)){
            this.setState({
                emailError:"Invalid Email"
            })
        }
        if(!isAlphanumeric(this.state.username)){
            this.setState({
                usernameError:"Invalid Username"
            })
        }
        if(!isMobilePhone(this.state.phoneNumber)){
            this.setState({
                phoneNumberError:"Invalid Phone Number"
            })
        }
        if(!isStrongPassword(this.state.password)){
            this.setState({
                passwordError:"Invalid Password"
            })
        }
        if(this.state.password !== this.state.confirmPassword){
            console.log(this.state.confirmPassword,this.state.password)
            this.setState({
                confirmPasswordError:"Passwords do not match, please check your passwords"
            })
        }})
    }
    componentDidUpdate = (prevProps, prevState)=>{
        if(prevState.submitIsDisabled === true){
            if(this.state.firstName.length>0&&this.state.lastName.length>0&&this.state.email.length>0&&this.state.username.length>0&&this.state.password.length>0&&this.state.phoneNumber.length>0&&this.state.confirmPassword.length>0){
                this.setState({
                    submitIsDisabled:false
                })
            } 
        } else {
            if(!this.state.firstName||!this.state.lastName||!this.state.email.length||!this.state.username||!this.state.password||!this.state.phoneNumber||!this.state.confirmPassword){
                this.setState({
                    submitIsDisabled:true
                })
            }
        }
    }
    handleOnSubmit = async (event)=>{
        event.preventDefault()
        if(this.state.firstNameError ||this.state.lastNameError ||this.state.emailError ||this.state.usernameError ||this.state.phoneNumberError ||this.state.passwordError ||this.state.confirmPasswordError){
            console.log("hello")
            this.setState({
                showError:true,
            })
        } else {
        console.log("hello")
        try {
            const user = await Axios.post("/users/sign-up",{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                username:this.state.username,
                phoneNumber:this.state.phoneNumber,
                password:this.state.password,
            })
            if(user){
                console.log(user.data)
                toast(`${user.data.payload} created`)
            }
            this.setState({
                firstName:"",
                lastName:"",
                email:"",
                username:"",
                phoneNumber:"",
                password:"",
                confirmPassword:"",
            })
        } catch (error) {
            console.log(error)
        }}
    }

    render(){
        return (
            <div className='main'>
                <div className="logoUnder">
                    <img src={carLogo} alt="" />
                </div>
                <div className="container">
                    <div className="form-text">Sign Up</div>
                    <div className="form-div">
                        <form className="form" onSubmit={this.handleOnSubmit}>
                            <div className="inline-container">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder='First Name'
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                        {this.state.showError && this.state.firstNameError}
                                    </div>
                            </div>
                            <div className="inline-container">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder='Last Name'
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                    {this.state.showError && this.state.lastNameError}
                                    </div>
                            </div>
                            <div className="inline-container">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder='Email'
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                    {this.state.showError && this.state.emailError}
                                    </div>
                            </div>
                            <div className="inline-container">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='Username'
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                    {this.state.showError && this.state.usernameError}
                                    </div>
                            </div>
                            <div className="inline-container">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    placeholder='(___)-___-____'
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                    {this.state.showError && this.state.phoneNumberError}
                                    </div>
                            </div>
                            <div className="inline-container">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    placeholder='Password'
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                    {this.state.showError && this.state.passwordError}
                                    </div>
                            </div>
                            <div className="inline-container">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="text"
                                    id="confirmPassword"
                                    placeholder='Confirm Password'
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleOnChange} />
                                    <div className="errorMessage">
                                        {this.state.showError && this.state.confirmPasswordError}
                                    </div>
                            </div>
                            <div className='button-container'>
                                <button disabled={this.state.submitIsDisabled} type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        Already Have An Account?
                        <NavLink to="/Login">Log In</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}





export default SignUp