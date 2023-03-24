import {Provider} from "react-redux";
import store from "./store";
import TodoList from "./components/ToDoList/TodoList";

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




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
