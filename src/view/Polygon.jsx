import { useState, useEffect } from "react";
import "./home.css";
import { BarChart } from "../chart/BarChart";
import { SubLineChart } from "../chart/SubLineChart";
import { Socket } from "../socket/Socket";
import { TopNavBar } from "../nav/TopNavBar";
import { BarTimer } from "../timer/BarTimer";

export const Polygon = () => {
  const [chain, setChain] = useState("");
  const [color, setColor] = useState("");
  const [gwei, setGwei] = useState(true);

  useEffect(() => {
    setChain("polygon");
    setColor("173, 98, 242");
  }, []);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container nav-bar">adfaf</div>
        <div className="container board">
          <TopNavBar setter={setGwei} chain={chain} />
          <BarTimer />
          <div className="border-container">
            <div className="main-chart">
              <div className="main-chart-content">
                <p className="gas-view-title">Real Time Gas</p>
                <Socket id={"polygon"} color={color} isSm={false} gwei={gwei} />
              </div>
            </div>
            <div className="sub-chart">
              <div className="sub-chart-content bar">
                <p className="gas-view-title-sm">Tx Amount</p>
                <BarChart color={color} />
              </div>
              <div className="sub-chart-content line">
                <p className="gas-view-title-sm"> Gas </p>
                <SubLineChart color={color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
