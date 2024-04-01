import { useState } from "react";
import InputElement from "./inputElement";

function Experience({
  ExperienceState,
  setExperienceState,
  setJobs,
  jobs,
  validationState,
  setValidationState,
  handleChange,
  checkForEmptyFields,
  getInputStyle,
  className,
}) {
  const handleAddJob = (component = "experience") => {
    if (!checkForEmptyFields(component, ExperienceState)) return;
    setJobs([...jobs, ExperienceState]);
    setExperienceState({
      title: "",
      company: "",
      dates: "",
      description: "",
    });
    // Reset validation state for the next input
    setValidationState({
      ...validationState,
      experience: {
        title: "",
        company: "",
        dates: "",
        description: "",
      },
    });
  };

  return (
    <div className={className}>
      <h1>Experience</h1>
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
        id={"company"}
        placeholder={"Company Name"}
        value={ExperienceState.company}
        onChange={(e) => handleChange("experience", "company", e.target.value)}
        style={getInputStyle("experience", "company")}
        errorMessage={validationState.experience.company}
      />
      <InputElement
        type={"text"}
        label={"Dates"}
        id={"dates"}
        placeholder={"MM/YYYY - MM/YYYY"}
        value={ExperienceState.dates}
        onChange={(e) => handleChange("experience", "dates", e.target.value)}
        style={getInputStyle("experience", "dates")}
        errorMessage={validationState.experience.dates}
      />

      <InputElement
        textarea={true}
        label={"Description"}
        id={"description"}
        placeholder={"Brief description of your responsibilities"}
        value={ExperienceState.description}
        onChange={(e) =>
          handleChange("experience", "description", e.target.value)
        }
        style={getInputStyle("experience", "description")}
        errorMessage={validationState.experience.description}
      />
      <br />
      <button id="addJob" onClick={handleAddJob}>
        Add job
      </button>
    </div>
  );
}

export default Experience;
