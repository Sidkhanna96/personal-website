import { useEffect, useState } from "react";
import "./Projects.scss";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Sidkhanna96/repos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "NoToken",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="Projects">
      <h2>Projects</h2>
      {data && data.map((d) => <div>{d.name}</div>)}
    </div>
  );
};

export default Projects;
