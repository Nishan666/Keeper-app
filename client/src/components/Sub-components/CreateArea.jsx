import React, { useState } from "react";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import Fab from "@mui/material/Fab";

import Zoom from "@mui/material/Zoom";
import CloseIcon from '@mui/icons-material/Close';




function CreateArea(props) {

    const [isExpanded,setExpanded] = useState(false)

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

    function expand() {
        setExpanded(true);
    }



    return (
      <div>
        <form className="create-note">

          {isExpanded && <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />}

          <textarea
          onClick={expand}
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            value={note.content}
          />
          {note.title === "" && note.content === "" ? <></> : <>
            <Zoom in><Fab className="del" color="primary" aria-label="add" onClick={() => changeIT({
              title: "",
              content: ""
            })}><CloseIcon /></Fab></Zoom><Zoom in>
              <Fab className="add" color="primary" aria-label="add" onClick={addItem}><AddTaskTwoToneIcon /></Fab>
            </Zoom></>}

        </form>
      </div>
    );
}

export default CreateArea;
