//doing useContext hook stuffs , by creating custom hook

import { KeeperContext } from "../contexts/keeperContext";
import { useContext } from "react";

export const useKeeperContext = ()=>{

    // useContext hook -> context has {dispatch , state}
    const context = useContext(KeeperContext);

    // if context is empty ,it means useKeeperContext is used outside <KeeperContextProvider><App/></KeeperContextProvider>
    if(!context) {
        throw Error ('useKeeperContext must be used inside an KeeperContextProvider')
    }
    // context -> {dispatch , state}
    return context
}