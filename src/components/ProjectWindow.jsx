import Button from "./Button.jsx";
import Tasks from "./Tasks.jsx";

export default function ProjectWindow({selectedProjectData, onDeleteProject, onAddTask, onDeleteTask, tasks}){
    const ProjectTitle = selectedProjectData.title.enteredTitle;
    const description = selectedProjectData.description.enteredDescription;
    const projectDate = selectedProjectData.dueDate.enteredDueDate;
    const formattedDate = new Date(projectDate).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return (
        <div className="md:w-full mt-16 p-14">
            <header className="mb-4 pb-4 border-b-2 border-stone-300">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold text-stone-800 capitalize mb-2">{ProjectTitle}</h1>
                    <Button onClick={onDeleteProject}>Delete</Button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    )
}