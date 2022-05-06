import React, {useState, useEffect} from 'react'
//imports useState & useEffect
import Event from '../../Event';
//imports Event.js from the src folder
import Search from '../../Search';
//imports Search.js from the src folder
import NewEvent from '../../NewEvent';
//imports NewEvent.js from the src folder

//If you see evants, do not worry. Evant(s) is our way of spelling event(s).
function Diagram() {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');

    const [evants, setEvants] = useState([{ id: 0, eventName: 'Chris Mas', day: '12/25/2022', registree: '1' }])
    //creates fake data in order to use the database; briefly seen

    useEffect(() => {
        fetch('/events')
            .then(data => data.json())
            .then(data => {
                setEvants(data.events)
            })
    }, [])
    //replaces the fake data with the real data

    const filterEvants = (evants, query) => {
        if (!query) { return evants }

        return evants.filter((evant) => {
            const eventName = evant.eventName.toLowerCase()
            return eventName.includes(query.toLowerCase())
        })
    }
    //filters out the events

    const [searchQuery, setSearchQuery] = useState(query || '')
    const filteredevents = filterEvants(evants, searchQuery)
    //creates variables that uses methods from above and will be used in return()
    
    return (
        <div>
            <Search 
                searchQuery = {searchQuery}
                setSearchQuery = {setSearchQuery}
            />
            {/* uses the component function and passes two variables*/}

            <table id = "eventTable">
                <tr>
                    <th id="eventName">Event Name</th>
                    <th id="eventDay">Day</th>
                    <th id="eventRegistree">Registrees</th>
                    <th id="registerForEvent">Register</th>
                    <th id="unregisterFromEvent">Unregister</th>
                </tr>
                {/*Creates header*/}
                    {filteredevents.map((evant) =>
                        <Event
                            id = {evant.id}
                            eventName = {evant.eventName}
                            day = {evant.day}
                            registree = {evant.registree}
                            evants={evants}
                            setEvants = {setEvants}
                        />)}
                {/*Filters the events and uses the Event component to create table cells*/}
            </table>
            <NewEvent setEvants = {setEvants}/>
            {/*uses the NewEvent component*/}
        </div>
    )
}

export default Diagram