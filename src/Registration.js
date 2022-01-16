import React from 'react';

export default class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            fname:'',
            lname:'',
        };
        //sets default information as null, will be updated when user types information
    }
    updateInfo = (event) =>{
            let fieldName = event.target.name;
            let fieldValue = event.target.value;
            if(fieldName === 'username') {
                this.setState({username:fieldValue});
            }
            else if(fieldName === 'password'){
                this.setState({password:fieldValue});
            }
            else if(fieldName === 'fname'){
                this.setState({fname:fieldValue});
            }
            else if(fieldName === 'lname'){
                this.setState({lname:fieldValue});
            }
            //sets field values/variables when user inputs information
    };
    register=(e)=>{
        let {username,password,fname,lname}=this.state;
        fetch('/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:username,
                password:password,
                firstname:fname,
                lastname:lname,
            })
        })
        //fetches register
        .then(response=>response.json())
        .then(data=>{
            window.alert("Successful registration!")
        })
    }
    render(){
        return(
            <div className="register">
                <label for="username">Username:</label>
                <input onChange={this.updateInfo} type="text" name="username" value={this.state.username} required/><br /><br />
                <label for="password">Password:</label>
                <input onChange={this.updateInfo} type="password" name="password" value={this.state.password} required/><br /><br />
                <label for="fname">First Name:</label>
                <input onChange={this.updateInfo} type="text" name="fname" value={this.state.fname} required/><br /><br />
                <label for="lname">Last Name:</label>
                <input onChange={this.updateInfo} type="text" name="lname" value={this.state.lname} required/><br /><br />
                <button onClick={this.register}>Register</button>
            </div>
        )
        //HTML for the Registration
    }
}