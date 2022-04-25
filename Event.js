function Event({id, eventName, day, registree}) {
    return (
        <div>
            <table id= "eventsTable">
               <tr>
                   <td id="eventName">{eventName}</td>
                   <td id="eventDay">{day}</td>
                   <td id="eventRegistree">{registree}</td>
               </tr>
               {/*Takes in Event information to make it a table*/}
            </table>
        </div>
    )
}

export default Event