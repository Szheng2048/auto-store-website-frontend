import React, { Component } from 'react'
import Axios from "../utils/Axios"
import "./Issues.css"
export class Issues extends Component {
    state={
        problemArray:[],
        date:""
    }

    handleDateOnChange =(event)=>{
        this.setState({
            date:event.target.value
        })
        console.log(this.state.date)
    }

    handleCheckBoxChnage = (event)=>{
        const checked = event.target.value
        if(event.target.checked){
            this.setState({
                problemArray:[...this.state.problemArray,checked]
            })
        } else {
            this.setState({
                problemArray:this.state.problemArray.filter(item=>item !== checked)
            })
        }
        console.log(this.state.problemArray)
    }
    handleOnSubmit = async (event)=>{
        event.preventDefault()
        try {
            const newAppointment = await Axios.post("/service/create-new-problem",{user:this.props.user,email:this.props.email,appointment:this.state.date,problems:this.state.problemArray})
            const newAppointmentToCustomer = await Axios.post("/mailjet/send-message",{recipient:newAppointment.data.payload,message:`Thank you for scheduling an appointment with us! Your appointment is on ${this.state.date} and you're seeing us for these following issues ${this.state.problemArray.map(item => {return `${item}, `} )} your appointment is now scheduled`})
            this.setState({
                problemArray:[],
                date:""
            })
        } catch (error) {
            console.log(error)
        }
    }

  render() {
    const problems = [{
        problemId:"1",
        name:"Oil Change"
    },{
        problemId:"2",
        name:"Front and Back Bumper"
    },{
        problemId:"3",
        name:"Radio"
    },{
        problemId:"4",
        name:"Steering Column, Driveshaft"
    },{
        problemId:"5",
        name:"Wheels and Rims"
    },{
        problemId:"6",
        name:"Check Engine Light"
    }]
    return (
      <div>
        <h1 className='appHeader'>Schedule An Appointment</h1>
        <div className='form-div'>
            <form className='problems-form' onSubmit={this.handleOnSubmit}>
                <label htmlFor="date">Pick A Date: </label>
                <input type="date" id="date" min={new Date().toLocaleDateString()}
                value={this.state.date} onChange={this.handleDateOnChange} />
                <fieldset>
                    <legend>Issues</legend>
                    {problems.map((problem)=>{
                        return(<label key={problem.problemId}>
                            <input type="checkbox" value={problem.name} onClick={this.handleCheckBoxChnage} />
                            {problem.name}
                        </label>)
                    })}
                </fieldset>
                <input type="submit" />
            </form>
        </div>
      </div>
    )
  }
}

export default Issues