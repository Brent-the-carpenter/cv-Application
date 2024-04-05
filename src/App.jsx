import { useState } from "react";
import InputComponent from "./components/inputComponent";
import ViewPort from "./components/viewport";
import themeImage from "./assets/theme-light-dark.svg";
import enterFullscreen from "./assets/fullscreen.svg";
import exitFullscreen from "./assets/fullscreen-exit.svg";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(false);
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
  const [fullscreen, setFullscreen] = useState(false);

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.classList.add(`${newTheme}-theme`);
    document.body.classList.remove(`${theme}-theme`);
    setTheme(newTheme);
  }
  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <>
      <button className="theme-button" onClick={() => handleTheme()}>
        <img src={themeImage} alt="" />
      </button>
      <div className={`screenButtons ${fullscreen ? "reposition" : ""} `}>
        <button
          className={`${fullscreen ? "fullscreen-exit" : "fullscreen-enter "} `}
          onClick={handleFullscreen}
        >
          <img
            src={`${fullscreen ? enterFullscreen : exitFullscreen} `}
            alt=""
          />
        </button>
      </div>
      <div className={`App light-theme ${fullscreen ? "App-fullview" : ""}`}>
        <InputComponent
          className={`inputComponent ${
            fullscreen ? "hide-other-components" : ""
          }`}
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
          className={`viewport ${fullscreen ? "viewport-fullview " : ""}`}
          EducationState={EducationState}
          ExperienceState={ExperienceState}
          generalState={generalState}
          jobs={jobs}
          schools={schools}
        />
      </div>
    </>
  );
}

export default App;
