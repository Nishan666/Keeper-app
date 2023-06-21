import axios from "axios";


// backend/server url
// const baseURL = "https://keeper-8jjv.onrender.com"
const baseURL = "http://localhost:5000/api/keeper"


// as my research useKeeperContext cannot be used here because there is not function

//get all data from db
const getKeeper = async (dispatch) => {
    await axios
        .get(baseURL)
        .then(({ data }) => {
            console.log("data --->", data);
            //dispatch from useReducer , it maintain keeper state
            //it has 2 field ->
            // 1.type (type of operation)
            // 2.payload (data that to be updated)
            dispatch({ type: 'SET_KEEPER', payload: data })
        })
}

// create new note in db (post request)
const addKeeper = async (note, dispatch) => {
    note.title === "" && note.content === "" ? console.log("empty input") :
        await axios
            .post(`${baseURL}/save`, note)
            .then((data) => {
                console.log(data);
                // data.data is added note's object
                dispatch({ type: 'CREATE_KEEPER', payload: data.data })
            })
}

// update existing notes in db
const updateKeeper = async (note, dispatch) => {
    await axios
        .post(`${baseURL}/update`, note)
        .then((data) => {
            console.log(data);
            // data.data is updated note's object
            dispatch({ type: 'UPDATE_KEEPER', payload: data.data })
        })
}


// delete note from db
const deleteKeeper = async (_id, dispatch) => {
    await axios
        .post(`${baseURL}/delete`, { _id: _id })
        .then((data) => {
            console.log(data);
            // data.data has _id
            dispatch({ type: 'DELETE_KEEPER', payload: data.data })
        })
}

export { getKeeper, addKeeper, deleteKeeper, updateKeeper }