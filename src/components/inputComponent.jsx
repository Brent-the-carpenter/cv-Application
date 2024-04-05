import { useState, useEffect } from "react";
import Experience from "./inputComponentParts.jsx/experience-input";
import Education from "./inputComponentParts.jsx/education-input";
import General from "./inputComponentParts.jsx/general-input";
import "../App.css";
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
  className,
}) {
  const [validationState, setValidationState] = useState({
    experience: {
      title: "",
      company: "",
      dates: "",
      description: "",
    },
    education: {
      school: "",
      fieldOfStudy: "",
      dates: "",
    },
    general: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
    },
  });
  useEffect(() => {
    console.log(validationState);
  }, [validationState]);

  const checkForEmptyFields = (component, State) => {
    let isValid = true;
    const newValidationStateForComponent = {};
    console.log("component", component);
    for (const key in State) {
      if (State[key] === "") {
        newValidationStateForComponent[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        isValid = false;
      } else {
        newValidationStateForComponent[key] = "";
      }
    }

    setValidationState((prevState) => ({
      ...prevState,
      [component]: {
        ...prevState[component],
        ...newValidationStateForComponent,
      },
    }));

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
    }));
  };

  const getInputStyle = (component, fieldName) => {
    const isInvalid =
      validationState[component][fieldName] ===
      validationState[component][fieldName]?.includes("required");

    return {
      border: isInvalid ? "1px solid red" : "1px solid black",
    };
  };

  return (
    <div className={className}>
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
    </div>
  );
}
export default InputComponent;
