import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Flow from "./pages/Flow";
import Home from "./pages/Home";

const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workflows/:id" element={<Flow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;