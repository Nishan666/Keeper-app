import React, { useEffect} from "react";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import Fab from "@mui/material/Fab";

import Zoom from "@mui/material/Zoom";

import CloseIcon from '@mui/icons-material/Close';


function UpdateArea(props) {

    // const [isExpanded, setExpanded] = useState(false)

    useEffect(()=>{
        props.changeIT({
            title: props.updateData.title,
            content: props.updateData.content,
            _id: props.updateData.id
        });
        console.log("hello");
    }, [props.s2ndTimeUpdate])





    function handleChange(event) {
        const { name, value } = event.target;
        props.changeIT(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function addItem(event) {
        props.sendArray(props.note);
        props.changeIT({
            title: "",
            content: "",
            _id :""
        })
        props.changeUpdate(false);
        event.preventDefault();
    }

    // function expand() {
    //     setExpanded(true);
    // }

    return (
        <div>
            <form className="create-note">
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={props.note.title}
                />
                <textarea
                    
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows={3}
                    value={props.note.content}
                />                
                {props.note.title === "" && props.note.content === "" ? <></> : 
                <>
                    <Zoom in><Fab className="del" color="primary" aria-label="add" onClick={() => props.changeIT({
                        title: "",
                        content: "",
                        _id:""
                    })}><CloseIcon /></Fab></Zoom><Zoom in>
                    <Fab className="add" color="primary" aria-label="add" onClick={addItem}><AddTaskTwoToneIcon /></Fab>
                        </Zoom></>}              
            </form>
        </div>
    );
}

export default UpdateArea;
