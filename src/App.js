import "./App.css";
import ROUTES from "./routes";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import axios from "axios";
// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        {ROUTES.map((element) => {
          return <Route key={element.path} {...element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
