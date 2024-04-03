import { useState } from "react";
import InputComponent from "./components/inputComponent";
import ViewPort from "./components/viewport";

import "./App.css";

function App() {
  const [EducationState, setEducationState] = useState({
    school: "",
    fieldOfStudy: "",
    dates: "",
  });
  const [ExperienceState, setExperienceState] = useState({
    title: "",
    company: "",
    dates: "",
    description: "",
  });
  const [generalState, setGeneralState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });
  const [jobs, setJobs] = useState([]);
  const [schools, setSchools] = useState([]);
  return (
    <div className="App">
      <InputComponent
        className="inputComponent"
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
        className="viewPort"
        EducationState={EducationState}
        ExperienceState={ExperienceState}
        generalState={generalState}
        jobs={jobs}
        schools={schools}
      />
    </div>
  );
}

export default App;
