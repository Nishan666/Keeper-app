import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import CreateArea from "./CreateArea";
import { getKeeper, addKeeper, deleteKeeper, updateKeeper } from "../../utils/HandleApi";
import UpdateArea from "./UpdateArea"


const MainPage = () => {
    const [array, changeArray] = useState([]);

    const [update, changeUpdate] = useState(false);

    const [updateData, changeUpdateData] = useState({})

    const [s2ndTimeUpdate, sets2ndTimeUpdate] = useState(false);

    const [note, changeIT] = useState({
        title: "",
        content: "",
        _id: ""
    });



    useEffect(() => {
        getKeeper(changeArray);
    }, [])

    function sendArray(note) {
        console.log(note);
        update ? updateKeeper(note, changeArray) : addKeeper(note, changeArray);
    }


    function deleteNote(id) {
        deleteKeeper(id, changeArray);
    }

    function updateNote(data) {
        changeUpdate(true);
        changeUpdateData(data);
        s2ndTimeUpdate ? sets2ndTimeUpdate(false) : sets2ndTimeUpdate(true)
    }

    return (
        <>
            <button className="create-new" onClick={() => update ? changeUpdate(false) : null} style={update ? { opacity: "100" } : { opacity: "0" }}>Create New</button>

            {update ? <UpdateArea
                updateData={updateData}
                sendArray={sendArray}
                changeUpdate={changeUpdate}
                note={note}
                changeIT={changeIT}
                s2ndTimeUpdate={s2ndTimeUpdate}
            /> : <CreateArea sendArray={sendArray} />}

            <div className="noteArea">
                {array.map((data, index) => (
                    <Notes
                        key={index}
                        id={data._id}
                        title={data.title}
                        content={data.content}
                        onDelete={deleteNote}
                        onUpdate={updateNote}
                    />
                ))}
            </div>
        </>
    )
}


export default MainPage;