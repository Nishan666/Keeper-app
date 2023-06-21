import React, { createContext, useReducer } from "react";

// create -> context api
export const KeeperContext = createContext();

//defining reducer function which has coustom state logic
// updating the state
const keeperReducer = (state, action) => {
    switch (action.type) {
        //get all data from database and update the keeper object
        case 'SET_KEEPER':
            return {
                keeper: action.payload
            }
        //while creating new note
        case 'CREATE_KEEPER':
            console.log(action.payload);
            return {
                // combine new object with already existing array of object
                keeper: [action.payload, ...state.keeper]
            }
        //while updating existing note
        case 'UPDATE_KEEPER':
            if (!action.payload) {
                return state; // If payload is undefined, return the current state
            }
            // action.payload is updated notes , so ...state.keeper.filter... remove existing note the is updated
            const updatedKeeper = [action.payload, ...state.keeper.filter((w) => w._id !== action.payload._id)];
            console.log(updatedKeeper);
            return {
                keeper: updatedKeeper
            }
        // while deleting note
        case 'DELETE_KEEPER':
            return {
                // filter out note with action.payload's id
                keeper: state.keeper.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state;
    }
}

// it will run every time at the first because -> <KeeperContextProvider><App></App> in index.js
export const KeeperContextProvider = ({ children }) => {
    // here children is basically <App />

    const [state, dispatch] = useReducer(keeperReducer, { keeper: null })
    // initally state = {keeper : null}

    return (
        // Provider -> context API 
        // {{ ...state, dispatch }} ->means  { dispatch , keeper }
        <KeeperContext.Provider value={{ ...state, dispatch }}>
            {children}
        </KeeperContext.Provider>
    )
}