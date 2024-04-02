import { useState } from "react";
import Experience from "./inputComponentParts.jsx/experience-input";
import Education from "./inputComponentParts.jsx/education-input";
import General from "./inputComponentParts.jsx/general-input";
function InputComponent({
  EducationState,
  setEducationState,
  ExperienceState,
  setExperienceState,
  generalState,
  setGeneralState,
  setJobs,
  jobs,
  setSchools,
  schools,
}) {
  const [validationState, setValidationState] = useState({
    experience: {
      title: "",
      company: "",
      dates: "",
      description: "",
    },
  });
  const checkForEmptyFields = (component, State) => {
    let currentComponent = component;
    const newValidationState = { ...validationState[currentComponent] };
    let isValid = true;
    for (const key in State) {
      if (State[key] === "") {
        newValidationState[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      } else {
        newValidationState[key] = "";
      }
    }
    setValidationState({ [component]: newValidationState });
    return isValid;
  };
  const handleChange = (component, key, value) => {
    if (component === "experience") {
      setExperienceState((prevState) => ({ ...prevState, [key]: value }));
    } else if (component === "education") {
      setEducationState((prevState) => ({ ...prevState, [key]: value }));
    } else if (component === "general") {
      setGeneralState((prevState) => ({ ...prevState, [key]: value }));
    }

    setValidationState((prevState) => ({
      ...prevState,
      [component]: { ...prevState[component], [key]: "" },
    }));
  };

  const getInputStyle = (component, fieldName) => ({
    border: validationState[component][fieldName] ? "1px solid red" : "initial",
  });
  return (
    <>
      <General
        className="general"
        generalState={generalState}
        setGeneralState={setGeneralState}
        validationState={validationState}
        setValidationState={setValidationState}
        checkForEmptyFields={checkForEmptyFields}
        handleChange={handleChange}
        getInputStyle={getInputStyle}
      />
      <Education
        className="education"
        EducationState={EducationState}
        setEducationState={setEducationState}
        validationState={validationState}
        setValidationState={setValidationState}
        checkForEmptyFields={checkForEmptyFields}
        handleChange={handleChange}
        getInputStyle={getInputStyle}
        setSchools={setSchools}
        schools={schools}
      />
      <Experience
        className="experience"
        ExperienceState={ExperienceState}
        setExperienceState={setExperienceState}
        setJobs={setJobs}
        jobs={jobs}
        validationState={validationState}
        setValidationState={setValidationState}
        checkForEmptyFields={checkForEmptyFields}
        handleChange={handleChange}
        getInputStyle={getInputStyle}
      />
    </>
  );
}
export default InputComponent;
