import React from "react";

function Notes(props) {

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button  onClick={()=>{
              props.onChecked(props.id);
            }}>DELETE</button>
        </div>
    );
}

export default Notes;
