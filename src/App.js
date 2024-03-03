import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ethereum" element={About} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
