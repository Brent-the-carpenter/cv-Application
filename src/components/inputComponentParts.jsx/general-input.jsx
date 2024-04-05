import InputElement from "./inputElement";
import { useState } from "react";
import "../../App.css";
export default function General({
  generalState,
  // setGeneralState,
  validationState,
  // checkForEmptyFields,
  handleChange,
  getInputStyle,
}) {
  console.log("Validation State:", validationState);
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const hideClass = show ? "general" : "hide";

  return (
    <>
      <h1 id="generalTag" onClick={toggleShow}>
        General
      </h1>
      <div className={hideClass}>
        <InputElement
          className={hideClass}
          type={"text"}
          label={"First Name"}
          id={"first-name"}
          placeholder={"First Name"}
          value={generalState.firstName}
          onChange={(e) => handleChange("general", "firstName", e.target.value)}
          style={getInputStyle("general", "firstName")}
          errorMessage={validationState.general.firstName}
        />
        <br />
        <InputElement
          className={hideClass}
          type={"text"}
          label={"Last Name"}
          id={"last-name"}
          placeholder={"Last Name"}
          value={generalState.lastName}
          onChange={(e) => handleChange("general", "lastName", e.target.value)}
          style={getInputStyle("general", "lastName")}
          errorMessage={validationState.general.lastName}
        />
        <br />
        <InputElement
          className={hideClass}
          type={"email"}
          label={"Email"}
          id={"email"}
          placeholder={"Email"}
          value={generalState.email}
          onChange={(e) => handleChange("general", "email", e.target.value)}
          style={getInputStyle("general", "email")}
          errorMessage={validationState.general.email}
        />
        <br />
        <InputElement
          className={hideClass}
          type={"telephone"}
          label={"Phone Number"}
          id={"phone-number"}
          placeholder={"Phone Number"}
          value={generalState.phoneNumber}
          onChange={(e) =>
            handleChange("general", "phoneNumber", e.target.value)
          }
          style={getInputStyle("general", "phone")}
          errorMessage={validationState.general.phoneNumber}
        />
        <br />
        <InputElement
          className={hideClass}
          type={"text"}
          label={"Location"}
          id={"location"}
          placeholder={"Location"}
          value={generalState.location}
          onChange={(e) => handleChange("general", "location", e.target.value)}
          style={getInputStyle("general", "location")}
          errorMessage={validationState.general.location}
        />
      </div>
    </>
  );
}
