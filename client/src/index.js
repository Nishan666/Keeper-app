import { BrowserRouter } from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { KeeperContextProvider } from './contexts/keeperContext';
import ScrollToTop from './scrollToTop'

ReactDOM.render(
    // context Api Provider
    <KeeperContextProvider>
        <BrowserRouter>
        {/* for Scroll the screen back to to  after any changes*/}
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </KeeperContextProvider>
    , document.getElementById("root"));