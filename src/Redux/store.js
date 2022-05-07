import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { flightReducer } from "./flights/flights.reducer";

const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch);
    }
    next(action);
}

const rootReducer = combineReducers({
    flights: flightReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(loggerMiddleware));
