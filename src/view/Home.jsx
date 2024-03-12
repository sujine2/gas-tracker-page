import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { LineChartSm } from "../chart/LineChart-sm";
import "chart.js/auto";
import {Socket} from "../socket/Socket"

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-wrapper">
        <div className="container nav-bar">adfaf</div>
        <div className="container board">
          <div className="board-container menue">
            <div className="menue-container">
              <div className="menue-content">
                <div className="chain-name">All</div>
              </div>
              <div
                className="menue-content ethereum"
                onClick={() => {
                  navigate("/ethereum");
                }}
              >
                <div className="chain-name">ethereum</div>
              </div>
              <div
                className="menue-content avalanche"
                onClick={() => {
                  navigate("/avalanche");
                }}
              >
                <div className="chain-name">avalanche</div>
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
                  navigate("/bnb");
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
            <div className="home-chart-container">
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/ethereum");
                }}
              >
                ethereum
                <LineChartSm color={"3, 230, 200"} />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/avalanche");
                }}
              >
                <span>avalanche</span>
                <LineChartSm color={"253, 51, 0"} />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/polygon");
                }}
              >
                <span>polygon</span>
                <LineChartSm color={"173, 98, 242"} />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/bnb");
                }}
              >
                <span>bnb</span>
                <LineChartSm color={"243, 255, 5"} />
              </div>
              <div
                className="home-chart-content"
                onClick={() => {
                  navigate("/arbitrum");
                }}
              >
                <span>arbitrum</span>
                <LineChartSm color={"83, 124, 238"} />
              </div>
            </div>
          </div>

          <Socket/>
        </div>
      </div>
    </div>
  );
};
