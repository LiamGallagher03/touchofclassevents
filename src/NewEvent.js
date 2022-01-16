import React from 'react';

export default class NewEvent extends React.Component {
    constructor(){
        super();
        this.state = {
            eventName:'',
            day:'',
        };
        //sets default information to null
    }
    updateInfo = (event) =>{
            let fieldName = event.target.name;
            let fieldValue = event.target.value;
            if(fieldName === 'eventName') {
                this.setState({eventName:fieldValue});
            }
            else if(fieldName === 'date'){
                this.setState({day:fieldValue});
            }
            //updates information whenever user inputs information
    };
    makeEvent=(e)=>{
        let {eventName, day}=this.state;
        fetch('/makeEvent', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                eventName:eventName,
                day:day
            })
        })
        //fetchs makeEvent from the server.js file
        .then(response=>response.json())
        .then(data=>{
            window.alert("You have successfully made your desired event.")
        })
        //if the user makes an evenet this will send through
    }
    render(){
        return(
            <div className="makeEvent">
                <label for="eventName">Your Event's Name:</label>
                <input onChange={this.updateInfo} type="text" name="eventName" value={this.state.eventName} required/><br /><br />
                <label for="date">Your Event's Date:</label>
                <input onChange={this.updateInfo} type="date" name="date" value={this.state.password} required/><br /><br />
                <button onClick={this.makeEvent}>Create This Event</button>
            </div>
            //html for the NewEvent
        )
    }
}