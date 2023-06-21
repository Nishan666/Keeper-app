import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import CreateArea from "./CreateArea";
import { getKeeper, addKeeper, deleteKeeper, updateKeeper } from "../../utils/HandleApi";
import UpdateArea from "./UpdateArea"
import { useKeeperContext } from "../../hooks/useKeeperContext";


const MainPage = () => {

    // keeper state is mantained and updated using useReducer
    // keeper has all the Notes
    //dispatch from useReducer , it maintain keeper state
    //it has 2 field ->
    // 1.type (type of operation)
    // 2.payload (data that to be updated)
    const { keeper, dispatch } = useKeeperContext();

    // store state of update status , if update is true then, show update info in <UpdateArea> else <CreateArea >
    const [isUpdate, changeIsUpdate] = useState(false);
    // state to store the data of single note that come for update
    const [updateData, changeUpdateData] = useState({})
    //update note is called when already 1 update exists
    const [secondTimeUpdate, setSecondTimeUpdate] = useState(false);


    // call every time when the page is refreshed
    useEffect(() => {
        getKeeper(dispatch);
    }, [dispatch])

    const takeNote = async (note) => {
        // if update is true updateData(it has extra data _id) else addKeeper(it has only title and content)
        isUpdate ? await updateKeeper(note, dispatch) : await addKeeper(note, dispatch);
        //rerender the with updated data
        getKeeper(dispatch)
    }



    //*********Notes**********/
    //it is called when delete btn is clicked on note
    const deleteNote = (_id) => {
        deleteKeeper(_id, dispatch);
    }
    //it is called when update btn is clicked on note
    const updateNote = (data) => {
        // change update status to true
        changeIsUpdate(true);
        // data has data of particular notes that has to be updated
        changeUpdateData(data);
        secondTimeUpdate ? setSecondTimeUpdate(false) : setSecondTimeUpdate(true)
    }

    return (
        <>
            {/* btn to change state from update to create new Note , it only show when when we are updating any note */}
            <button className="create-new" onClick={() => isUpdate ? changeIsUpdate(false) : null} style={isUpdate ? { opacity: "100" } : { opacity: "0" }}>Create New</button>

            {/* if update is true then, show update info in <UpdateArea> else <CreateArea ></CreateArea> */}
            {isUpdate ?
                <UpdateArea
                    updateData={updateData}
                    takeNote={takeNote}
                    changeIsUpdate={changeIsUpdate}
                    secondTimeUpdate={secondTimeUpdate}
                />
                :
                <CreateArea takeNote={takeNote} />}

            {/* area to display all existing notes in DB */}
            <div className="noteArea">
                {keeper && keeper.map((data, index) => (
                    <Notes
                        key={index}
                        data={data}
                        onDelete={deleteNote}
                        onUpdate={updateNote}
                    />
                ))}
            </div>
        </>
    )
}


export default MainPage;