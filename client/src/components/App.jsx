import React from "react";

import Header from "./Sub-components/partials/Header"
import Footer from "./Sub-components/partials/Footer"

import routes from "../routers/routes";


const App = () => {
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>

  )
};

export default App;