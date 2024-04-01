function Experience({ title, company, dates, description }) {
  return (
    <div className="experience">
      <ul>
        <li>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <p>{dates}</p>
          <p>{description}</p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
