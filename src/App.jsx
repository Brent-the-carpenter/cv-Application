import { useState } from "react";
import InputComponent from "./components/inputComponent";
import ViewPort from "./ViewPort";

import "./App.css";

function App() {
  const [EducationState, setEducationState] = useState({});
  const [ExperienceState, setExperienceState] = useState({});
  const [generalState, setGeneralState] = useState({});
  const [jobs, setJobs] = useState([]);
  const [schools, setSchools] = useState({});
  return (
    <div className="App">
      <InputComponent
        EducationState={EducationState}
        setEducationState={setEducationState}
        ExperienceState={ExperienceState}
        setExperienceState={setExperienceState}
        generalState={generalState}
        setGeneralState={setGeneralState}
        setJobs={setJobs}
        jobs={jobs}
        schools={schools}
        setSchools={setSchools}
      />
      <ViewPort
        EducationState={EducationState}
        ExperienceState={ExperienceState}
        generalState={generalState}
        jobs={jobs}
      />
    </div>
  );
}

export default App;
