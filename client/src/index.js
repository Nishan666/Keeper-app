import { BrowserRouter } from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { KeeperContextProvider } from './contexts/keeperContext';

ReactDOM.render(
    <KeeperContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </KeeperContextProvider>
    , document.getElementById("root"));