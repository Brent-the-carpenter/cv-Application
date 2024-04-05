import "../../App.css";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email-arrow-right-outline.svg";
import locationIcon from "../../assets/map-marker.svg";
export default function General_Viewport({ generalState }) {
  return (
    <header>
      <h1 id="view-name">
        {`${generalState.firstName} ${generalState.lastName}`}
      </h1>
      <div className="contactWrapper">
        {generalState.email && (
          <div id="view-Email">
            <img className="icon" src={emailIcon} alt="" />
            <a href={`mailto:${generalState.email}`}>{generalState.email}</a>
          </div>
        )}
        {generalState.phoneNumber && (
          <div id="view-Phone">
            <img className="icon" src={phoneIcon} alt="" />

            <a href={`tel:${generalState.phoneNumber}`}>
              {generalState.phoneNumber}
            </a>
          </div>
        )}
        {generalState.location && (
          <div id="view-location">
            {" "}
            <img className="icon" src={locationIcon} alt="" />{" "}
            {generalState.location}
          </div>
        )}
      </div>
    </header>
  );
}
