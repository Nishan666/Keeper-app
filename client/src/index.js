import { BrowserRouter } from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { KeeperContextProvider } from './contexts/keeperContext';
import { AuthContextProvider } from './contexts/AuthContext';
import ScrollToTop from './scrollToTop'

ReactDOM.render(
    // context Api Provider
    // auth will be always at top ,, AuthContextProvider ->dispatch and user
    <AuthContextProvider>
        {/* KeeperContextProvider -->  dispatch and keeper */}
        <KeeperContextProvider>
            <BrowserRouter>
                {/* for Scroll the screen back to to  after any changes*/}
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </KeeperContextProvider>
    </AuthContextProvider>
    , document.getElementById("root"));