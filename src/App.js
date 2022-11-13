import "./App.css";
import About from "./components/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/error";
import Navbar from "./components/navbar";
import Search from "./components/searchBar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
