import { useContext } from "react";
import NewTask from "./NewTask.jsx";
import { ProjectContext } from "./TaskContext.jsx";

export default function Tasks(){
    const {tasks, deleteTask} = useContext(ProjectContext);

    return (
    <section>
        <h2 className="text-2xl mb-4 font-bold text-stone-700">Tasks</h2>
        <NewTask />
        {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any task yet</p>}
        {tasks.length > 0 &&  
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task)=>(
                <li key={task.id} className="flex justify-between my-4">
                    <span>{task.text}</span>
                    <button className="text-stone-700 hover:text-red-500" onClick={()=> deleteTask(task.id)}>Clear</button>
                </li>
            ))}
        </ul>}
    </section>
    )
}