import React, {useState} from 'react'
//imports useState
import Login from '../../Login.js'
//imports Login.js from the src folder
import Registration from '../../Registration.js'
//imports Registration.js from the src folder

function Register(props) {
    const [loggedIn, setLoggedIn] = useState(false)
    //creates variable using useState
    
    return (
        <div>
            <h3>New Here? Register!</h3>
            <Registration />
            {/* Uses Registration component, allows user to actually register*/}
            <h3>Login!</h3>
            <Login tryLogin={setLoggedIn}/>
            {props.receiveLogin(loggedIn)}
            {/* Uses Login component, allows user to actually login*/}
        </div>
    )
}

export default Register
