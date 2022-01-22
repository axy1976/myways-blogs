import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Editor } from "./Components/Editor";
import { About } from "./Components/About";
import { Blogs } from "./Components/Blogs";
import React from "react";

function App() {
  return (
    <Router>
      <Header/>
      <Routes path="/">
        <Route path="/" element={<Blogs/>} />
      </Routes>
      <Routes path="/About">
        <Route path="/About" element={<About/>} />
      </Routes>
      <Routes path="/Editor">
        <Route path="/Editor" element={<Editor/>} />
      </Routes>
    </Router>
  );
}

export default App;
