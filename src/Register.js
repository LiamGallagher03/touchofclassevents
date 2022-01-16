import React from 'react'

function Register() {
    const username = "", password = "", passwordConfirm = "", firstName = "", lastName = "", isAdmin = false


    return (
        <div>
            <label>Username: </label>
            <input type="text" name="username" size="15"/> <br></br>
            <label>Password: </label>
            <input type="text" name="password" size="15"/> <br></br>
            <label>Re-Enter Password:</label>
            <input type="text" name="passwordConfirm," size="15"/> <br></br>
            <label>First Name:</label>
            <input type="text" name="firstName," size="15"/> <br></br>
            <label>Last Name:</label>
            <input type="text" name="lastName," size="15"/> <br></br>
            <input type="button" value="Submit"/>
        </div>
        //HTMl for the form
    )
}

export default Register
