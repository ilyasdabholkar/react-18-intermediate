import { useContext } from "react";
import TasksContext from "./taskContext";


const useTasks = () => useContext(TasksContext);

export default useTasks;