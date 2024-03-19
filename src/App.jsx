
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
  let content;
  if(projectState.selectedProject===null){
    content=<NewProject />
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
