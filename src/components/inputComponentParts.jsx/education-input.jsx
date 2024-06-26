import { useState } from "react";
import InputElement from "./inputElement";
import "../../App.css";
export default function Education({
  EducationState,
  setEducationState,
  validationState,
  setValidationState,
  checkForEmptyFields,
  handleChange,
  getInputStyle,
  setSchools,
  // schools,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const handleAddSchool = (component = "education") => {
    if (!checkForEmptyFields(component, EducationState)) {
      console.log(
        "Validation state after checkForEmptyFields education",
        validationState
      );
      return;
    }

    const newSchool = { ...EducationState, id: Date.now() };
    setSchools((prevSchools) => [...prevSchools, newSchool]);

    setEducationState({
      school: "",
      fieldOfStudy: "",
      dates: "",
    });

    setValidationState((prevState) => ({
      ...prevState,
      education: {
        school: "",
        fieldOfStudy: "",
        dates: "",
      },
    }));
  };
  return (
    <>
      <h1 id="educationTag" onClick={toggleShow}>
        Education
      </h1>
      <div className={`${show ? "education" : "hide"} `}>
        <InputElement
          type={"text"}
          label={"School Name"}
          id={"school"}
          placeholder={"School Name"}
          value={EducationState.school}
          onChange={(e) => handleChange("education", "school", e.target.value)}
          style={getInputStyle("education", "school")}
          errorMessage={validationState.education.school}
        />
        <InputElement
          type={"text"}
          label={"field of study"}
          id={"field-of-study"}
          placeholder={"field of study"}
          value={EducationState.fieldOfStudy}
          onChange={(e) =>
            handleChange("education", "fieldOfStudy", e.target.value)
          }
          style={getInputStyle("education", "fieldOfStudy")}
          errorMessage={validationState.education.fieldOfStudy}
        />
        <InputElement
          type={"text"}
          label={"dates"}
          id={"school-dates"}
          placeholder={"MM/YYYY - MM/YYYY"}
          value={EducationState.dates}
          onChange={(e) => handleChange("education", "dates", e.target.value)}
          style={getInputStyle("education", "dates")}
          errorMessage={validationState.education.dates}
        />
        <br />

        <button onClick={() => handleAddSchool()} className="add-button">
          Add School
        </button>
      </div>
    </>
  );
}
