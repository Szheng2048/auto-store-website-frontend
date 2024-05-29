import React, { Component } from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Nav.css"

export class Nav extends Component {
  render() {
    return (
      <nav className='Navbar'>
        <div className="h1-logo">
            <h1>
                <Link to="/home">Garzonio's Garage</Link>
            </h1>
        </div>
        <div className="right-side-nav">
            <ul>{
                this.props.user ?
                <li>
                    <NavLink to="/profile"
                        >

                        {this.props.user.username}
                    </NavLink>
                </li>:
                <li>
                    <NavLink to="/sign-up">
                        Create Account
                    </NavLink>
                </li>
                }
                {
                this.props.user ?
                <li>
                    <NavLink to="/home" onClick = {this.props.handleUserLogout}>
                        Logout
                    </NavLink>
                </li>
                :
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>
                }
                {
                    this.props.user ?
                    <li>
                        <NavLink to="/issues">
                            Schedule An Appointment
                        </NavLink>
                    </li>
                    :
                    <li>
                        <NavLink to="/login">
                            Schedule An Appointment
                        </NavLink>
                    </li>
                }
            </ul>
        </div>
      </nav>
    )
  }
}

export default Nav