import React from "react";
// for material ui(delete and update btn)
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// props -> data(_id,title,context) , onUpdate , onDelete 
const Notes = (props) => {
    const {_id , title , content } = props.data
    return (
        <div className="note">

            {/* title and content */}
            <h1>{title}</h1>
            <p>{content}</p>

            {/* update and delete btn */}
            <button onClick={() => {
                props.onUpdate(props.data);
            }}><EditOutlinedIcon /></button>
            <button  onClick={()=>{
            props.onDelete(_id);
            }}><DeleteOutlineIcon/></button>

        </div>
    );
}

export default Notes;
