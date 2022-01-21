import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Blogs } from "./Components/Blogs";
import React from "react";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Blogs/>} />
      </Routes>
    </Router>
  );
}

export default App;
