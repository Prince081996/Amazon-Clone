// setup data layer
// we need this to track basket

import { createContext, useContext, useReducer } from "react";


//This Is Data Layer
export const StateContext = createContext()

//Build A PROVIDER To wrap entire APP
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext)