import React ,{useEffect, useState} from "react";

import Header from "./Sub-components/Header";
import Footer from "./Sub-components/Footer";
import Notes from "./Sub-components/Notes";
import CreateArea from "./Sub-components/CreateArea";
import { getKeeper, addKeeper ,deleteKeeper , updateKeeper } from "../utils/HandleApi";
import UpdateArea from "./Sub-components/UpdateArea"


function App(){

const [array, changeArray] = useState([]);

const [update , changeUpdate] = useState(false);

const [updateData , changeUpdateData]  = useState({})

  const [s2ndTimeUpdate, sets2ndTimeUpdate] = useState(false);


  const [note, changeIT] = useState({
    title: "",
    content: "",
    _id: ""
  });



useEffect(()=>{
  //
  getKeeper(changeArray);
},[])

function sendArray(note) {
  // changeArray((prevValue) => {
    // return [...prevValue, note]; 
    //
console.log(note);
  update ? updateKeeper(note, changeArray) : addKeeper(note, changeArray) ;
  // });
}


function deleteNote(id) {
  // changeArray((prevValue)=>{
  //   return prevValue.filter((item,index)=>{
  //     return index !== id ;
  //   })
  // })
  deleteKeeper(id,changeArray);
  // console.log(id);
}

function  updateNote(data) {
    // changeArray((prevValue)=>{
    //   return prevValue.filter((item,index)=>{
    //     return index !== id ;
    //   })
    // })
    // 
    // console.log(id);
  
    changeUpdate(true);

  changeUpdateData(data);
  s2ndTimeUpdate ? sets2ndTimeUpdate(false) : sets2ndTimeUpdate(true)

  
  }

    return (
      <div>
        <Header>
        </Header>
        <button onClick={()=> changeUpdate(false)}>Clear</button>

        {update ? <UpdateArea
         updateData={updateData}
         sendArray={sendArray}
          changeUpdate={changeUpdate}
          note={note}
          changeIT={changeIT}
          s2ndTimeUpdate={s2ndTimeUpdate}
           /> : <CreateArea sendArray={sendArray} />}

        <div>
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

        <Footer></Footer>
      </div>
    );
}

export default App;