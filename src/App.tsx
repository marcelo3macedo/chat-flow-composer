import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Flow from "./pages/Flow";
import Flows from "./pages/Flows";
import Home from "./pages/Home";

const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flows" element={<Flows />} />
        <Route path="/flow/:id" element={<Flow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;