import InputElement from "./inputElement";

export default function General({
  className = "general",
  generalState,
  // setGeneralState,
  validationState,
  // checkForEmptyFields,
  handleChange,
  getInputStyle,
}) {
  return (
    <>
      <div className={className}>
        <h1>General</h1>
        <InputElement
          type={"text"}
          label={"First Name"}
          id={"first-name"}
          placeholder={"First Name"}
          value={generalState.firstName}
          onChange={(e) => handleChange("general", "firstName", e.target.value)}
          style={getInputStyle("general", "firstName")}
          errorMessage={validationState.general.firstName}
        />
        <InputElement
          type={"text"}
          label={"Last Name"}
          id={"last-name"}
          placeholder={"Last Name"}
          value={generalState.lastName}
          onChange={(e) => handleChange("general", "lastName", e.target.value)}
          style={getInputStyle("general", "lastName")}
          errorMessage={validationState.general.lastName}
        />
        <InputElement
          type={"text"}
          label={"Email"}
          id={"email"}
          placeholder={"Email"}
          value={generalState.email}
          onChange={(e) => handleChange("general", "email", e.target.value)}
          style={getInputStyle("general", "email")}
          errorMessage={validationState.general.email}
        />
        <InputElement
          type={"telephone"}
          label={"Phone Number"}
          id={"phone-number"}
          placeholder={"Phone Number"}
          value={generalState.phoneNumber}
          onChange={(e) =>
            handleChange("general", "phoneNumber", e.target.value)
          }
          style={getInputStyle("general", "phoneNumber")}
          errorMessage={validationState.general.phoneNumber}
        />
      </div>
    </>
  );
}
