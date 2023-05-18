import React ,{useState} from "react";

import Header from "./Sub-components/Header";
import Footer from "./Sub-components/Footer";
import Notes from "./Sub-components/Notes";
import CreateArea from "./Sub-components/CreateArea";


function App(){

const [array, changeArray] = useState([]);

function sendArray(note) {
  changeArray((prevValue) => {
    return [...prevValue, note];
  });
}

function deleteNote(id) {
  changeArray((prevValue)=>{
    return prevValue.filter((item,index)=>{
      return index !== id ;
    })
  })
}

    return (
      <div>
        <Header></Header>

        <CreateArea sendArray={sendArray} />

        <div>
          {array.map((data, index) => (
            <Notes
              key={index}
              id={index}
              title={data.title}
              content={data.content}
              onChecked={deleteNote}
            />
          ))}
        </div>

        <Footer></Footer>
      </div>
    );
}

export default App;