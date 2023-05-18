import React, { useState } from "react";

function CreateArea(props) {

    const [note, changeIT] = useState({
        title : "",
        content : ""
    });

    function handleChange(event) {
        const {name , value} = event.target;
        changeIT(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        })
    }


    function addItem(event) { 
        props.sendArray(note);

        changeIT({
            title:"",
            content:""
        })
        event.preventDefault();
    }



    return (
    <div>
        <form onSubmit={addItem} >
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={note.content}
        />
        <button type="submit">Add</button>
        </form>
    </div>
    );
}

export default CreateArea;
