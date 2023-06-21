import React, { createContext, useReducer } from "react";

// create -> context api
export const KeeperContext = createContext();

//defining reducer function which has coustom state logic
// updating the state
const kepperReducer = (state, action) => {
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
                keeper: [action.payload]
            }
        //while updating existing note
        case 'UPDATE_KEEPER':
            // const arrayWithOutUpdateNote = state.keeper.filter((w) => w._id !== action.payload._id)
            // console.log(arrayWithOutUpdateNote);
            console.log({title : action.payload.title , content : action.payload.content} );
            return {
                kepper: [action.payload]
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

    const [state, dispatch] = useReducer(kepperReducer, { keeper: null })
    // initally state = {keeper : null}

    return (
        // Provider -> context API 
        // {{ ...state, dispatch }} ->means  { dispatch , keeper }
        <KeeperContext.Provider value={{ ...state, dispatch }}>
            {children}
        </KeeperContext.Provider>
    )
}