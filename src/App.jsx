import { useState } from "react";
import InputComponent from "./components/inputComponent";
import ViewPort from "./ViewPort";

import "./App.css";

function App() {
  const [EducationState, setEducationState] = useState({});
  const [ExperienceState, setExperienceState] = useState({});
  const [generalState, setGeneralState] = useState({});
  const [jobs, setJobs] = useState([]);
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
