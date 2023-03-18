import {createStore} from "redux";
import listReducer from "./redusers/listReduser";


const store = createStore(listReducer)

export default store
