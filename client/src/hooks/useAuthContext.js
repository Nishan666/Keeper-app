//doing useContext hook stuffs , by creating custom hook

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = ()=>{

    // useContext hook -> context has {dispatch , state}
    const context = useContext(AuthContext);

    // if context is empty ,it means useAuthContext is used outside <AuthContextProvider><KeeperContextProvider><App/></KeeperContextProvider></AuthContextProvider>
    if(!context) {
        throw Error ('useAuthContext must be used inside an AuthContextProvider')
    }
    // context -> {dispatch , state}
    return context
}