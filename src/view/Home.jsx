import { useState, useEffect} from "react";
import "./home.css";
import { GasView } from "../modal/GasView";

export const Home = () => {
  const [chain, setChain] = useState("");
  const [color, setColor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    openModal();
    setChain("ethereum");
    setColor("3, 230, 200");
  },[])

  return (
    <div>
      {/* <div className="title-wrapper">
        <div className="title">Gas - trakcer...</div>
      </div> */}
      <div className="container-wrapper">
        <div className="container nav-bar">
            adfaf
        </div>
        <div className="container board">
          <div className="board-container">
            <div
              className="board-content ethereum"
              onClick={() => {
                openModal();
                setChain("ethereum");
                setColor("3, 230, 200");
              }}
            >
              <div contenteditable className="chain-name" style={{ color: chain == "ethereum"? "#03e6c8" : "" }}>
                ethereum
              </div>
              {/* <div className="current-gas">30 wei</div> */}
            </div>
            <div
              className="board-content avalanche"
              onClick={() => {
              openModal();
              setChain("avalanche");
              setColor("253, 51, 0");
            }}
            >
              <div className="chain-name" style={{ color: chain == "avalanche"? "#fd3300" : "" }}>avalanche</div>
              {/* <div className="current-gas">30 wei</div> */}
            </div>
            <div
              className="board-content polygon"
              onClick={() => {
                openModal();
                setChain("polygon");
                setColor("173, 98, 242");
              }}
            >
              <div contenteditable className="chain-name" style={{ color: chain == "polygon"? "#c200fd" : "" }}>
                polygon
              </div>
              {/* <div className="current-gas">30 wei</div> */}
            </div>
            <div
              className="board-content bnb"
              onClick={() => {
                openModal();
                setChain("bnb");
                setColor("243, 255, 5");
              }}
            >
              <div className="chain-name" style={{ color: chain == "bnb"? "#fdfd00" : "" }}>bnb</div>
              {/* <div className="current-gas">30 wei</div> */}
            </div>
            <div
              className="board-content arbitrum"
              onClick={() => {
                openModal();
                setChain("arbitrum");
                setColor("83, 124, 238");
              }}
            >
              <div className="chain-name" style={{ color: chain == "arbitrum"? "#537cee" : "" }}>arbitrum</div>
              {/* <div className="current-gas">30 wei</div> */}
            </div>
          </div>
        </div>
        
      </div>
      

      <GasView
        isOpen={isModalOpen}
        onClose={closeModal}
        chain={chain}
        color={color}
      ></GasView>
    </div>
  );
};
