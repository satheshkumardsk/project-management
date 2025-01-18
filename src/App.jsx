import "./App.css";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    selectedProjectId: undefined,
  });

  function handleProjectSelection(projectId) {
    console.log(projectId);
    setProjectsState((prevProjectsState) => ({
      ...prevProjectsState,
      selectedProjectId: projectId,
    }));
  }

  let content;
  content = projectsState.selectedProjectId ? (
    <NewProject />
  ) : (
    <NoProjectSelected onProjectSelection={handleProjectSelection} />
  );

  return (
    <main className="h-screen my-8">
      <ProjectsSidebar onProjectSelection={handleProjectSelection} />
      {content}
    </main>
  );
}

export default App;
