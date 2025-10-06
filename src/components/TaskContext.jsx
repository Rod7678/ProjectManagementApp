import { createContext } from "react";

export const ProjectContext = createContext({
    tasks: [],
    addingTask: ()=>{},
    deleteTask: ()=>{},
})