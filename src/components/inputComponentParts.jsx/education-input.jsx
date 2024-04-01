function education({ onChange, education }) {
  return (
    <div>
      <label htmlFor="education">Education</label>
      <input
        type="text"
        name="education"
        id="education"
        value={education}
        onChange={onChange}
      />
    </div>
  );
}
export default education;
