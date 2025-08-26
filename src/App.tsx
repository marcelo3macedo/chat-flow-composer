import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flows from "./pages/Flows";
import Flow from "./pages/Flow";

function App() {
  return (
    <BrowserRouter basename="/chat-flow-composer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flows" element={<Flows />} />
        <Route path="/flow/:id" element={<Flow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;