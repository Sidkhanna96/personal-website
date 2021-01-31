import "./Connect.scss";

const Connect = () => {
  return (
    <div className="Connect">
      <div className="Name">Siddhant Khanna</div>
      <div className="MediaLinks">
        <a
          href="https://www.linkedin.com/in/sidkh96/"
          target="_blank"
          rel="noreferrer"
          className="LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://github.com/Sidkhanna96"
          target="_blank"
          rel="noreferrer"
          className="GitHub"
        >
          <i className="fab fa-github github" />
        </a>
        <a
          href="mailto: siddhant.khanna@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="Email"
        >
          <i className="fas fa-envelope email" />
        </a>
      </div>
    </div>
  );
};

export default Connect;
