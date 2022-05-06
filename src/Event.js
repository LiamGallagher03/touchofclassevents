function Event({id, eventName, day, registree, evants, setEvants}) {
    const increment=()=>{
        fetch('/incrementRegistree', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:id,
                registree:registree+1
            })
        })
    }

    const decrement=()=>{
        fetch('/incrementRegistree', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:id,
                registree:registree-1
            })
        })
    }
    
    return (
        <div>
            <table id= "eventTable">
                <tr>
                    <td id="eventName">{eventName}</td>
                    <td id="eventDay">{day}</td>
                    <td id="eventRegistree">{registree}</td>
                    <td id="registerForEvent">
                        <button onClick={increment}
                        >
                            Register for this event
                        </button>
                    </td>
                    <td id="unregisterFromEvent"><button onClick={decrement}
                        >
                            Unregister from this event
                            </button>
                    </td>
                </tr>
                {/*Takes in Event information to make it a table*/}
            </table>
        </div>
    )
}

export default Event