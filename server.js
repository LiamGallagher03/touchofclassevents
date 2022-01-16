const express = require('express')
const app = new express()
const db = require('better-sqlite3')('SICC.db')

app.use(express.static("build"))
app.use(express.json())

app.get('/events', (req, res) => {
    const query = db.prepare("SELECT * FROM Events")
    const events = query.all()
    res.json({
        events
    })
})

app.get('/users', (req, res) => {
    const query = db.prepare("SELECT * FROM Users")
    const users = query.all()
    res.json({
        users
    })
})

//Register with SICC
app.post('/register', (req, res) => {
    const {username, password, firstname, lastname} = req.body
    const query = db.prepare(`INSERT INTO Users (username, password, firstname, lastname, isAdmin) values (?, ?, ?, ?, ?)`)
    const register = query.run(username,password,firstname,lastname,0)
    res.json ({
        register
    })
})

//Sign up for an event
app.post('/signup', (req, res) => {
    const {username, password, firstname, lastname} = req.body
    const query = db.prepare(`INSERT INTO Users (username, password, firstname, lastname, isAdmin) values (?, ?, ?, ?, ?)`)
    const register = query.run(username,password,firstname,lastname,0)
    res.json ({
        register
    })
})

//Create an event
app.post('/makeEvent', (req, res) => {
    const {eventName, day} = req.body
    const query = db.prepare(`INSERT INTO Events (eventName, day, registree) values (?, ?, ?)`)
    const newEvent = query.run(eventName,day,1)
    res.json ({
        newEvent
    })
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    const query = db.prepare(`SELECT * FROM Users WHERE username=? AND password=?`)
    const login = query.all(username,password)
    let isValid = false;
    if (login.length > 0) {
        isValid = true;
    }
    res.send(isValid);
});

app.post('/adminlogin', (req, res) => {
    const {username, password} = req.body
    const query = db.prepare(`SELECT isAdmin FROM Users WHERE username=? AND password=?`)
    const login = query.all(username,password)
    let isValid = false;
    console.log(login)
    if(login.length > 0) {
        if (login[0].isAdmin == 1) {
            isValid = true;
        }
    }
    res.send(isValid);
});

app.listen(8080, () => {
    console.log("server started")
})