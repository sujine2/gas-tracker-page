import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "../socket/Socket";
import "chart.js/auto";
import { TopNavBar } from "../nav/TopNavBar";
import "./home.css";
import { BarTimer } from "../timer/BarTimer";

export const Home = () => {
  const navigate = useNavigate();
  const [gwei, setGwei] = useState(true);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container nav-bar">adfaf</div>
        <div className="container board">
          <TopNavBar setter={setGwei} />
          <BarTimer />
          <div className="border-container">
            <div className="home-chart-container">
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/ethereum");
                }}
              >
                ethereum
                {/* <LineChartSm color={"3, 230, 200"} /> */}
                <Socket
                  id={"ethereum"}
                  color={"3, 230, 200"}
                  isSm={true}
                  gwei={gwei}
                />
              </div>

              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/avalanche");
                }}
              >
                <span>avalanche</span>
                {/* <LineChartSm color={"253, 51, 0"} /> */}
                <Socket
                  id={"avalanche"}
                  color={"253, 51, 0"}
                  isSm={true}
                  gwei={gwei}
                />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/polygon");
                }}
              >
                <span>polygon</span>
                {/* <LineChartSm color={"173, 98, 242"} /> */}
                <Socket
                  id={"polygon"}
                  color={"173, 98, 242"}
                  isSm={true}
                  gwei={gwei}
                />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/bnb");
                }}
              >
                <span>bnb</span>
                {/* <LineChartSm color={"243, 255, 5"} /> */}
                <Socket
                  id={"bnb"}
                  color={"243, 255, 5"}
                  isSm={true}
                  gwei={gwei}
                />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/arbitrum");
                }}
              >
                <span>arbitrum</span>
                {/* <LineChartSm color={"83, 124, 238"} /> */}
                <Socket
                  id={"arbitrum"}
                  color={"83, 124, 238"}
                  isSm={true}
                  gwei={gwei}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
