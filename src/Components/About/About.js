import "./About.scss";

const About = () => {
  const openResume = () => {
    return window.open("./../Resume/SiddhantKhannaResume.pdf", "_blank");
  };

  return (
    <div className="About">
      <h2>About me:</h2>
      <div className="Info">
        <p>
          Hi! My name is Sid, <br></br>I currently work at{" "}
          <a
            href="https://www.manulife.ca/"
            target="_blank"
            rel="noreferrer"
            className="Company"
          >
            Manulife / John Hancock
          </a>{" "}
          as a Software Engineer on Full-Stack Web Applications.<br></br> Before
          this I was studying Computer Science at{" "}
          <a href="https://www.ualberta.ca/" target="_blank" rel="noreferrer">
            University of Alberta
          </a>
          .
        </p>
      </div>
      <div className="Resume">
        <button className="ResumeButton" onClick={openResume}>
          View Resume
        </button>
      </div>
    </div>
  );
};

export default About;
