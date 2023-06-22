import React, { useEffect, useState } from "react";

//for material ui 
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import CloseIcon from '@mui/icons-material/Close';

// props -> 
// updateData (data to be updated) 
// takeNote(function that take updated note as parameter)
// changeIsUpdate (change update staus to false after updating)
// secondTimeUpdate (refresh update area on different update)(update note is called when already 1 update exists)
const UpdateArea = (props) => {
    //state to store the note content 
    const [note, changeIT] = useState({
        title: "",
        content: "",
        _id: ""
    });

    // exec when there is change in state of props.s2ndTimeUpdate
    useEffect(() => {
        // updating the fields with data to be updated
        changeIT({
            title: props.updateData.title,
            content: props.updateData.content,
            _id: props.updateData._id
        });
    }, [props.secondTimeUpdate])


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
    const handleSubmit = async (event) => {
        console.log(note);
        await props.takeNote(note);
        // emptying fields after updating in DB
        changeIT({
            title: "",
            content: "",
            _id: ""
        })
        // change  update status to false after updating data in db
        props.changeIsUpdate(false);
        // to prevent refreshing of page when form is submited
        event.preventDefault();
    }



    return (
        <div>
            {/* form with already existing info ,which is ready to update */}
            <form className="create-note">
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={note.title}
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows={3}
                    value={note.content}
                />
                {/* hide submit and clear btn when there is no data in the fields */}
                {note.title === "" && note.content === "" ? <></> :
                    <>
                        <Zoom in><Fab className="del" color="primary" aria-label="add" onClick={() => changeIT({
                            content: "",
                            title :props.updateData.title,
                            _id: props.updateData._id
                        })
                        }><CloseIcon /></Fab></Zoom><Zoom in>
                            <Fab className="add" color="primary" aria-label="add" onClick={handleSubmit}><AddTaskTwoToneIcon /></Fab>
                        </Zoom></>}
            </form>
        </div>
    );
}

export default UpdateArea;
