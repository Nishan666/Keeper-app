import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Notes(props) {

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onUpdate(props);
            }}><EditOutlinedIcon /></button>
            <button  onClick={()=>{
            props.onDelete(props.id);
            }}><DeleteOutlineIcon/></button>
        </div>
    );
}

export default Notes;
