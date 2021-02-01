import loader from "./../../Images/loader.gif";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <img src={loader} className="loadingImage" />
    </div>
  );
};

export default Loader;
