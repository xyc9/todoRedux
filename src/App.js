import {Provider} from "react-redux";
import store from "./store";
import TodoList from "./components/ToDoList/TodoList";

import './App.css';





function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <TodoList/>
            </Provider>
        </div>
    );
}

export default App;
