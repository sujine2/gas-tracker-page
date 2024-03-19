import { Toggle } from "../button/Toggle";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const TopNavBar = (porps) => {
  const navigate = useNavigate();

  return (
    <div className="board-container menue">
      <div className="menue-container-left">
        <div className="menue-content">
          <div
            className="chain-name"
            onClick={() => {
              navigate("/");
            }}
          >
            All
          </div>
        </div>
        <div
          className="menue-content ethereum"
          onClick={() => {
            navigate("/ethereum");
          }}
        >
          <div
            className="chain-name"
            style={{ color: porps.chain == "ethereum" ? "#03e6c8" : "" }}
          >
            {porps.chain == "ethereum" ? "ethereum (sepolia)" : "ethereum"}
          </div>
        </div>
        <div
          className="menue-content avalanche"
          onClick={() => {
            navigate("/avalanche");
          }}
        >
          <div
            className="chain-name"
            style={{ color: porps.chain == "avalanche" ? "#fd3300" : "" }}
          >
            avalanche
          </div>
        </div>
        <div
          className="menue-content polygon"
          onClick={() => {
            navigate("/polygon");
          }}
        >
          <div
            className="chain-name"
            style={{ color: porps.chain == "polygon" ? "#c200fd" : "" }}
          >
            polygon
          </div>
        </div>
        <div
          className="menue-content bnb"
          onClick={() => {
            navigate("/bnb");
          }}
        >
          <div
            className="chain-name"
            style={{ color: porps.chain == "bnb" ? "#fdfd00" : "" }}
          >
            bnb
          </div>
        </div>
        <div
          className="menue-content arbitrum"
          onClick={() => {
            navigate("/arbitrum");
          }}
        >
          <div
            className="chain-name"
            style={{ color: porps.chain == "arbitrum" ? "#537CEE" : "" }}
          >
            arbitrum
          </div>
        </div>
      </div>
      <div className="menue-container-right">
        <div className="menue-content">
          <div className="control-unit">
            <Toggle setter={porps.setter} />
          </div>
        </div>
      </div>
    </div>
  );
};
