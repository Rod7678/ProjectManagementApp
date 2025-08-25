import Button from "./Button.jsx";

export default function SidePanel({onStartAddProject, projectList, onSelectProject}){
    // let projectTitle = [...projectList.map(array=>array)]
    // console.log(projectTitle)
    // if(projectTitle.length > 0){
    // }

    function handleSelectedProject(projectId){
      console.log(`project id = ${projectId}`)
    }
   
    return (
        <aside className="bg-stone-900 text-stone-50 flex flex-col px-8 py-16 w-1/3 text-start rounded-tr-2xl md:w-72">
            <h2 className="md:text-xl font-bold text-stone-200 uppercase mb-8">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8 gap-4">
                {projectList.map((project)=>(
                    <li key={project.id} >
                        <button onClick={()=>
                            handleSelectedProject(project.id)
                            } 
                            className=
                            "py-1 hover:bg-stone-800 hover:text-stone-200 text-stone-400 px-2 my-1 text-left rounded-sm w-full"
                        >
                        {project.title.enteredTitle}
                        </button>
                    </li>
                ))}
            </ul>

        </aside>
    )
}