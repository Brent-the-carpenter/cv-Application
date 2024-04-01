function ViewPort() {
  return (
    <div className="viewport">
      <header>
        <h1 id="name"> Name </h1>
        <div id="Email"> Email</div>
        <div id="Phone"> Phone</div>
        <div id="location"> Location</div>
      </header>
      <main>
        <Education />
        <Experience />
      </main>
    </div>
  );
}
export default ViewPort;
