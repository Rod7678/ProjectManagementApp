import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SidePanel from "./components/SidePanel.jsx";
import NewProject from "./components/NewProject.jsx";
import ProjectWindow from "./components/ProjectWindow.jsx";



function App() {
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
    // console.log(projectsState.projectList)
  }

  function handleAddedProject(projectData){
    setProjectsState((prevState) =>{
        const newProject = {
          ...projectData,
          id: Math.floor(Math.random()*100)
        };
        return {
          ...prevState,
          projectList: [...prevState.projectList, newProject],
        };
      });

    }
    // console.log(projectsState);

    function handleSelectedProject(projectId){
      setProjectsState((prevState)=>{
        return {
          ...prevState,
          selectedProjectId: projectId,
        }
      })
    }
  let content;

  if(projectsState.selectedProjectId === null){
    content =  <NewProject onAddedProject={handleAddedProject} />;
  }
  else if(projectsState.selectedProjectId === undefined){
    content =  <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }else if(projectsState.selectedProjectId === projectId){
    content = <ProjectWindow selectedProjectData={projectsState}/>
  }


  return (
    <main className="h-screen flex my-8 gap-8">
      <SidePanel onStartAddProject={handleStartAddProject} projectList={projectsState.projectList} onSelectProject={handleSelectedProject}/>
      {content}
    </main>
  );
}

export default App;
