import React from 'react';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
        };
        //default information is null
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
            //updates variables when user updates the information
    };
    login=(e)=>{
        let {username,password}=this.state;
        fetch('/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:username,
                password:password,
            })
        })
        //fetches login from server.js
        .then(response=>response.json())
        .then(data=>{
            if(data) {
                window.alert("You have successfully logged in. You can now access the events tab to join or create an event.")
                this.handleLogin(data)
            }
            else window.alert("Try Again. Either your username or password is incorrect.")
        })
        //shoots the user a message saying if their login was successful or not
    }
    handleLogin = (isLoggedIn) => {
        this.props.tryLogin(isLoggedIn);
    }
    render(){
        return(
            <div className="login">
                <label for="username">Username:</label>
                <input onChange={this.updateInfo} type="text" name="username" value={this.state.username} required/><br /><br />
                <label for="password">Password:</label>
                <input onChange={this.updateInfo} type="password" name="password" value={this.state.password} required/><br /><br />
                <button onClick={this.login}>Login</button>
            </div>
        )
        //HTML for the form
    }
}
