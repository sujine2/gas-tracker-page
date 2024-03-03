import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <div className="title-wrapper">
        <div className="title">Gas - trakcer...</div>
      </div>
      <div className="container">
        <div className="content ethereum">
          <div contenteditable className="chain-name">
            ethereum
          </div>
          <div className="current-gas">30 wei</div>
        </div>
        <div className="content avalanche">
          <div className="chain-name">avalanche</div>
          <div className="current-gas">30 wei</div>
        </div>
        <div className="content polygon">
          <div contenteditable className="chain-name">
            polygon
          </div>
          <div className="current-gas">30 wei</div>
        </div>
        <div className="content bnb">
          <div className="chain-name">bnb</div>
          <div className="current-gas">30 wei</div>
        </div>
        <div className="content arbitrum">
          <div className="chain-name">arbitrum</div>
          <div className="current-gas">30 wei</div>
        </div>
      </div>
    </div>
  );
};
