import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";
import { Ethereum } from "./view/Ethereum";
import { Avalanche } from "./view/Avalanche";
import { Polygon } from "./view/Polygon";
import { Bnb } from "./view/Bnb";
import { Arbitrum } from "./view/Arbitrum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ethereum" element={<Ethereum />} />
        <Route path="/avalanche" element={<Avalanche />} />
        <Route path="/polygon" element={<Polygon />} />
        <Route path="/bnb" element={<Bnb />} />
        <Route path="/arbitrum" element={<Arbitrum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
