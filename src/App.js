import "./App.css";
import About from "./components/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/error";
import Navbar from "./components/navbar";
import { Provider } from "./components/context";
import { useState } from "react";
import Search from "./components/searchBar";
function App() {
  const [loading, setLoading] = useState(true);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  return (
    <Provider value={{ loading, setLoading, url }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
