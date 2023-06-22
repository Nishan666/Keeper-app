import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import { KeeperContextProvider } from './contexts/keeperContext';
import { AuthContextProvider } from './contexts/AuthContext';
import ScrollToTop from './scrollToTop'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
    {/* // context Api Provider
    // auth will be always at top ,, AuthContextProvider ->dispatch and user */}
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
    </React.StrictMode>
)



