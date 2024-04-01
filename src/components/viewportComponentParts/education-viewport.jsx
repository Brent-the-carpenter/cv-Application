function Education({ school, degree, graduationDate }) {
  return (
    <div className="education">
      <ul>
        <li>
          <h3>{school}</h3>
          <p>{degree}</p>
          <p>{graduationDate}</p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
