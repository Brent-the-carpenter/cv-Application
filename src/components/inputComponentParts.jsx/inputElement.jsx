export default function InputElement({
  type,
  id,
  placeholder,
  value,
  onChange,
  style,
  errorMessage,
  isTextArea = false,
  label,
}) {
  const commonProps = {
    id,

    placeholder,
    value,
    onChange,
    style,

    "aria-describedby": errorMessage ? `${id}Error` : undefined,
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea cols={30} rows={5} {...commonProps} />
      ) : (
        <input type={type} {...commonProps} />
      )}
      {errorMessage && (
        <div id={`${id}Error`} style={{ color: "red" }} aria-live="assertive">
          {errorMessage}
        </div>
      )}
    </>
  );
}
