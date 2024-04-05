import React from "react";
import "../../App.css";
export default function Experience_ViewPort({ ExperienceState, jobs }) {
  const { title, company, dates, description } = ExperienceState;
  return (
    <>
      <h2 id="experienceTitle">Work Experience</h2>
      <section className="experience-view">
        <ul>
          {jobs.map((job) => {
            return (
              <React.Fragment key={job.id}>
                <h2>{job.company}</h2>
                <li>
                  <h3>{`Job Title: ${job.title}`}</h3>
                  <p>{` Dates Employed :${job.dates}`}</p>
                  <p className="text-area">{job.description}</p>
                </li>
              </React.Fragment>
            );
          })}
          {title || company || dates || description ? (
            <>
              <h2>{company}</h2>
              <li id="currentExperience">
                <h3>{`Job Title: ${title}`}</h3>
                <p>{` Dates Employed :${dates}`}</p>
                <p className="text-area">{description}</p>
              </li>
            </>
          ) : null}
        </ul>
      </section>
    </>
  );
}
