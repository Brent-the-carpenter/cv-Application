import Experience from "./inputComponentParts.jsx/experience-input";

function InputComponent({
  EducationState,
  setEducationState,
  ExperienceState,
  setExperienceState,
  generalState,
  setGeneralState,
  setJobs,
  jobs,
}) {
  <Experience
    className="experience"
    ExperienceState={ExperienceState}
    setExperienceState={setExperienceState}
    setJobs={setJobs}
  />;
}
export default InputComponent;
