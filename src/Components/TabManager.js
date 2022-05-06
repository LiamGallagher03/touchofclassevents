import React, { useState } from "react";
//imports useState
import Home from "./Tabs/Home";
//imports Home.js from the Tabs folder
import Register from "./Tabs/Register";
//imports Register.js from the Tabs folder
import Diagram from "./Tabs/Diagram";
//imports Diagram.js from the Tabs folder
import Contact from "./Tabs/Contact";
//imports Contact.js from the Tabs folder
import About from "./Tabs/About";
//imports About.js from the Tabs folder
import Admin from "./Tabs/Admin";
//imports Admin.js from the Admin folder

function TabManager() {
    const [activeTab, setActiveTab] = useState(<Home />);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //creates variables using useState, makes home default and isLoggedIn is false

    const receiveLogin = (receivedLoggedIn) => {
        console.log("value received from Register.js", receivedLoggedIn)
        setIsLoggedIn(receivedLoggedIn)
    }
    //when logged in, sets LoggedIn as true

    const handleHome = () => {
        setActiveTab(<Home />)
    }
    const handleRegister = () => {
        setActiveTab(<Register receiveLogin={receiveLogin} />)
    }
    const handleDiagram = () => {
        setActiveTab(<Diagram />)
    }
    const handleContact = () => {
        setActiveTab(<Contact />)
    }
    const handleAbout = () => {
        setActiveTab(<About />)
    }
    const handleAdmin = () => {
        setActiveTab(<Admin />)
    }
    //are used when something is clicked

    if (isLoggedIn) {
        return (
            <div>
                <header>
                    <ul>
                        <li><a href="#event" onClick={handleDiagram}>Events</a></li>
                        <li><a href="#home" onClick={handleHome}>Home</a></li>
                        <li><a href="#register" onClick={handleRegister}>Login/Register</a></li>
                        <li><a href="#contact" onClick={handleContact}>Contact Us</a></li>
                        <li><a href="#about" onClick={handleAbout}>About Us</a></li>
                        <li><a href="#adminlogin" onClick={handleAdmin}>Admin Login</a></li>
                    </ul>
                </header>
                <body>
                    {activeTab}
                </body>
            </div>
        )
    }

    return (
        <div>
            <header>
                <ul>
                    <li><a href="home" onClick={handleHome}>Home</a></li>
                    <li><a href="#register" onClick={handleRegister}>Login/Register</a></li>
                    <li><a href="#contact" onClick={handleContact}>Contact Us</a></li>
                    <li><a href="#about" onClick={handleAbout}>About Us</a></li>
                    <li><a href="#adminlogin" onClick={handleAdmin}>Admin Login</a></li>
                </ul>
            </header>
            <body>
                {activeTab}
            </body>
        </div>
    )
    //gives user access to certain tabs if loggedIn
}
export default TabManager
