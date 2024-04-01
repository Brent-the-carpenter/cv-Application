import { useState } from "react";
function Experience({ ExperienceState, setExperienceState, setJobs, jobs }) {
  const [validationState, setValidationState] = useState({
    title: "",
    company: "",
    dates: "",
    description: "",
  });

  const checkForEmptyFields = () => {
    const newValidationState = { ...validationState };
    let isValid = true;
    for (const key in ExperienceState) {
      if (ExperienceState[key] === "") {
        newValidationState[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`; // Set error message
        isValid = false;
      } else {
        newValidationState[key] = ""; // No error
      }
    }
    setValidationState(newValidationState);
    return isValid;
  };

  const handleAddJob = () => {
    if (!checkForEmptyFields()) return;
    setJobs([...jobs, ExperienceState]);
    setExperienceState({
      title: "",
      company: "",
      dates: "",
      description: "",
    });
    // Reset validation state for the next input
    setValidationState({
      title: "",
      company: "",
      dates: "",
      description: "",
    });
  };

  const handleChange = (key, value) => {
    setExperienceState((prevState) => ({ ...prevState, [key]: value }));

    setValidationState((prevState) => ({ ...prevState, [key]: "" }));
  };

  const getInputStyle = (fieldName) => ({
    border: validationState[fieldName] ? "1px solid red" : "initial",
  });
  return (
    <div>
      <h1>Experience</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Job Title"
        value={ExperienceState.title}
        onChange={(e) => handleChange("title", e.target.value)}
        style={getInputStyle("title")}
        aria-describedby={validationState.title ? "titleError" : undefined}
      />
      {validationState.title && (
        <div id="titleError" style={{ color: "red" }} aria-live="assertive">
          {validationState.title}
        </div>
      )}

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        placeholder="Company Name"
        value={ExperienceState.company}
        onChange={(e) => handleChange("company", e.target.value)}
        style={getInputStyle("company")}
        aria-describedby={validationState.company ? "companyError" : undefined}
      />
      {validationState.company && (
        <div id="companyError" style={{ color: "red" }} aria-live="assertive">
          {validationState.company}
        </div>
      )}

      <label htmlFor="dates">Dates</label>
      <input
        type="text"
        id="dates"
        placeholder="MM/YYYY - MM/YYYY"
        value={ExperienceState.dates}
        onChange={(e) => handleChange("dates", e.target.value)}
        style={getInputStyle("dates")}
        aria-describedby={validationState.dates ? "datesError" : undefined}
      />
      {validationState.dates && (
        <div id="datesError" style={{ color: "red" }} aria-live="assertive">
          {validationState.dates}
        </div>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Brief description of your responsibilities"
        value={ExperienceState.description}
        onChange={(e) => handleChange("description", e.target.value)}
        style={getInputStyle("description")}
        aria-describedby={
          validationState.description ? "descriptionError" : undefined
        }
      />
      {validationState.description && (
        <div
          id="descriptionError"
          style={{ color: "red" }}
          aria-live="assertive"
        >
          {validationState.description}
        </div>
      )}

      <button id="addJob" onClick={handleAddJob}>
        Add job
      </button>
    </div>
  );
}

export default Experience;
