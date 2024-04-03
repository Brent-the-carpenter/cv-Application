export default function Education_ViewPort({ schools, EducationState }) {
  const { school, fieldOfStudy, dates } = EducationState;
  return (
    <>
      <h2 id="educationTitle">Education</h2>
      <div className="education-view">
        {schools.map((schoolItem) => {
          return (
            <ul key={schoolItem.id}>
              <h3>{`Name of school: ${schoolItem.school}`}</h3>
              <li>
                <p>{`Field of study : ${schoolItem.fieldOfStudy}`}</p>
              </li>
              <li>
                <p>{`Dates attened: ${schoolItem.dates}`}</p>
              </li>
            </ul>
          );
        })}
        {(school || fieldOfStudy || dates) && (
          <ul>
            <h3> Name of school: {school}</h3>
            <li>
              <p> Dates attened : {dates}</p>
            </li>
            <li>
              <p> Field of study : {fieldOfStudy}</p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
