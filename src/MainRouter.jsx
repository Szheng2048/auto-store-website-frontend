import SignUp from "./components/SignUp/SignUp"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import Issues from "./components/Issues/Issues"
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Nav from "./components/Nav/Nav"
import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"



function MainRouter(props) {
    return (
      <Router>
              <Nav
                  user = {props.user}
                  handleUserLogout = {props.handleUserLogout}
                  />
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route exact path="/sign-up" element={<SignUp/>}/>
                <Route exact path="/login" element={props.user ?<Navigate to = "/home"/> :<Login handleUserLogin={props.handleUserLogin}/>}/>
                <Route exact path="/profile" element={<PrivateRoute><Profile user={props.user}/></PrivateRoute>}/>
                <Route exact path="/issues" element={<PrivateRoute><Issues user={props.user} email={props.email}/></PrivateRoute>}/>
            </Routes>
      </Router>
    )
  }
  
  export default MainRouter