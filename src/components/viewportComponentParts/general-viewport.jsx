import "../../App.css";

export default function General_Viewport({ generalState }) {
  return (
    <header>
      <h1 id="view-name">
        {`${generalState.firstName} ${generalState.lastName}`}
      </h1>
      <div className="contactWrapper">
        {generalState.email && (
          <div id="view-Email">
            <img
              className="icon"
              src="src/assets/email-arrow-right-outline.svg"
              alt=""
            />
            <a href={`mailto:${generalState.email}`}>{generalState.email}</a>
          </div>
        )}
        {generalState.phoneNumber && (
          <div id="view-Phone">
            <img className="icon" src="src/assets/phone.svg" alt="" />

            <a href={`tel:${generalState.phoneNumber}`}>
              {generalState.phoneNumber}
            </a>
          </div>
        )}
        {generalState.location && (
          <div id="view-location">
            {" "}
            <img
              className="icon"
              src="./src/assets/map-marker.svg"
              alt=""
            />{" "}
            {generalState.location}
          </div>
        )}
      </div>
    </header>
  );
}
