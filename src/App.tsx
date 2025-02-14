import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksProvider from "./state-management/tasks/TasksProvider";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </>
  );
}

export default App;
