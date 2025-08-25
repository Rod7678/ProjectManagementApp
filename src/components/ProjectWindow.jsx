export default function ProjectWindow({selectedProjectData}){
    console.log(selectedProjectData.projectList.length);
    let lastProject;
    if (selectedProjectData.projectList.length > 0) {
        lastProject = selectedProjectData.projectList.at(-1);
        // console.log(lastProject);
    }else if(selectedProjectData.projectList.length === 1 ){
         lastProject = selectedProjectData.projectList.at(0);
    }
    const ProjectTitle = lastProject.title.enteredTitle;
    const description = lastProject.description.enteredDescription;
    const projectDate = lastProject.dueDate.enteredDueDate;
    console.log(ProjectTitle)
    return (
        <div className="md:w-full mt-16 bg-slate-600 p-14">
            <h1>hoii</h1>
        </div>
    )
}