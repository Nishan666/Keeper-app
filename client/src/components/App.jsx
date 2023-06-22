import React from "react";

import Header from "./Sub-components/partials/Header"
import Footer from "./Sub-components/partials/Footer"
import routes from "../routers/routes";

import { useAuthContext } from "../hooks/useAuthContext";

const App = () => {
  const {user} = useAuthContext();

  return (
    <>
    {/* header and footer will be same for all routes */}
      <Header />
      {/* redirct to page based on routes */}
      {routes(user)}
      <Footer />
    </>

  )
};

export default App;