import { Dispatch } from "react";
import { Task, TaskAction } from "./taskReducer";
import React from "react";

interface TaskContextType {
    tasks : Task[];
    dispatch : Dispatch<TaskAction>;
}

const TasksContext = React.createContext({} as TaskContextType);

export default TasksContext;