import General_Viewport from "./viewportComponentParts/general-viewport";
import Education_ViewPort from "./viewportComponentParts/education-viewport";
import Experience_ViewPort from "./viewportComponentParts/experience-viewport";
function ViewPort({
  EducationState,
  ExperienceState,
  generalState,
  jobs,
  schools,
}) {
  return (
    <div className="viewport">
      <General_Viewport generalState={generalState} />
      <main>
        <Education_ViewPort schools={schools} EducationState={EducationState} />

        <Experience_ViewPort jobs={jobs} ExperienceState={ExperienceState} />
      </main>
    </div>
  );
}
export default ViewPort;
