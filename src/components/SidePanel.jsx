import Button from "./Button.jsx";

export default function SidePanel({
    onStartAddProject,
    projectList, 
    onSelectProject,
    selectedProjectId

}){
  
    return (
        <aside className="bg-stone-900 text-stone-50 flex flex-col px-8 py-16 w-1/3 text-start rounded-tr-2xl md:w-72">
            <h2 className="md:text-xl font-bold text-stone-200 uppercase mb-8">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8 gap-4">
                {projectList.map((project)=>{
                    let cssClasses = "py-1 hover:bg-stone-800 hover:text-stone-200 px-2 my-1 text-left rounded-sm w-full"

                    if(project.id === selectedProjectId){
                        cssClasses += ' bg-stone-800 text-stone-200'
                    }else{
                        cssClasses += ' text-stone-400'
                    }
                    return (
                        <li key={project.id} >
                        <button onClick={()=>onSelectProject(project.id)} 
                            className={cssClasses}
                        >
                        {project.title.enteredTitle}
                        </button>
                    </li>
                    )
                })}
            </ul>

        </aside>
    )
}