
import { useState, useRef } from 'react'
import ProjectSidBarr from './components/ProjectSidBarr.jsx'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected.jsx'
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })
  function handleStartAddProject(){
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProject: null,
      }
    })
  }
  function handleAddProject(projectData){
    setProjectState(prev=>{
      const newProject={
        ...projectData,
        id:Math.random()
      }
      return {
        ...prev,
        projects: [...prev.projects, newProject],
      }
    })
  }
  console.log(projectState,666)
  let content;
  if(projectState.selectedProject===null){
    content=<NewProject onAdd={handleAddProject} />
  }else if(projectState.selectedProject==undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject} />

  }
  return (
    <main className='h-screen my-8 flex gap-8' >
      <ProjectSidBarr onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
