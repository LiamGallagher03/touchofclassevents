import React from "react";
//imports React to use React.Component

export default class AdminLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
        //makes the default variables null before being filled in
    }
    updateInfo = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (fieldName === 'username') {
            this.setState({ username: fieldValue });
        }
        else if (fieldName === 'password') {
            this.setState({ password: fieldValue });
        }
    };
    //when information is updated, this is called and used to update variables

    login = (e) => {
        let { username, password } = this.state;
        fetch('/adminlogin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.alert("Success! You have logged in as admin.")
                }
                else window.alert("Try again. Your admin username or password is incorrect.")
            })
    }
    //when the login button is clicked, checks if username, password, and isAdmin are correct/true
    render() {
        return (
            <div className="adminLogin">
                <label for="username">Username:</label>
                <input onChange={this.updateInfo} type="text" name="username" value={this.state.username} required /><br /><br />
                <label for="password">Password:</label>
                <input onChange={this.updateInfo} type="password" name="password" value={this.state.password} required /><br /><br />
                <button onClick={this.login}>Login</button>
            </div>
            //html for the admin Login form
        )
    }
}