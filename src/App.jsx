import {useRef, useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SidePanel from "./components/SidePanel.jsx";
import NewProject from "./components/NewProject.jsx";
import ProjectWindow from "./components/ProjectWindow.jsx";



function App() {
  const getedProjectIds = useRef([]);
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projectList: [],
  });

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectedProject(projectId){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleAddedProject(projectData){
    setProjectsState((prevState) =>{
      let projectId;
      do{
        projectId = Math.floor(Math.random()*100);
      }while(getedProjectIds.current.includes(projectId))
      
      getedProjectIds.current.push(projectId);
      
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId : projectId,
        projectList: [...prevState.projectList, newProject],
      };
    });
    
  }
  function handleCancelProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  const selectedProject = projectsState.projectList.find(project => project.id === projectsState.selectedProjectId);
  let content = <ProjectWindow selectedProjectData={selectedProject}/>;

  if(projectsState.selectedProjectId === null){
    content =  <NewProject onAddedProject={handleAddedProject} onCancelProject={handleCancelProject}/>;
  }
  else if(projectsState.selectedProjectId === undefined){
    content =  <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }


  return (
    <main className="h-screen flex my-8 gap-8">
      <SidePanel onStartAddProject={handleStartAddProject} projectList={projectsState.projectList} onSelectProject={handleSelectedProject} selectedProjectId={projectsState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
