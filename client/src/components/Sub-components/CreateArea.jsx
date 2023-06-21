import React, { useState } from "react";

//for material ui 
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import CloseIcon from '@mui/icons-material/Close';

// props -> takeNote(function that take created note as parameter)
const CreateArea = (props) => {
  // isExpanded is for -> at the begining show only the context area ,
  // after when the context area is updating show the title area and submit btn
  const [isExpanded, setExpanded] = useState(false)

  //state to store the note content
  const [note, changeIT] = useState({
    title: "",
    content: ""
  });

  // it is called on every update in context or title area , get the value and update the state
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeIT(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  // on click of submit btn ,send the note data
  const handleSubmit = (event) => {
    props.takeNote(note);
    // emptying fields after updating in DB
    changeIT({
      title: "",
      content: ""
    })
    // to prevent refreshing of page when form is submited
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {/* only show when isExpanded is true */}
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        {/* hide submit and clear btn when there is no data in the fields */}
        {note.title === "" && note.content === "" ? <></> : <>
          <Zoom in><Fab className="del" color="primary" aria-label="add" onClick={() => changeIT({
            title: "",
            content: ""
          })}><CloseIcon /></Fab></Zoom><Zoom in>
            <Fab className="add" color="primary" aria-label="add" onClick={handleSubmit}><AddTaskTwoToneIcon /></Fab>
          </Zoom></>}
      </form>
    </div>
  );
}

export default CreateArea;
