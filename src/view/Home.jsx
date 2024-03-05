import { useState } from "react";
import "./home.css";
import { GasView } from "../modal/GasView";

export const Home = () => {
  const [chain, setChain] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="title-wrapper">
        <div className="title">Gas - trakcer...</div>
      </div>
      <div className="container">
        <div
          className="content ethereum"
          onClick={() => {
            openModal();
            setChain("ethereum");
          }}
        >
          <div contenteditable className="chain-name">
            ethereum
          </div>
          <div className="current-gas">30 wei</div>
        </div>
        <div
          className="content avalanche"
          onClick={() => {
            openModal();
            setChain("avalanche");
          }}
        >
          <div className="chain-name">avalanche</div>
          <div className="current-gas">30 wei</div>
        </div>
        <div
          className="content polygon"
          onClick={() => {
            openModal();
            setChain("polygon");
          }}
        >
          <div contenteditable className="chain-name">
            polygon
          </div>
          <div className="current-gas">30 wei</div>
        </div>
        <div
          className="content bnb"
          onClick={() => {
            openModal();
            setChain("bnb");
          }}
        >
          <div className="chain-name">bnb</div>
          <div className="current-gas">30 wei</div>
        </div>
        <div
          className="content arbitrum"
          onClick={() => {
            openModal();
            setChain("arbitrum");
          }}
        >
          <div className="chain-name">arbitrum</div>
          <div className="current-gas">30 wei</div>
        </div>
      </div>

      <GasView
        isOpen={isModalOpen}
        onClose={closeModal}
        chain={chain}
      ></GasView>
    </div>
  );
};
