import React from "react";

import Header from "./Sub-components/Header";
import Footer from "./Sub-components/Footer";
import Notes from "./Sub-components/Notes";

import notes from "../notes";



function App(){
    return (
      <div>
        <Header></Header>
        {notes.map(data =>( <Notes key={data.key} title={data.title} content={data.content} />)) }
        <Footer></Footer>
      </div>
    );
}

export default App;