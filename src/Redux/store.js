import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { flightReducer } from "./flights/flights.reducer";

const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch);
    }
    next(action);
}

const rootReducer = combineReducers({
    flights: flightReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(loggerMiddleware));
