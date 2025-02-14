import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskList from "./state-management/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/context/taskContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/context/authContext";
import AuthProvider from "./state-management/providers/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
