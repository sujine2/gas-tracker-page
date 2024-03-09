import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { LineChart } from "../chart/LineChart";
import { BarChart } from "../chart/BarChart";
import { SubLineChart } from "../chart/SubLineChart";
import "chart.js/auto";

export const Avalanche = () => {
  const [chain, setChain] = useState("");
  const [color, setColor] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setChain("avalanche");
    setColor("253, 51, 0");
  }, []);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container nav-bar">adfaf</div>
        <div className="container board">
          <div className="board-container menue">
            <div className="menue-container">
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
                <div className="chain-name">ethereum</div>
              </div>
              <div className="menue-content avalanche">
                <div
                  className="chain-name"
                  style={{ color: chain == "avalanche" ? "#fd3300" : "" }}
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
                <div className="chain-name">polygon</div>
              </div>
              <div
                className="menue-content bnb"
                onClick={() => {
                  navigate("bnb");
                }}
              >
                <div className="chain-name">bnb</div>
              </div>
              <div
                className="menue-content arbitrum"
                onClick={() => {
                  navigate("/arbitrum");
                }}
              >
                <div className="chain-name">arbitrum</div>
              </div>
            </div>
          </div>

          <div className="border-container">
            <div className="main-chart">
              <div className="main-chart-content">
                <p className="gas-view-title">Real Time Gas</p>
                <LineChart color={color} />
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