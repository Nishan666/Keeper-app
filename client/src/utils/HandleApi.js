import axios from "axios";

const baseURL = "http://localhost:5000"

const getKeeper = (keeper) =>{
    axios
    .get(baseURL)
    .then(({data})=>{
        console.log("data --->" , data);
        keeper(data)
    })
}

const addKeeper = (note , keeper)=>{
    note.title === "" && note.content === "" ? console.log("empty input") :
    axios
    .post(`${baseURL}/save`,note)
    .then((data) =>{
        console.log(data);
        getKeeper(keeper)
    })
}

const updateKeeper = (note, keeper) => {
    axios
        .post(`${baseURL}/update`, note)
        .then((data) => {
            console.log(data);
            getKeeper(keeper)
        })
}

const deleteKeeper = (id, keeper) => {
    axios
        .post(`${baseURL}/delete`,{_id: id})
        .then((data) => {
            console.log(data);
            getKeeper(keeper)
        })
}

export { getKeeper, addKeeper, deleteKeeper, updateKeeper }