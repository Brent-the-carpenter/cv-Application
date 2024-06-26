import InputElement from "./inputElement";
import { useState } from "react";
import "../../App.css";
function Experience({
  ExperienceState,
  setExperienceState,
  setJobs,
  // jobs,
  validationState,
  setValidationState,
  handleChange,
  checkForEmptyFields,
  getInputStyle,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const handleAddJob = (component = "experience") => {
    console.log("Current State for validation:", ExperienceState);
    if (!checkForEmptyFields(component, ExperienceState)) {
      return;
    }

    setJobs((prevJobs) => [...prevJobs, ExperienceState]);
    setExperienceState({
      title: "",
      company: "",
      dates: "",
      description: "",
    });

    setValidationState((prevState) => ({
      ...prevState,
      [component]: {
        title: "",
        company: "",
        dates: "",
        description: "",
      },
    }));
  };

  return (
    <>
      <h1 id="experienceTag" onClick={toggleShow}>
        Experience
      </h1>
      <div className={`${show ? "experience" : "hide"}`}>
        <InputElement
          nameOfState={"experience"}
          label={"Job Title"}
          type={"text"}
          id={"title"}
          placeholder={"Job Title"}
          value={ExperienceState.title}
          onChange={(e) => handleChange("experience", "title", e.target.value)}
          style={getInputStyle("experience", "title")}
          errorMessage={validationState.experience.title}
        />
        <InputElement
          type={"text"}
          label={"Company Name"}
          id={"name-of-company"}
          placeholder={"Company Name"}
          value={ExperienceState.company}
          onChange={(e) =>
            handleChange("experience", "company", e.target.value)
          }
          style={getInputStyle("experience", "company")}
          errorMessage={validationState.experience.company}
        />
        <InputElement
          type={"text"}
          label={"Dates"}
          id={"dates-employed"}
          placeholder={"MM/YYYY - MM/YYYY"}
          value={ExperienceState.dates}
          onChange={(e) => handleChange("experience", "dates", e.target.value)}
          style={getInputStyle("experience", "dates")}
          errorMessage={validationState.experience.dates}
        />

        <InputElement
          isTextArea={true}
          label={"Description"}
          id={"description-of-job"}
          placeholder={"Brief description of your responsibilities"}
          value={ExperienceState.description}
          onChange={(e) =>
            handleChange("experience", "description", e.target.value)
          }
          style={getInputStyle("experience", "description")}
          errorMessage={validationState.experience.description}
        />
        <br />
        <button id="addJob" onClick={() => handleAddJob()}>
          Add job
        </button>
      </div>
    </>
  );
}

export default Experience;
