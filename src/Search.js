import React from 'react'

function Search({searchQuery, setSearchQuery}) {
    return (
        <div>
            <br></br>
            <form
                action = "/"
                method = "get"
                autoComplete = "off"
            >
                <div>
                    <input 
                        placeholder = "Search Event" value = {searchQuery} onInput = {e => setSearchQuery(e.target.value)} type = "text" id ="search">
                    </input>
                </div>
            <br></br>
            </form>
        </div>
    )
    //when user types information to find things in Diagram.js, things will be located
}

export default Search
