
import { useState, useRef } from 'react'
import ProjectSidBarr from './components/ProjectSidBarr.jsx'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected.jsx'
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })
  return (
    <main className='h-screen my-8 flex gap-8' >
      <ProjectSidBarr />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
